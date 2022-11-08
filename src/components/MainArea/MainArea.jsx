import React from 'react';
import styled from 'styled-components';
import Genres from './GenresTabs/Genres';
import MovieList from './MovieList/MovieList';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

const MainAreaStyled = styled.section`
background: black;
width: 100%;
height: 100%;
`;

const GenresAreaStyled = styled.section`
    display: flex;
`;

function MainArea() {
  return (
    <MainAreaStyled>
      <GenresAreaStyled>
        <ErrorBoundary>
          <Genres />
        </ErrorBoundary>
      </GenresAreaStyled>
      <ErrorBoundary>
        <MovieList />
      </ErrorBoundary>
    </MainAreaStyled>
  );
}

export default MainArea;
