import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button';

UnauthenticatedNav.propTypes = {
  handleOpenModal: PropTypes.func.isRequired
};

function UnauthenticatedNav({ handleOpenModal }) {
  return (
    <>
      <a href="#login" onClick={() => handleOpenModal(0)}>
        Login
      </a>
      <a href="#join" onClick={() => handleOpenModal(1)}>
        Join
      </a>

      <Button onClick={() => handleOpenModal(1)} level="secondary">
        List a property
      </Button>
    </>
  );
}

export default UnauthenticatedNav;
