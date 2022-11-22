import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import InfoSection from './InfoSection';
import DropDownMovieButton from './Buttons/DropDownMovieButton';
import DeleteMovie from './ModalWindows/DeleteMovie/DeleteMovie';
import EditMovie from './ModalWindows/EditMovie/EditMovie';

const MovieCardStyled = styled.div`
    width: min-content;
    height: min-content;
    margin: 15px 15px 15px 15px;    
    overflow: hidden;
    position: relative
`;

function MovieCard(props) {
  const {
    imgUrl, name, productionYear, genres, id, editHandler, removeHandler,
  } = props;

  const [openDelete, setOpenDelete] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);

  const editMovieHandler = () => {
    setOpenEdit(!openEdit);
  };

  const resetDeleteMovieWindowState = () => {
    setOpenDelete(!openDelete);
  };

  const resetEditMovieWindowState = () => {
    setOpenEdit(!openDelete);
  };

  const deleteMovieWindowHandler = () => {
    resetDeleteMovieWindowState();
    console.log(openDelete);
  };

  const confirmationForDelete = () => {
    removeHandler(id);
  };

  const confirmationForEdit = () => {
    editHandler(id);
  };

  return (
    <MovieCardStyled>
      <img src={imgUrl} alt={name} />
      <DropDownMovieButton
        menuText="..."
        editWindowShowHandler={editMovieHandler}
        removeWindowShowHandler={deleteMovieWindowHandler}
      />
      <InfoSection genres={genres} productionYear={productionYear} name={name} />
      {openDelete
        ? (
          <DeleteMovie
            resetParentState={resetDeleteMovieWindowState}
            confirmOperation={confirmationForDelete}
          />
        )
        : null}
      {openEdit
        ? (
          <EditMovie
            resetParentState={resetEditMovieWindowState}
            confirmOperation={confirmationForEdit}
          />
        )
        : null}
    </MovieCardStyled>
  );
}

MovieCard.propTypes = {
  imgUrl: PropTypes.string,
  name: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
  productionYear: PropTypes.number,
  id: PropTypes.string,
  editHandler: PropTypes.func,
  removeHandler: PropTypes.func,
};

MovieCard.defaultProps = {
  imgUrl: 'https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_QL75_UX190_CR0,7,190,281_.jpg',
  name: 'Star Wars: Empire Strikes Back',
  genres: ['action', 'sci-fi'],
  productionYear: 1980,
  id: 'dummyId',
  editHandler: () => {
  },
  removeHandler: () => {
  },
};

export default MovieCard;
