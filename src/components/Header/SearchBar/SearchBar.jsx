import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SearchInput = styled.input`
    width: 200%;
    border: 3px solid gray;
    padding: 5px;
    height: 48px;
    outline: none;
    color: gray;
    background: black;
`;

const SearchButton = styled.button`
    width: 110px;
    height: 48px;
    border: 1px solid gray;
    background: #F65261;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    text-align: right;
    text-transform: uppercase;
    margin-left: 20px;
    color: white;
    cursor: pointer;
    font-size: 20px;
`;

const SearchDiv = styled.div`
    width: 200%;
    position: relative;
    display: flex;
`;

const WrapDiv = styled.div`
    position: absolute;
    top: 50%;
    left: 30%;
`;

function SearchBar(props) {
  const { buttonSearchName, searchPlaceHolder } = props;
  return (
    <WrapDiv>
      <SearchDiv>
        <SearchInput type="search" id="mySearch" placeholder={searchPlaceHolder} />
        <SearchButton className="searchButton">{buttonSearchName}</SearchButton>
      </SearchDiv>
    </WrapDiv>
  );
}

SearchBar.propTypes = {
  buttonSearchName: PropTypes.string,
  searchPlaceHolder: PropTypes.string,
};

SearchBar.defaultProps = {
  buttonSearchName: 'Search',
  searchPlaceHolder: 'What do you want to watch?',
};

export default SearchBar;
