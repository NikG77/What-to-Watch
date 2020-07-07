import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import {formateDuration} from "../../utils/common.js";

export default class Player extends PureComponent {
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
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    }
  }

  setDuration() {
    const video = this._videoRef.current;
    this.setState({
      duration: video.duration,
    });
  }

  componentDidMount() {
    const {src} = this.props;
    const video = this._videoRef.current;

    video.src = src;
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
    const {onExitPlayButtonClick} = this.props;

    return (
      <React.Fragment>
        <div className="player">
          <video
            ref={this._videoRef}
            onLoadedMetadata={this.setDuration}
            className="player__video" />

          <button onClick={onExitPlayButtonClick} type="button" className="player__exit">Exit</button>

          <div className="player__controls">
            <div className="player__controls-row">
              <div className="player__time">
                <progress className="player__progress" value={progress} max="100"></progress>
                <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
              </div>
              <div className="player__time-value">{formateDuration(duration)}</div>
            </div>

            <div className="player__controls-row">
              <button onClick={this.handlerPlayClick} type="button" className="player__play">

                {isPlay || <React.Fragment><svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span></React.Fragment>}

                {isPlay && <React.Fragment>
                  <svg viewBox="0 0 14 21" width="14" height="21">
                    <use xlinkHref="#pause"></use>
                  </svg>
                  <span>Pause</span></React.Fragment>}


              </button>
              <div className="player__name">Transpotting</div>

              <button onClick={this.handlerFullScreenClick} type="button" className="player__full-screen">
                <svg viewBox="0 0 27 27" width="27" height="27">
                  <use xlinkHref="#full-screen"></use>
                </svg>
                <span>Full screen</span>
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}


Player.propTypes = {
  isPlayerActive: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  onExitPlayButtonClick: PropTypes.func.isRequired,
};
