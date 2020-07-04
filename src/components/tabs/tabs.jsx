import React from "react";
import PropTypes from "prop-types";
import Overview from "../overview/overview.jsx";
import Details from "../details/details.jsx";
import Reviews from "../reviews/reviews.jsx";
import {filmType} from "../../types";
import {reviews} from "../../mock/films.js";


const tabs = [`Overview`, `Details`, `Reviews`];

const Tabs = (props) => {

  const {film, activeItem, onItemClick: onTabClick} = props;

  const activeTab = activeItem || tabs[2];


  return (
    <React.Fragment>

      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {tabs.map((tab) => (
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

      {activeTab === tabs[0] && <Overview film={film}/>}
      {activeTab === tabs[1] && <Details film={film}/>}
      {activeTab === tabs[2] && <Reviews reviews={reviews}/>}

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

};

export default Tabs;


