import React, {PureComponent, Fragment, createRef} from "react";
import PropTypes from "prop-types";

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();

    this.state = {
      isPlaying: props.isPlaying,
    };

  }

  componentDidMount() {
    const {poster, src} = this.props;
    const video = this._videoRef.current;

    video.src = src;
    video.poster = poster;

    video.onplay = () => {
      this.setState({
        isPlaying: true,
      });
    };

    video.onload = () => {
      this.setState({
        isPlaying: false,
      });

    };
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    video.onplay = null;
    video.onload = null;

    video.src = ``;
    video.poster = ``;

  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (this.props.isPlaying) {
      video.play();
    } else {
      video.load();
    }
  }


  render() {

    return (
      <Fragment>
        <video ref={this._videoRef} muted width="280" height="175" />
      </Fragment>
    );
  }

}


VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  poster: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};
