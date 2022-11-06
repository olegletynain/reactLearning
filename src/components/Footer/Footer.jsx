import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types'

const FooterBox = styled.div`
    background: #424242;
    height: 50px;    
    margin-top: 1rem;
    padding: 1rem;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;    
`;

const StyledH1 = styled.h1`
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
   
export const Heading = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;

function Footer(props) {
    return (
      <FooterBox>
        <StyledH1>
          {props.name}
        </StyledH1>
      </FooterBox>
    );
  };


  Footer.propTypes = {
    name: PropTypes.string
  };

  
  Footer.defaultProps = {
    name: 'netflixroullet'
}

  export default Footer;