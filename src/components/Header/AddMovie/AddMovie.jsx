import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
    background: rgba(96, 96, 96, 0.68);
    border-radius: 4px;
    position: absolute;
    height: 28px;
    right: 10.17%;
    top: 20px;
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
  const { name } = props;
  return (
    <StyledButton>{name}</StyledButton>
  );
}

AddMovie.propTypes = {
  name: PropTypes.string,
};

AddMovie.defaultProps = {
  name: '+ Add Movie',
};

export default AddMovie;
