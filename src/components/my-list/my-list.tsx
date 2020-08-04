import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import {filmsType} from "../../types/types";
import {getFavoriteFilms} from "../../reducer/data/selectors";
import {getUserInfo} from "../../reducer/user/selectors";
import {Operation as OperationData} from "../../reducer/data/data";

import Footer from "../footer/footer";
import Loader from "../loader/loader";
import Logo from "../logo/logo";
import MoviesList from "../movies-list/movies-list";
import withActiveItem from "../../hocs/with-active-item/with-active-item";

const MoviesListWrapped = withActiveItem(MoviesList);

class MyList extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {onLoadFavoriteFilms} = this.props;
    onLoadFavoriteFilms();
  }


  render() {
    const {films, userInfo} = this.props;

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
            />

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
  films: getFavoriteFilms(state),
  userInfo: getUserInfo(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoadFavoriteFilms() {
    dispatch(OperationData.loadFavoriteFilms());
  }

});

export {MyList};

export default connect(mapStateToProps, mapDispatchToProps)(MyList);

