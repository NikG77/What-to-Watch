import React from "react";
// import PropTypes from "prop-types";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import withVideo from "./with-video.js";

configure({adapter: new Adapter()});

const Player = () => <div />;
// const Player = (props) => {
//   const {onExitPlayButtonClick, src} = props;
//   return (
//     <div>
//       <video src={src} />
//       <button onClick={onExitPlayButtonClick} />
//     </div>
//   );
// };

// Player.propTypes = {
//   onExitPlayButtonClick: PropTypes.func.isRequired,
//   src: PropTypes.string.isRequired,
// };

const PlayerWrapped = withVideo(Player);

const films = [
  {title: `Fantastic Beasts: The Crimes of Grindelwald`,
    src: `img/bohemian-rhapsody.jpg`,
    poster: ``,
    ratingScore: 6.7,
    ratingCount: 200,
    director: ``,
    starring: [`Robert De Niro`, `Matt Damon`, `Tom Hanks`],
    genre: `Drama`,
    releaseDate: 2000,
    pictureBackground: ``,
    previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  },
  {title: `Bohemian Rhapsody`,
    src: `img/bohemian-rhapsody.jpg`,
    poster: ``,
    ratingScore: 6.7,
    ratingCount: 200,
    director: ``,
    starring: [`Robert De Niro`, `Matt Damon`, `Tom Hanks`],
    genre: `Romance`,
    releaseDate: 2000,
    pictureBackground: ``,
    previewVideo: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  }];


it(`Checks that HOC's callback turn on video (play)`, () => {
  const wrapper = shallow(<PlayerWrapped

    // ref={}
    isPlay={false}
    duration={0}
    progress={0}
    onPlayClick={() => {}}
    onFullScreenClick={() => {}}
    setDuration={() => {}}
    src={films[0].previewVideo}
    onExitPlayButtonClick={() => {}}
  />);

  window.HTMLMediaElement.prototype.play = () => {};
  // const {_videoRef} = wrapper.instance();

  // jest.spyOn(_videoRef.current, `play`);

  // wrapper.instance().componentDidMount();
  wrapper.find(`button.player__play`).simulate(`click`);

  expect(wrapper.state().isPlay).toBeTruthy();

});
