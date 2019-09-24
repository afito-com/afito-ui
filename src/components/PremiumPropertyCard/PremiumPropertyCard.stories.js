import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import PremiumPropertyCard from '.';
import { Container, Row, Column } from '../Grid';
import models from './model';

storiesOf('PremiumPropertyCard', module)
  .add('without floorplans', () => {
    return (
      <Container>
        <Row style={{ overflowX: 'scroll' }}>
          <Column xs={12}>
            <PremiumPropertyCard {...models[0]} />
          </Column>
          <Column xs={12}>
            <PremiumPropertyCard {...models[0]} />
          </Column>
        </Row>
      </Container>
    );
  })
  .add('with broken floorplans', () => {
    return <PremiumPropertyCard {...models[1]} />;
  });
