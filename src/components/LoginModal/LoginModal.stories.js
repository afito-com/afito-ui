import React, { useContext } from 'react';
import { storiesOf } from '@storybook/react';
import LoginModal from '.';
import { Modal, ModalProvider, ModalContext } from '../ModalProvider';

function LoginModalExample() {
  const { showModal, setModalContent, modalContent } = useContext(ModalContext);

  function showLoginModal(idx) {
    setModalContent(<LoginModal activeIndex={idx} />);
    showModal();
  }

  return (
    <>
      <button onClick={() => showLoginModal(0)}>open login</button>
      <button onClick={() => showLoginModal(1)}>open join</button>
      {modalContent && <Modal>{modalContent}</Modal>}
    </>
  );
}

storiesOf('LoginModal', module).add('default', () => {
  return (
    <ModalProvider>
      <LoginModalExample />
    </ModalProvider>
  );
});
