import * as React from "react";

import {AppRoute} from "../../const";
import {formateDuration} from "../../utils/utils";
import history from "../../history";

interface Props {
  duration: number;
  id: number;
  isPlay: boolean;
  forwardedRef: any;
  onFullScreenClick: () => void;
  onPlayClick: () => void;
  progress: number;
  setDuration: () => void;
}

const Player: React.FunctionComponent<Props> = (props: Props) => {
  const {
    duration,
    id,
    isPlay,
    forwardedRef,
    onFullScreenClick,
    onPlayClick,
    progress,
    setDuration
  } = props;

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



const PlayerWrap = React.forwardRef<React.FunctionComponent, Props>((props, ref) => <Player {...props} forwardedRef={ref} />);

export {Player};
export default PlayerWrap;
