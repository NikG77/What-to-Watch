import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Logo from "../logo/logo.jsx";
import {getUserInfo} from "../../reducer/user/selectors.js";
import {filmType} from "../../types/types";
import {Operation as DataOperation} from "../../reducer/data/data.js";
import {getFilmById} from "../../reducer/watch/selectors.js";
import {getReviewFormStatus} from "../../reducer/data/selectors.js";
import {AppRoute} from "../../const.js";
import {Link} from "react-router-dom";


const DEFAULT_CHECKED_NUMBER = 3;
const NUMBER_STARS = 5;

// заменить перед сдачей проекта на 50
const ReviewLength = {
  MIN: 5,
  MAX: 400,
};

class AddReview extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      rating: DEFAULT_CHECKED_NUMBER,
      review: ``,

    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(evt) {
    const {name, value} = evt.target;
    this.setState({[name]: value});
  }

  handleSubmit(evt) {
    const {onReviewSubmit, film} = this.props;
    evt.preventDefault();

    onReviewSubmit(film.id, {
      rating: this.state.rating,
      comment: this.state.review,
    });
  }

  render() {
    const {film, userInfo, isFormDisabled} = this.props;

    if (film) {
      const {title, pictureBackground, poster, id} = film;

      return (
        <section className="movie-card movie-card--full">
          <div className="movie-card__header">
            <div className="movie-card__bg">
              <img src={pictureBackground} alt={title} />
            </div>

            <h1 className="visually-hidden">WTW</h1>

            <header className="page-header">
              <Logo />

              <nav className="breadcrumbs">
                <ul className="breadcrumbs__list">
                  <li className="breadcrumbs__item">
                    <Link to={`${AppRoute.FILM}/${id}`} className="breadcrumbs__link">{title}</Link>
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
            <form action="#"
              className="add-review__form"
              onSubmit={this.handleSubmit}
            >
              <div className="rating">
                <div className="rating__stars">
                  {new Array(NUMBER_STARS).fill(``).map((number, i) => {
                    const index = i + 1;
                    const checkedNumber = index - DEFAULT_CHECKED_NUMBER;
                    return (
                      <React.Fragment key={index}>
                        <input className="rating__input"
                          onChange={this.handleInputChange}
                          id={`star-${index}`}
                          type="radio"
                          name="rating"
                          defaultValue={index}
                          defaultChecked={!checkedNumber}
                          disabled={isFormDisabled} />
                        <label className="rating__label" htmlFor={`star-${index}`}>Rating {index}</label>
                      </React.Fragment>
                    );
                  })}

                </div>
              </div>

              <div className="add-review__text">
                <textarea className="add-review__textarea"
                  onChange={this.handleInputChange}
                  value={this.state.review.value}
                  name="review"
                  id="review-text"
                  placeholder="Review text"
                  minLength={ReviewLength.MIN}
                  maxLength={ReviewLength.MAX}
                  disabled={isFormDisabled}
                  required
                />
                <div className="add-review__submit">
                  <button className="add-review__btn"
                    type="submit"
                    disabled={isFormDisabled || this.state.review.length < ReviewLength.MIN}
                  >Post</button>
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
    () => null,
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      email: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string.isRequired,
    }).isRequired,
  ]),

  onReviewSubmit: PropTypes.func.isRequired,
  film: PropTypes.oneOfType([
    filmType.isRequired,
    PropTypes.oneOf([null]).isRequired,
  ]),
  isFormDisabled: PropTypes.bool.isRequired,
  id: PropTypes.oneOfType([
    () => null,
    PropTypes.number.isRequired,
  ]),
};

const mapStateToProps = (state, props) => ({
  userInfo: getUserInfo(state),
  isFormDisabled: getReviewFormStatus(state),
  film: getFilmById(state, props),
});

const mapDispatchToProps = (dispatch) => ({
  onReviewSubmit(id, comment) {
    dispatch(DataOperation.postComments(id, comment));
  }
});

export {AddReview};

export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
