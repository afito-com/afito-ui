import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import PropertyCard from '.';
import { Container, Row, Column } from '../Grid';
import models from './model';

storiesOf('PropertyCard', module)
  .add('without floorplans', () => {
    return (
      <Row>
        <Column size="6" style={{ alignSelf: 'stretch' }}>
          <PropertyCard onClick={action('click')} property={models[0]} />
        </Column>
        <Column size="6" style={{ alignSelf: 'stretch' }}>
          <PropertyCard onClick={action('click')} property={models[1]} />
        </Column>
        <Column size="6" style={{ alignSelf: 'stretch' }}>
          <PropertyCard onClick={action('click')} property={models[2]} />
        </Column>
        <Column size="6" style={{ alignSelf: 'stretch' }}>
          <PropertyCard onClick={action('click')} property={models[0]} />
        </Column>
      </Row>
    );
  })
  .add('with broken floorplans', () => {
    return <PropertyCard onClick={action('click')} property={models[1]} />;
  });
