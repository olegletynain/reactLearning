import React from 'react';
import styled, { css } from "styled-components";

const StyledMessage = styled.h1`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 800;
    font-size: 14px;
    line-height: 17px;
    background: black;
    color: white;
`;

function ErrorBoundary(props) {
    const ErrorMessage = () => (
        <StyledMessage>Error in loading</StyledMessage>
    );

    let isLoaded = true;

    return(
        <>
        {
            isLoaded ? props.children : <ErrorMessage/>
        }
        </>
    )
}


export default ErrorBoundary