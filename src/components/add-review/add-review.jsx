import * as React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

import {AppRoute, DEFAULT_CHECKED_STARS, NUMBER_STARS, ReviewLength} from "../../const.js";
import {filmType} from "../../types/types";
import {getUserInfo} from "../../reducer/user/selectors.js";
import {getFilmById} from "../../reducer/watch/selectors.js";
import {getReviewFormStatus} from "../../reducer/data/selectors.js";

import Logo from "../logo/logo.jsx";

const AddReview = (props) => {

  const {id, film, userInfo, isFormDisabled, onSubmitForm, onChangeInput, review} = props;

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
            onSubmit={onSubmitForm}
          >
            <div className="rating">
              <div className="rating__stars">
                {new Array(NUMBER_STARS).fill(``).map((number, i) => {
                  const index = i + 1;
                  const checkedNumber = index - DEFAULT_CHECKED_STARS;
                  return (
                    <React.Fragment key={index}>
                      <input className="rating__input"
                        onChange={onChangeInput}
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
                onChange={onChangeInput}
                value={review}
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
                  disabled={isFormDisabled || review.length < ReviewLength.MIN}
                >Post</button>
              </div>

            </div>
          </form>
        </div>

      </section>
    );
  }
  return null;

};


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
  film: PropTypes.oneOfType([
    filmType.isRequired,
    PropTypes.oneOf([null]).isRequired,
  ]),
  isFormDisabled: PropTypes.bool.isRequired,
  id: PropTypes.oneOfType([
    () => null,
    PropTypes.number.isRequired,
  ]),
  onSubmitForm: PropTypes.func.isRequired,
  onChangeInput: PropTypes.func.isRequired,
  review: PropTypes.string.isRequired,
};

const mapStateToProps = (state, props) => ({
  userInfo: getUserInfo(state),
  isFormDisabled: getReviewFormStatus(state),
  film: getFilmById(state, props.id),
});


export {AddReview};

export default connect(mapStateToProps)(AddReview);
