import React, { useContext } from 'react';
import { storiesOf } from '@storybook/react';
import LoginModal from '.';
import Button from '../Button';
import { Modal, ModalProvider, ModalContext } from '../ModalProvider';

function LoginModalExample() {
  const { showModal, setModalContent, modalContent } = useContext(ModalContext);

  function showLoginModal(idx) {
    setModalContent(
      <LoginModal
        activeIndex={idx}
        onSignIn={() => console.log('log user in')}
        onSignUp={() => console.log('sign user up')}
      />
    );
    showModal();
  }

  return (
    <>
      <Button level="primary" onClick={() => showLoginModal(0)}>
        open login
      </Button>
      <Button level="primary" onClick={() => showLoginModal(1)}>
        open join
      </Button>
      {modalContent && <Modal>{modalContent}</Modal>}
    </>
  );
}

storiesOf('Composites|LoginModal', module).add('default', () => {
  return (
    <ModalProvider>
      <LoginModalExample />
    </ModalProvider>
  );
});
