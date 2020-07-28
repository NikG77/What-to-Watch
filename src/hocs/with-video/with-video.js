import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getFilm} from "../../reducer/watch/selectors.js";
import {filmType} from "../../types/types";

const withVideo = (Component) => {

  class WithVideo extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlay: true,
        duration: 0,
        progress: 0,
      };

      this._videoRef = createRef();

      this.handlerPlayClick = this.handlerPlayClick.bind(this);
      this.handlerFullScreenClick = this.handlerFullScreenClick.bind(this);
      this.setDuration = this.setDuration.bind(this);
    }

    handlerPlayClick() {
      this.setState((prevState) => ({isPlay: !prevState.isPlay}));
    }

    handlerFullScreenClick() {
      const video = this._videoRef.current;

      if (video.requestFullscreen) {
        video.requestFullscreen();
      }
    }

    setDuration() {
      const video = this._videoRef.current;
      this.setState({
        duration: video.duration,
      });
    }

    componentDidMount() {
      const {film} = this.props;

      const video = this._videoRef.current;

      video.src = film.videoLink;
      video.autoplay = true;

      video.onplay = () => {
        this.setState({
          isPlay: true,
        });
      };

      video.onpause = () => this.setState({
        isPlay: false,
      });

      video.ontimeupdate = () =>
        this.setState({
          progress: video.currentTime * 100 / video.duration,
        });
    }

    componentWillUnmount() {
      const video = this._videoRef.current;

      video.src = ``;
      video.ontimeupdate = null;
      video.onpause = null;
      video.onplay = null;
    }


    componentDidUpdate(prevProps, prevState) {
      const video = this._videoRef.current;
      const {isPlay} = this.state;

      if (this.state.isPlay !== prevState.isPlay) {
        if (isPlay) {
          video.play();
        } else {
          video.pause();
        }
      }
    }


    render() {
      const {isPlay, duration, progress} = this.state;

      return (
        <Component
          {...this.props}
          ref={this._videoRef}
          isPlay={isPlay}
          duration={duration}
          progress={progress}
          onPlayClick={this.handlerPlayClick}
          onFullScreenClick={this.handlerFullScreenClick}
          setDuration={this.setDuration}
        />
      );
    }
  }


  WithVideo.propTypes = {
    film: PropTypes.oneOfType([
      filmType.isRequired,
      PropTypes.oneOf([null]).isRequired,
    ]),
  };

  const mapStateToProps = (state) => ({
    film: getFilm(state),
  });

  return connect(mapStateToProps)(WithVideo);

};

export default withVideo;

