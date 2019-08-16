import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Switch from '.';

storiesOf('Switch', module).add('default', () => {
  const [checked, setChecked] = useState(false);
  return (
    <Switch
      name="toggle_example"
      checked={checked}
      onClick={e => e.stopPropagation()}
      onChange={() => {
        setChecked(!checked);
        action('change');
      }}
    />
  );
});
