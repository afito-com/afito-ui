import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import AreaCard from '.';
import models from './model';

storiesOf('AreaCard', module).add('default', () => {
  return (
    <>
      <AreaCard {...models[0]} />
      <AreaCard {...models[1]} />
      <AreaCard {...models[2]} />
    </>
  );
});
