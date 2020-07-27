import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Logo from "../logo/logo.jsx";
import Footer from "../footer/footer.jsx";
import {getUserInfo} from "../../reducer/user/selectors.js";
import {connect} from "react-redux";
import {Operation as OperationData} from "../../reducer/data/data.js";
import {getFavoriteFilms} from "../../reducer/data/selectors.js";
import {filmsType} from "../../types/types";
import Loader from "../loader/loader.jsx";
import MoviesList from "../movies-list/movies-list.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item.js";

const MoviesListWrapped = withActiveItem(MoviesList);

class MyList extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {onLoadFavoriteFilms} = this.props;
    onLoadFavoriteFilms();
  }


  render() {
    const {userInfo, films} = this.props;

    return (
      films ?
        <div className="user-page">
          <header className="page-header user-page__head">
            <Logo />

            <h1 className="page-title user-page__title">My list</h1>

            <div className="user-block">
              <div className="user-block__avatar">
                <img src={userInfo.avatarUrl} alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>

            <MoviesListWrapped
              genreFilms={films}
            // onSmallMovieCardClick={onSmallMovieCardClick}
            />

            <div className="catalog__movies-list">
              <article className="small-movie-card catalog__movies-card">
                <div className="small-movie-card__image">
                  <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
                </div>
                <h3 className="small-movie-card__title">
                  <a className="small-movie-card__link" href="movie-page.html">Fantastic Beasts: The Crimes of Grindelwald</a>
                </h3>
              </article>

              <article className="small-movie-card catalog__movies-card">
                <div className="small-movie-card__image">
                  <img src="img/bohemian-rhapsody.jpg" alt="Bohemian Rhapsody" width="280" height="175" />
                </div>
                <h3 className="small-movie-card__title">
                  <a className="small-movie-card__link" href="movie-page.html">Bohemian Rhapsody</a>
                </h3>
              </article>

              <article className="small-movie-card catalog__movies-card">
                <div className="small-movie-card__image">
                  <img src="img/macbeth.jpg" alt="Macbeth" width="280" height="175" />
                </div>
                <h3 className="small-movie-card__title">
                  <a className="small-movie-card__link" href="movie-page.html">Macbeth</a>
                </h3>
              </article>

              <article className="small-movie-card catalog__movies-card">
                <div className="small-movie-card__image">
                  <img src="img/aviator.jpg" alt="Aviator" width="280" height="175" />
                </div>
                <h3 className="small-movie-card__title">
                  <a className="small-movie-card__link" href="movie-page.html">Aviator</a>
                </h3>
              </article>


              <article className="small-movie-card catalog__movies-card">
                <div className="small-movie-card__image">
                  <img src="img/shutter-island.jpg" alt="Shutter Island" width="280" height="175" />
                </div>
                <h3 className="small-movie-card__title">
                  <a className="small-movie-card__link" href="movie-page.html">Shutter Island</a>
                </h3>
              </article>
            </div>
          </section>

          <Footer />
        </div>
        : <Loader />
    );
  }

}

MyList.propTypes = {
  userInfo: PropTypes.oneOfType([
    () => null,
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      email: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string.isRequired,
    }).isRequired,
  ]),
  onLoadFavoriteFilms: PropTypes.func.isRequired,
  films: PropTypes.oneOfType([
    filmsType.isRequired,
    PropTypes.oneOf([null]).isRequired,
  ]),
};


const mapStateToProps = (state) => ({
  userInfo: getUserInfo(state),
  films: getFavoriteFilms(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadFavoriteFilms() {
    dispatch(OperationData.loadFavoriteFilms());
  }

});

export {MyList};
export default connect(mapStateToProps, mapDispatchToProps)(MyList);

