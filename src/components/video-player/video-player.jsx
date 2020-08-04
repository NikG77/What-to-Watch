import * as React from "react";
import PropTypes from "prop-types";

export default class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = React.createRef();
  }

  componentDidMount() {
    const {poster, src} = this.props;
    const video = this._videoRef.current;

    video.src = src;
    video.poster = poster;
    video.muted = true;
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
      <video ref={this._videoRef} width="280" height="175" />
    );
  }
}


VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  poster: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

