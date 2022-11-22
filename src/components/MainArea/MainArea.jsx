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

class MainArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {
          title: 'Star Wars: Episode IV - A New Hope',
          productionYear: 1977,
          imgUrl: 'https://m.media-amazon.com/images/M/MV5BOTA5NjhiOTAtZWM0ZC00MWNhLThiMzEtZDFkOTk2OTU1ZDJkXkEyXkFqcGdeQXVyMTA4NDI1NTQx._V1_QL75_UX190_CR0,5,190,281_.jpg',
          genres: ['action', 'sci-fi'],
          id: '1',
        },
        {
          title: 'Star Wars: Episode V - Empire Strikes Back',
          productionYear: 1980,
          imgUrl: 'https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX190_CR0,7,190,281_.jpg',
          genres: ['action', 'sci-fi'],
          id: '2',
        },
        {
          title: 'Star Wars: Episode VI - Return of the Jedi',
          productionYear: 1983,
          imgUrl: 'https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_QL75_UX190_CR0,7,190,281_.jpg',
          genres: ['action', 'sci-fi'],
          id: '3',
        },
      ],
    };
  }

  editMovie = (id) => {
    console.log('test');
    console.log(id);
  };

  removeMovie = (id) => {
    const [moviesVar] = [this.state.movies];
    const indexOfObject = moviesVar.findIndex((object) => object.id === id);
    if (indexOfObject > 0) {
      moviesVar.splice(indexOfObject, 1);
    }
    this.setState(() => ({ movies: moviesVar }));
  };

  render() {
    return (
      <MainAreaStyled>
        <GenresAreaStyled>
          <ErrorBoundary>
            <Genres />
          </ErrorBoundary>
        </GenresAreaStyled>
        <ErrorBoundary>
          <MovieList
            movieList={this.state.movies}
            editHandler={this.editMovie}
            removeHandler={this.removeMovie}
          />
        </ErrorBoundary>
      </MainAreaStyled>
    );
  }
}

export default MainArea;
