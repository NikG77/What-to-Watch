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

  render() {
    const {preview, src} = this.props;
    // const {preview, src, title} = film;

    return (
      <Fragment>
        <video src={preview} muted poster={src} width="280" height="175" />
      </Fragment>
    );
  }

}


VideoPlayer.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  preview: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};
