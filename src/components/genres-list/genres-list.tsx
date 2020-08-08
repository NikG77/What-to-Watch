import * as React from "react";

interface Props {
  activeGenre: string;
  genresList: Array<string>;
  onGenreItemClick: (genre: string) => void;
}

const GenresList: React.FunctionComponent<Props> = (props: Props) => {
  const {
    activeGenre,
    genresList,
    onGenreItemClick,
  } = props;

  return (
    <ul className="catalog__genres-list">
      {genresList && genresList.map((genre) => (
        <li key={genre}
          onClick={(evt) => {
            evt.preventDefault();
            onGenreItemClick(genre);
          }}
          className={`catalog__genres-item ${genre === activeGenre ? `catalog__genres-item--active` : ``}`}>
          <a href="#" className="catalog__genres-link">{genre}</a>
        </li>
      ))}
    </ul>
  );
};

export default GenresList;

