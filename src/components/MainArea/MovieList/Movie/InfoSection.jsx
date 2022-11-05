import React from 'react';
import styled, { css } from "styled-components";
import PropTypes from 'prop-types'

const InfoSectionStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: white;
    width: 100%;
    height: 100%
    overflow: auto;
`;

const YearBox = styled.div`
    border: 1px white;
    border-style: solid;
    color: white;
    margin-left: auto;
    height: min-content;
    font-family: 'Montserrat';
    font-style: normal;
    box-sizing: border-box;
    opacity: 0.5;
    border: 1px solid #979797;
    border-radius: 4px;    
`;

const Break = styled.div`
    flex-basis: 100%;
    height: 0;
`;

const Header = styled.div`
    overflow-wrap: break-all;
    min-width: 40%;
    max-width: 60%;
`;

const GenresBox = styled.div`
    opacity: 0.5;
`;



//flex-basis: 100%

function InfoSection(props) {
    const genresElements= props.genres.map((item,i) => item + " ")
    return(
        <>
            <InfoSectionStyled>
                <Header>{props.name}</Header>
                <YearBox>{props.productionYear}</YearBox>
                <Break></Break>
                <GenresBox>{genresElements}</GenresBox>
            </InfoSectionStyled>
            
        </>
    )
}

InfoSection.propTypes = {
    genres: PropTypes.arrayOf(PropTypes.string),
    productionYear: PropTypes.number,
    name: PropTypes.string
  };

  
//   InfoSection.defaultProps = {
//     genres: ['action', 'sci-fi'],
//     productionYear: 1980,
//     name: 'Star Wars: Empire Strikes Back'
// }


export default InfoSection