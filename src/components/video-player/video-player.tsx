import * as React from "react";


interface Props {
  isPlaying: boolean;
  poster: string;
  src: string;
}
export default class VideoPlayer extends React.PureComponent<Props, {}> {
  private videoRef: React.RefObject<HTMLVideoElement>;

  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
  }

  componentDidMount() {
    const {poster, src} = this.props;
    const video = this.videoRef.current;

    video.src = src;
    video.poster = poster;
    video.muted = true;
  }

  componentWillUnmount() {
    const video = this.videoRef.current;

    video.src = ``;
    video.poster = ``;
  }

  componentDidUpdate() {
    const video = this.videoRef.current;
    const {isPlaying} = this.props;

    if (isPlaying) {
      video.play();
    } else {
      video.load();
    }
  }

  render() {
    return (
      <video ref={this.videoRef} width="280" height="175" />
    );
  }
}

