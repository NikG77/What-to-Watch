import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Overview from "../overview/overview.jsx";
import Details from "../details/details.jsx";
import Reviews from "../reviews/reviews.jsx";
import {filmType} from "../../types";
// import {reviews} from "../../mock/films.js";
import {TabName} from "../../const.js";
import {Operation as DataOperation} from "../../reducer/data/data.js";


const Tabs = (props) => {
  const {film, activeItem, onItemClick: onTabClick, onGetComments} = props;
  const activeTab = activeItem || TabName.OVERVIEW;
  onGetComments(film.id);

  return (
    <React.Fragment>

      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {Object.values(TabName).map((tab) => (
            <li
              key={tab}
              onClick={(evt) => {
                evt.preventDefault();
                onTabClick(tab);
              }}
              className={`movie-nav__item ${activeTab === tab ? `movie-nav__item--active` : ``}`}>
              <a href="#" className="movie-nav__link">{tab}</a>
            </li>
          ))}
        </ul>
      </nav>

      {activeTab === TabName.OVERVIEW && <Overview film={film}/>}
      {activeTab === TabName.DETAILS && <Details film={film}/>}
      {activeTab === TabName.REVIEWS && <Reviews id={film.id}/>}

    </React.Fragment>
  );
};


Tabs.propTypes = {
  onItemClick: PropTypes.func.isRequired,
  activeItem: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.oneOf([null]).isRequired,
  ]),
  film: PropTypes.oneOfType([
    filmType.isRequired,
    PropTypes.oneOf([null]).isRequired,
  ]),
  onGetComments: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onGetComments(id) {
    dispatch(DataOperation.loadComments(id));
  },
});


export {Tabs};

export default connect(null, mapDispatchToProps)(Tabs);

