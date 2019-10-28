import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import RadioGroup from '.';

storiesOf('Primitives|RadioGroup', module).add('default', () => {
  const items = [
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: '3' },
    { label: '4+', value: 4 }
  ];

  return (
    <>
      <RadioGroup name="beds" items={items} defaultOption={1} onSelectionChange={action('change')} />
      <RadioGroup name="beds" items={items} defaultOption={'3'} onSelectionChange={action('change')} />
    </>
  );
});
