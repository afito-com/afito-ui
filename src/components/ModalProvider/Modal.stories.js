import React, { useContext } from 'react';
import { storiesOf } from '@storybook/react';
import { Modal, ModalContext, ModalProvider } from '.';

function ModalExample() {
  const { showModal, setModalContent, modalContent } = useContext(ModalContext);

  function openModal() {
    setModalContent(<span>Test</span>);
    showModal();
  }

  return (
    <>
      <button onClick={() => openModal()}>open</button>
      {modalContent && <Modal>{modalContent}</Modal>}
    </>
  );
}

storiesOf('Modal', module).add('default', () => {
  return (
    <ModalProvider>
      <ModalExample />
    </ModalProvider>
  );
});
