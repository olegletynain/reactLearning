import React from 'react';
import styled from 'styled-components';
import AddMovie from './AddMovie/AddMovie';
import HeaderIcon from './HeaderIcon/HeaderIcon';
import img from './img/backgroud.png';
import SearchBar from './SearchBar/SearchBar';

const StyledHeader = styled.section`
    display: flex;
    background-image:url(${img});
    background-size: 'cover';
    background-repeat: 'no-repeat';
    width: 1200px;
    height: 396px;
`;

function Header() {
  return (
    <StyledHeader>
      <HeaderIcon name="netflixroullet" />
      <AddMovie />
      <SearchBar />
    </StyledHeader>
  );
}

export default Header;
