import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";

export default class Player extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();
  }

  componentDidMount() {
    const {poster, src} = this.props;
    const video = this._videoRef.current;

    video.src = src;
    video.poster = poster;
    video.autoplay = true;

  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.src = ``;
    video.poster = ``;
  }

  componentDidUpdate() {
    const video = this._videoRef.current;
    const {isPlaying} = this.props;

    if (isPlaying) {
      video.play();
    } else {
      video.load();
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="player">
          <video ref={this._videoRef} className="player__video" />

          {/* <button type="button" className="player__exit">Exit</button>

          <div className="player__controls">
            <div className="player__controls-row">
              <div className="player__time">
                <progress className="player__progress" value="30" max="100"></progress>
                <div className="player__toggler" style="left: 30%;">Toggler</div>
              </div>
              <div className="player__time-value">1:30:29</div>
            </div>

            <div className="player__controls-row">
              <button type="button" className="player__play">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <div className="player__name">Transpotting</div>

              <button type="button" className="player__full-screen">
                <svg viewBox="0 0 27 27" width="27" height="27">
                  <use xlinkHref="#full-screen"></use>
                </svg>
                <span>Full screen</span>
              </button>
            </div>
          </div> */}
        </div>
      </React.Fragment>
    );
  }
}


Player.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  poster: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};
