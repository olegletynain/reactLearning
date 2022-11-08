import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const FooterBox = styled.div`
    background: #424242;
    height: 30px;    
    margin-top: 1rem;
    padding: 1rem;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;    
`;

const StyledFooterLabel = styled.h1`
    position: absolute;
    width: 151px;
    height: 15px;
    left: 118px;
    top: 5px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 900;
    font-size: 20px;
    line-height: 15px;
    color: #F65261;
`;

export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;

function Footer(props) {
  const { name } = props;
  return (
    <FooterBox>
      <StyledFooterLabel>
        {name}
      </StyledFooterLabel>
    </FooterBox>
  );
}

Footer.propTypes = {
  name: PropTypes.string,
};

Footer.defaultProps = {
  name: 'netflixroullet',
};

export default Footer;
