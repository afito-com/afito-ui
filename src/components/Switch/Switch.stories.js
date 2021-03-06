import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import Switch from '.';

storiesOf('Primitives|Switch', module).add('default', () => {
  return (
    <>
      <Switch
        name="toggle_example"
        checked={boolean('Switch 1', true)}
        onClick={e => e.stopPropagation()}
        onChange={action('change')}
      />
      <Switch
        name="toggle_example"
        checked={boolean('Switch 2', false)}
        onClick={e => e.stopPropagation()}
        onChange={action('change')}
      />
    </>
  );
});
