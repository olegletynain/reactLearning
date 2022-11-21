import React from 'react';
import styled from 'styled-components';

const StyledMessage = styled.h1`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 800;
    font-size: 14px;
    line-height: 17px;
    background: black;
    color: white;
`;

function ErrorMessage() {
  return <StyledMessage>Error in loading</StyledMessage>;
}

function ErrorBoundary(props) {
  const { ...children } = props.children;
  const isLoaded = true;
  return (
    <>
      {
            isLoaded ? children : <ErrorMessage />
        }
    </>
  );
}

export default ErrorBoundary;
