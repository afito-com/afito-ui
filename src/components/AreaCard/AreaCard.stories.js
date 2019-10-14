import React from 'react';
import { storiesOf } from '@storybook/react';
import AreaCard from '.';
import { Container, Row, Column } from '../Grid';
import models from './model';

storiesOf('Composites|AreaCard', module).add('default', () => {
  return (
    <Container>
      <Row style={{ overflowX: 'scroll' }}>
        <Column xs={12} sm={6} md={4}>
          <AreaCard {...models[0]} />
        </Column>
        <Column xs={12} sm={6} md={4}>
          <AreaCard {...models[1]} />
        </Column>
        <Column xs={12} sm={6} md={4}>
          <AreaCard {...models[2]} />
        </Column>
        <Column xs={12} sm={6} md={4}>
          <AreaCard {...models[0]} />
        </Column>
      </Row>
    </Container>
  );
});
