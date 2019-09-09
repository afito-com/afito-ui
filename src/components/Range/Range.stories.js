import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Range from '.';

storiesOf('Range', module).add('default', () => {
  const prices = [700, 1200, 2200];

  return <Range name="price" items={prices} onRangeChange={action('change')} />;
});
