import React from 'react';
import { storiesOf } from '@storybook/react';
import RoommateCard from '.';
import { Container, Row, Column } from '../Grid';
import roomates from './roommateSpec';

storiesOf('Composites|RoommateCard', module).add('Equal height/width cards', () => {
  return (
    <Container>
      <Row>
        {roomates.map((property, idx) => {
          return (
            <Column key={idx} xs={12} sm={6} style={{ alignSelf: 'stretch' }}>
              <RoommateCard roommate={roomates[idx]} />
            </Column>
          );
        })}
      </Row>
    </Container>
  );
});
