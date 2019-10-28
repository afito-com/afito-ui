import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Range from '.';

storiesOf('Primitives|Range', module).add('default', () => {
  const prices = [4500, 2700, 2700, 2900];

  return <Range name="price" items={prices} defaultMin={3000} defaultMax={3500} onRangeChange={action('change')} />;
});
