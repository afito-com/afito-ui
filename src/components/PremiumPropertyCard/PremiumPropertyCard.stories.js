import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import PremiumPropertyCard from '.';
import { Container, Row, Column } from '../Grid';
import { boolean } from '@storybook/addon-knobs';
import models from './model';
import { Modal, ModalProvider, ModalContext } from '../ModalProvider';

storiesOf('Composites|PremiumPropertyCard', module)
  .add('without floorplans', () => {
    const isLoggedIn = boolean('Logged In', false);

    return (
      <Container>
        <Row style={{ overflowX: 'scroll' }}>
          <Column xs={12}>
            <PremiumPropertyCard
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
              savedProperties={[]}
              {...models[0]}
            />
          </Column>
          <Column xs={12}>
            <PremiumPropertyCard
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
              savedProperties={[]}
              {...models[0]}
            />
          </Column>
        </Row>
      </Container>
    );
  })
  .add('with broken floorplans', () => {
    return (
      <PremiumPropertyCard
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
        savedProperties={[]}
        {...models[1]}
      />
    );
  });
