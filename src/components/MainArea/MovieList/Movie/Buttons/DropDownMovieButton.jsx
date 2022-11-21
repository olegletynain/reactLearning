import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MovieMenuStyled = styled.div`
`;

const MenuContainer = styled.div`
  position: absolute;  
  background-color: #232323;
  width: 50%;
  top: 5%;
  right: 5%;
  height: min-content;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;  
`;

const MenuButtonStyled = styled.button`
  position: absolute;
  top: 5%;
  right: 5%;
  background-color: #555;
  color: white;
  font-size: 16px;
  border: none;
  cursor: pointer;
  border-radius: 50%;
  text-align: center;
  display:block;
  height: 25px;
  width: 25px;  
  z-index: 999;
`;

const ItemButtonStyled = styled.button`
  display:inline-block;
  background-color: #232323;
  color: white;

  :hover {
    background-color: #F65261;
    color: white;
  }
`;

function DropDownMovieButton(props) {
  const {
    menuText,
    id,
    editHandler,
    removeHandler,
  } = props;

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleEdit = () => {
    handleOpen();
    editHandler(id);
  };

  const handleRemove = () => {
    handleOpen();
    removeHandler(id);
  };

  return (
    <MovieMenuStyled>
      {!open ? <MenuButtonStyled onClick={handleOpen}>{menuText}</MenuButtonStyled> : null}
      {open ? (
        <MenuContainer>
          <ItemButtonStyled onClick={handleEdit}>Edit movie</ItemButtonStyled>
          <ItemButtonStyled onClick={handleRemove}>Remove</ItemButtonStyled>
        </MenuContainer>
      ) : null}
    </MovieMenuStyled>
  );
}

DropDownMovieButton.propTypes = {
  menuText: PropTypes.string,
  id: PropTypes.string,
  editHandler: PropTypes.func,
  removeHandler: PropTypes.func,
};

DropDownMovieButton.defaultProps = {
  menuText: '...',
  id: 'dummyId',
  editHandler: () => {
    console.log('called editHandler for a defaultProps');
  },
  removeHandler: () => {
    console.log('called removeHandler for a defaultProps');
  },
};

export default DropDownMovieButton;
