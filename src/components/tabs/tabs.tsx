import * as React from "react";

import Overview from "../overview/overview";
import Details from "../details/details";
import Reviews from "../reviews/reviews";
import {FilmType} from "../../types";
import {TabName} from "../../const";


interface Props {
  activeItem: string,
  film: FilmType;
  onItemClick: (tab: {}) => void;
}


const Tabs: React.FunctionComponent<Props> = (props: Props) => {
  const {activeItem, film, onItemClick: onTabClick} = props;
  const activeTab = activeItem || TabName.OVERVIEW;
  
  const tabItems: string[] = Object.values(TabName);

  return (
    <React.Fragment>

      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {tabItems.map((tab) => (
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


export default Tabs;

