import React from 'react';
import styled, { css } from "styled-components";
import AddMovie from './AddMovie/AddMovie';
import HeaderIcon from './HeaderIcon/HeaderIcon';
import img from './img/backgroud.png';

const StyledHeader = styled.section`
display: flex;
background-image:url(${img});
background-size: 'cover';
background-repeat: 'no-repeat';
color: #F65261;
`;

function Header(props) {
    return(
        <>
            <StyledHeader>
                <HeaderIcon></HeaderIcon>
                <AddMovie></AddMovie>
            </StyledHeader>
        </>
    )
}

export default Header