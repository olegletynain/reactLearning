import React from 'react';
import styled, { css } from "styled-components";
import Genres from './GenresTabs/Genres';
import MovieCard from './MovieList/Movie/MovieCard';

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
            <MovieCard></MovieCard>                                     
            
        </MainAreaStyled>            
        </>
    )
}

export default MainArea