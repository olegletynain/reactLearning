import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import MovieCard from './Movie/MovieCard';

const MovieListStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px,1fr));
    gap: 10px;
`;

function MovieList(props) {
  const {
    movieList, editHandler, removeHandler,
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
  movieList: PropTypes.array, // eslint-disable-line
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
