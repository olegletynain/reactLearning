import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from 'styled-react-modal';
import PropTypes from 'prop-types';

const StyledModal = Modal.styled`
  width: 20rem;
  height: min-content;
  display:inline-block;
  align-items: center;
  justify-content: center;
  background-color: #232323;
  opacity: ${(props) => props.opacity};
  transition : all 0.3s ease-in-out;`;

const ItemButtonStyled = styled.button`
  background-color: #F65261;
  color: white;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: right;
  text-transform: uppercase;
  :hover {
    background-color: #F65261;
    color: white;
  }
`;

const ItemResetButtonStyled = styled.button`
  background-color: #232323;
  color: white;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  text-align: right;
  text-transform: uppercase;
  :hover {
    background-color: #F65261;
    color: white;
  }
`;

function EditMovie(props) {
  const { resetParentState, confirmOperation } = props;
  const [isOpen, setIsOpen] = useState(true);
  const [opacity, setOpacity] = useState(0);

  const toggleModal = () => {
    setOpacity(0);
    setIsOpen(!isOpen);
    resetParentState();
  };

  const afterOpen = () => {
    setTimeout(() => {
      setOpacity(99);
    }, 100);
  };

  const beforeClose = () => new Promise((resolve) => {
    setOpacity(0);
    setTimeout(resolve, 300);
  });

  const onConfirmDelete = () => {
    toggleModal();
    confirmOperation();
  };

  return (
    <div>
      <StyledModal
        isOpen={isOpen}
        afterOpen={afterOpen}
        beforeClose={beforeClose}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
        opacity={opacity}
        backgroundProps={{ opacity }}
      >
        <h1 color="white">Edit Movie</h1>
        <span color="white">Are you sure you want to delete movie?</span>
        <ItemResetButtonStyled onClick={onConfirmDelete}>Reset</ItemResetButtonStyled>
        <ItemButtonStyled onClick={onConfirmDelete}>Submit</ItemButtonStyled>
      </StyledModal>
    </div>
  );
}

EditMovie.propTypes = {
  resetParentState: PropTypes.func,
  confirmOperation: PropTypes.func,
};

EditMovie.defaultProps = {
  resetParentState: () => {
  },
  confirmOperation: () => {
  },
};

export default EditMovie;
