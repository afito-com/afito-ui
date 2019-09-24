import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import PropertyCard from '.';
import { Container, Row, Column } from '../Grid';
import models from './model';

storiesOf('PropertyCard', module)
  .add('Equal height/width cards', () => {
    return (
      <Container>
        <Row>
          <Column xs={12} sm={6} style={{ alignSelf: 'stretch' }}>
            <PropertyCard onClick={action('click')} {...models[0]} />
          </Column>
          <Column xs={12} sm={6} style={{ alignSelf: 'stretch' }}>
            <PropertyCard onClick={action('click')} {...models[1]} />
          </Column>
          <Column xs={12} sm={6} style={{ alignSelf: 'stretch' }}>
            <PropertyCard onClick={action('click')} {...models[2]} />
          </Column>
          <Column xs={12} sm={6} style={{ alignSelf: 'stretch' }}>
            <PropertyCard onClick={action('click')} {...models[0]} />
          </Column>
        </Row>
      </Container>
    );
  })
  .add('with broken floorplans', () => {
    return <PropertyCard onClick={action('click')} property={models[1]} />;
  });
