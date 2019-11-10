import React from 'react';
import { storiesOf } from '@storybook/react';
import AreaCard from '.';
import { Container, Row, Column } from '../Grid';
import res from './response.json';

storiesOf('Composites|AreaCard', module).add('default', () => {
  return (
    <Container>
      <Row style={{ overflowX: 'scroll' }}>
        {res.areas.map(area => {
          return (
            <Column key={area.area_id} xs={12} sm={6} md={4}>
              <AreaCard {...area} />
            </Column>
          );
        })}
      </Row>
    </Container>
  );
});
