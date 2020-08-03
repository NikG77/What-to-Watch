import React from "react";
import PropTypes from "prop-types";
import {formateDuration} from "../../utils/utils.js";
import history from "../../history.js";
// import Loader from "../loader/loader.jsx";
import {AppRoute} from "../../const.js";
import {filmType} from "../../types/types";

const Player = (props) => {
  const {id, isPlay, duration, progress, onPlayClick, onFullScreenClick, forwardedRef, setDuration} = props;

  return (
    <div className="player">

      <video
        ref={forwardedRef}
        onLoadedMetadata={setDuration}
        className="player__video"
      />

      <button type="button" className="player__exit"
        onClick={() => history.push(`${AppRoute.FILM}/${id}`)}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max="100"></progress>
            <div className="player__toggler" style={{left: `${progress}%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{formateDuration(duration * (100 - progress) / 100)}</div>
        </div>

        <div className="player__controls-row">
          <button onClick={onPlayClick} type="button" className="player__play">

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

          <button onClick={onFullScreenClick} type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>

    </div>

  );

};


Player.propTypes = {
  isPlay: PropTypes.bool.isRequired,
  duration: PropTypes.number.isRequired,
  progress: PropTypes.number.isRequired,
  onPlayClick: PropTypes.func.isRequired,
  onFullScreenClick: PropTypes.func.isRequired,
  setDuration: PropTypes.func.isRequired,
  forwardedRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({current: PropTypes.any})
  ]),
  id: PropTypes.oneOfType([
    () => null,
    PropTypes.number.isRequired,
  ]),
  film: PropTypes.oneOfType([
    filmType.isRequired,
    PropTypes.oneOf([null]).isRequired,
  ]),
};

const PlayerWrap = React.forwardRef((props, ref) => <Player {...props} forwardedRef={ref} />);

export {Player};
export default PlayerWrap;
