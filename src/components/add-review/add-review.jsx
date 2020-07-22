import React, {PureComponent, createRef} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getUserInfo} from "../../reducer/user/selectors.js";
// import {getMovie} from "../../reducer/watch/selectors.js";
import {filmType} from "../../types";
import {Operation as DataOperation} from "../../reducer/data/data.js";


const DEFAULT_CHECKED_NUMBER = 3;
const NUMBER_STARS = 5;

class AddReview extends PureComponent {
  constructor(props) {
    super(props);

    this.ratingRef = createRef();
    this.commentRef = createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    const {onReviewSubmit, film} = this.props;

    evt.preventDefault();

    onReviewSubmit(film.id, {
      rating: this.ratingRef.current.value,
      comment: this.commentRef.current.value,
    });
  }

  render() {
    const {film, userInfo} = this.props;

    if (film) {
      const {title, pictureBackground, poster} = film;

      return (
        <section className="movie-card movie-card--full">
          <div className="movie-card__header">
            <div className="movie-card__bg">
              <img src={pictureBackground} alt={title} />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header">
              <div className="logo">
                <a href="main.html" className="logo__link">
                  <span className="logo__letter logo__letter--1">W</span>
                  <span className="logo__letter logo__letter--2">T</span>
                  <span className="logo__letter logo__letter--3">W</span>
                </a>
              </div>

              <nav className="breadcrumbs">
                <ul className="breadcrumbs__list">
                  <li className="breadcrumbs__item">
                    <a href="movie-page.html" className="breadcrumbs__link">{title}</a>
                  </li>
                  <li className="breadcrumbs__item">
                    <a className="breadcrumbs__link">Add review</a>
                  </li>
                </ul>
              </nav>


              <div className="user-block">
                <div className="user-block__avatar">
                  <img src={userInfo.avatarUrl} alt="User avatar" width="63" height="63" />
                </div>
              </div>
            </header>

            <div className="movie-card__poster movie-card__poster--small">
              <img src={poster} alt={`${title} poster`} width="218" height="327" />
            </div>
          </div>

          <div className="add-review">
            <form action="#" className="add-review__form"
              onSubmit={this.handleSubmit}>
              <div className="rating">
                <div className="rating__stars">
                  {new Array(NUMBER_STARS).fill(``).map((number, i) => {
                    const index = i + 1;
                    const checkedNumber = index - DEFAULT_CHECKED_NUMBER;
                    return (
                      <React.Fragment key={index}>
                        <input className="rating__input"
                          ref={this.ratingRef}
                          id={`star-${index}`}
                          type="radio"
                          name="rating"
                          defaultValue={index}
                          defaultChecked={!checkedNumber} />
                        <label className="rating__label" htmlFor={`star-${index}`}>Rating {index}</label>
                      </React.Fragment>
                    );
                  })}

                </div>
              </div>

              <div className="add-review__text">
                <textarea className="add-review__textarea"
                  ref={this.commentRef}
                  name="review-text"
                  id="review-text"
                  placeholder="Review text"
                  minLength={5}
                  maxLength={400}
                  required />
                <div className="add-review__submit">
                  <button className="add-review__btn" type="submit">Post</button>
                </div>

              </div>
            </form>
          </div>

        </section>
      );
    }
    return null;

  }

}


AddReview.propTypes = {
  userInfo: PropTypes.oneOfType([
    PropTypes.oneOf([null]).isRequired,
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      date: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      idUser: PropTypes.number.isRequired,
    }).isRequired,
  ]),
  onReviewSubmit: PropTypes.func.isRequired,
  film: PropTypes.oneOfType([
    filmType.isRequired,
    PropTypes.oneOf([null]).isRequired,
  ]),
};

const mapStateToProps = (state) => ({
  userInfo: getUserInfo(state),
  // film: getMovie(state),
});


const mapDispatcToProps = (dispatch) => ({
  onReviewSubmit(id, comment) {

    dispatch(DataOperation.postComments(id, comment));
  }
});

export {AddReview};

export default connect(mapStateToProps, mapDispatcToProps)(AddReview);
