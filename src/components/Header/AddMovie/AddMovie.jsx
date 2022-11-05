import React from 'react';
import styled, { css } from "styled-components";
import PropTypes from 'prop-types'

const StyledButton = styled.button`
background: rgba(96, 96, 96, 0.68);
border-radius: 4px;
position: absolute;
height: 24px;
right: 10.17%;
top: calc(25% - 24px/2);
float: right;
font-family: 'Montserrat';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 24px;
text-align: right;
text-transform: uppercase;

color: #F65261;


`;

function AddMovie(props) {
    return(
        <>
            <StyledButton>{props.name}</StyledButton>
        </>
    )
}

AddMovie.propTypes = {
    name: PropTypes.string
  };

  
  AddMovie.defaultProps = {
    name: '+ Add Movie'
}

export default AddMovie