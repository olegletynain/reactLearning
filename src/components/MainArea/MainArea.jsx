import React from 'react';
import styled, { css } from "styled-components";
import Genres from './GenresTabs/Genres';
import MovieList from './MovieList/MovieList';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

const MainAreaStyled = styled.section`
background: black;
width: 100%;
height: 100%;
`;

const GenresAreaStyled = styled.section`
    display: flex;
`;

function MainArea(props) {
    return(
        <>
        <MainAreaStyled>
            <GenresAreaStyled>
                <Genres>
                </Genres>
            </GenresAreaStyled>  
            <ErrorBoundary>
                <MovieList></MovieList>                                     
            </ErrorBoundary> 
        </MainAreaStyled>            
        </>
    )
}

export default MainArea