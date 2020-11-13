import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { ModalContext } from '../ModalProvider';
import LoginModal from '../LoginModal';
import Wrapper from './Wrapper';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';

Header.propTypes = {
  user: PropTypes.object,
  nextImg: PropTypes.node,
  dark: PropTypes.bool.isRequired,
  nav: PropTypes.array.isRequired,
  isFixed: PropTypes.bool,
  createUser: PropTypes.func.isRequired,
  signIn: PropTypes.func.isRequired,
  signOut: PropTypes.func.isRequired,
  saveToken: PropTypes.func.isRequired
};

export default function Header({ nextImg, dark, nav, isFixed, user, createUser, signIn, signOut, saveToken }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { showModal, setModalContent } = useContext(ModalContext);

  function handleOpenModal(activeIndex) {
    setModalContent(
      <LoginModal
        activeIndex={activeIndex}
        onSignIn={({ email, password }, callback) => {
          return signIn({ email, password })
            .then(res => {
              saveToken(res.data.token);
              callback(res);
              window.location.reload();
            })
            .catch(err => {
              console.error('Header sign in error: ', { err });
              callback(err.response);
            });
        }}
        onSignUp={({ email, password, first, last, account_type }, callback) => {
          return createUser({ email, password, first, last, account_type })
            .then(res => {
              saveToken(res.data.token);
              callback(res);
            })
            .catch(err => {
              console.error('Header sign up error: ', { err });
              callback(err);
            });
        }}
      />
    );
    showModal();
  }

  function toggleMobileNav() {
    setMobileMenuOpen(!mobileMenuOpen);
  }

  function toggleOptions() {
    setMenuOpen(!menuOpen);
  }

  return (
    <Wrapper isFixed={isFixed} dark={dark}>
      {/* {modalContent && <Modal>{modalContent}</Modal>} */}
      <DesktopHeader
        user={user}
        nextImg={nextImg}
        nav={nav}
        dark={dark}
        menuOpen={menuOpen}
        toggleOptions={toggleOptions}
        signOut={signOut}
        handleOpenModal={handleOpenModal}
      />
      <MobileHeader
        nav={nav}
        nextImg={nextImg}
        user={user}
        toggleMobileNav={toggleMobileNav}
        mobileMenuOpen={mobileMenuOpen}
        signOut={signOut}
        handleOpenModal={handleOpenModal}
      />
    </Wrapper>
  );
}
