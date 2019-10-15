import React, { useContext } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import PropertyCard from '.';
import { Container, Row, Column } from '../Grid';
import models from './model';
import { boolean } from '@storybook/addon-knobs';
import LoginModal from '../LoginModal';
import { Modal, ModalProvider, ModalContext } from '../ModalProvider';

function PropertyCardExample() {
  const { showModal, setModalContent, modalContent } = useContext(ModalContext);
  const isLoggedIn = boolean('Logged In', false);

  function showLoginModal() {
    setModalContent(<LoginModal activeIndex={1} />);
    showModal();
    return;
  }

  return (
    <>
      <Container>
        <Row>
          {models.map((property, idx) => {
            return (
              <Column key={idx} xs={12} sm={6} style={{ alignSelf: 'stretch' }}>
                <PropertyCard
                  onSaveProperty={setSaved => {
                    if (!isLoggedIn) {
                      showLoginModal();
                    } else {
                      console.log('property saved');
                      // do api call
                      setSaved(true);
                    }
                  }}
                  onRemoveSavedProperty={setSaved => {
                    console.log('property unsaved');
                    // do api call
                    setSaved(false);
                  }}
                  onClick={action('click')}
                  {...property}
                />
              </Column>
            );
          })}
        </Row>
      </Container>
      {modalContent && <Modal>{modalContent}</Modal>}
    </>
  );
}

function CondensedPropertyCardExample() {
  const { showModal, setModalContent, modalContent } = useContext(ModalContext);
  const isLoggedIn = boolean('Logged In', false);

  function showLoginModal() {
    setModalContent(<LoginModal activeIndex={1} />);
    showModal();
    return;
  }

  return (
    <>
      <Container>
        <Row>
          {models.map((property, idx) => {
            return (
              <Column key={idx} xs={6} sm={6} style={{ alignSelf: 'stretch' }}>
                <PropertyCard
                  style={{ width: '250px', height: '300px' }}
                  isCondensed
                  onSaveProperty={setSaved => {
                    if (!isLoggedIn) {
                      showLoginModal();
                    } else {
                      console.log('property saved');
                      // do api call
                      setSaved(true);
                    }
                  }}
                  onRemoveSavedProperty={setSaved => {
                    console.log('property unsaved');
                    // do api call
                    setSaved(false);
                  }}
                  onClick={action('click')}
                  {...property}
                />
              </Column>
            );
          })}
        </Row>
      </Container>
      {modalContent && <Modal>{modalContent}</Modal>}
    </>
  );
}

storiesOf('Composites|PropertyCard', module)
  .add('Equal height/width cards', () => {
    return (
      <ModalProvider>
        <PropertyCardExample />
      </ModalProvider>
    );
  })
  .add('Condensed', () => {
    return (
      <ModalProvider>
        <CondensedPropertyCardExample />
      </ModalProvider>
    );
  });
