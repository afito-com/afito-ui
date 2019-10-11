import React from 'react';
import { storiesOf } from '@storybook/react';
import Slider from '.';
import { Container, Row, Column } from '../Grid';

storiesOf('Slider', module).add('default', () => {
  return (
    <Slider itemsPerView={6}>
      <Column xs={2} style={{ border: '1px solid black', height: '200px' }}>
        1
      </Column>
      <Column xs={2} style={{ border: '1px solid black', height: '200px' }}>
        2
      </Column>
      <Column xs={2} style={{ border: '1px solid black', height: '200px' }}>
        3
      </Column>
      <Column xs={2} style={{ border: '1px solid black', height: '200px' }}>
        4
      </Column>
      <Column xs={2} style={{ border: '1px solid black', height: '200px' }}>
        5
      </Column>
      <Column xs={2} style={{ border: '1px solid black', height: '200px' }}>
        6
      </Column>
      <Column xs={2} style={{ border: '1px solid black', height: '200px' }}>
        7
      </Column>
      <Column xs={2} style={{ border: '1px solid black', height: '200px' }}>
        8
      </Column>
      <Column xs={2} style={{ border: '1px solid black', height: '200px' }}>
        9
      </Column>
      <Column xs={2} style={{ border: '1px solid black', height: '200px' }}>
        10
      </Column>
      <Column xs={2} style={{ border: '1px solid black', height: '200px' }}>
        11
      </Column>
    </Slider>
  );
});
