import * as React from "react";

import {connect} from "react-redux";
import {getFilmById} from "../../reducer/watch/selectors";
 import {FilmType} from "../../types";

 interface State {
  isPlay: boolean,
  duration: number;
  progress: number;
}
interface Props {
  film: FilmType;
  id: number;
};

const withVideo = (Component) => {

  class WithVideo extends React.PureComponent<Props, State> {
    private videoRef: React.RefObject<HTMLVideoElement>;

    constructor(props) {
      super(props);

      this.state = {
        isPlay: true,
        duration: 0,
        progress: 0,
      };

      this.videoRef = React.createRef();

      this._handleFullScreenClick = this._handleFullScreenClick.bind(this);
      this._handlePlayClick = this._handlePlayClick.bind(this);
      this.setDuration = this.setDuration.bind(this);
    }

    _handlePlayClick() {
      this.setState((prevState) => ({isPlay: !prevState.isPlay}));
    }

    _handleFullScreenClick() {
      const video = this.videoRef.current;

      if (video.requestFullscreen) {
        video.requestFullscreen();
      }
    }

    setDuration() {
      const video = this.videoRef.current;
      this.setState({
        duration: video.duration,
      });
    }

    componentDidMount() {
      const {film} = this.props;

      const video = this.videoRef.current;

      video.poster = film.poster;
      video.src = film.videoLink;
      video.autoplay = true;

      video.onpause = () => this.setState({
        isPlay: false,
      });

      video.onplay = () => {
        this.setState({
          isPlay: true,
        });
      };

      video.ontimeupdate = () =>
        this.setState({
          progress: video.currentTime * 100 / video.duration,
        });
    }

    componentWillUnmount() {
      const video = this.videoRef.current;

      video.poster = ``;
      video.src = ``;
      video.onpause = null;
      video.onplay = null;
      video.ontimeupdate = null;
    }


    componentDidUpdate(prevProps, prevState) {
      const video = this.videoRef.current;
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
          ref={this.videoRef}
          isPlay={isPlay}
          duration={duration}
          progress={progress}
          onPlayClick={this._handlePlayClick}
          onFullScreenClick={this._handleFullScreenClick}
          setDuration={this.setDuration}
        />
      );
    }
  }


  const mapStateToProps = (state, props) => ({
    film: getFilmById(state, props.id),
  });

  return connect(mapStateToProps)(WithVideo);

};

export default withVideo;

