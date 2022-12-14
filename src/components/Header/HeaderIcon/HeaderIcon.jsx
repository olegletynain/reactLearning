import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledIcon = styled.h1`
    position: absolute;
    width: 151px;
    height: 24px;
    left: 118px;
    top: 20px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 24px;
    color: #F65261;
`;

function HeaderIcon(props) {
  const { name } = props;
  return (
    <StyledIcon>{name}</StyledIcon>
  );
}

HeaderIcon.propTypes = {
  name: PropTypes.string,
};

HeaderIcon.defaultProps = {
  name: 'netflixroullet',
};

export default HeaderIcon;
