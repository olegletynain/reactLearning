import React from 'react';
import styled from 'styled-components';
import MovieCard from './Movie/MovieCard';
import PropTypes from 'prop-types';

const MovieListStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
    gap: 10px;
`;

const movies = [
  {
    title: 'Star Wars: Episode IV - A New Hope',
    productionYear: 1977,
    imgUrl: 'https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_QL75_UX190_CR0,5,190,281_.jpg',
    genres: ['action', 'sci-fi'],
    id: 1,
  },
  {
    title: 'Star Wars: Episode V - Empire Strikes Back',
    productionYear: 1980,
    imgUrl: 'https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX190_CR0,7,190,281_.jpg',
    genres: ['action', 'sci-fi'],
    id: 2,
  },
  {
    title: 'Star Wars: Episode VI - Return of the Jedi',
    productionYear: 1983,
    imgUrl: 'https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_QL75_UX190_CR0,7,190,281_.jpg',
    genres: ['action', 'sci-fi'],
    id: 3,
  },
];

function MovieList(props) {
  const {
    movieList, editHandler, removeHandler
  } = props;

  return (
    <MovieListStyled>
      {movieList.map((movie) => (
        <MovieCard
          name={movie.title}
          imgUrl={movie.imgUrl}
          productionYear={movie.productionYear}
          id={movie.id.toString()}
          key={movie.id}
          editHandler={editHandler}
          removeHandler={removeHandler}
        />
      ))}
    </MovieListStyled>
  );
}

MovieList.propTypes = {
  movieList: PropTypes.array,
  editHandler: PropTypes.func,
  removeHandler: PropTypes.func,
};

MovieList.defaultProps = {
  movieList: [],
  editHandler: () => {
    console.log('called editHandler for a defaultProps');
  },
  removeHandler: () => {
    console.log('called removeHandler for a defaultProps');
  },
};

export default MovieList;
