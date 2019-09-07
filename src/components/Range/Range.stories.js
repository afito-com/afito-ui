import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Range from '.';

storiesOf('Range', module).add('default', () => {
  const prices = [
    695,
    700,
    825,
    825,
    845,
    925,
    1500,
    1795,
    1850,
    1925,
    1950,
    2000,
    2350,
    2395,
    2400,
    2400,
    2495,
    2495,
    2595,
    2695,
    2695,
    2750,
    2850,
    2850,
    2850,
    2895,
    3395,
    3400,
    3450,
    3500,
    3595,
    3650,
    3750,
    3750,
    3895,
    4000,
    4095,
    4295,
    4295,
    4300,
    4800,
    4850,
    4995,
    5100,
    5600,
    5850,
    6850,
    7250
  ];

  return <Range name="price" items={prices} onRangeChange={action('change')} />;
});
