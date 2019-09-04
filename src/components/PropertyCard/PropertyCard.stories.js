import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import PropertyCard from '.';
import models from './model';

storiesOf('PropertyCard', module)
  .add('without floorplans', () => {
    return (
      <>
        <PropertyCard onClick={action('click')} property={models[0]} />
        <PropertyCard onClick={action('click')} property={models[1]} />
        <PropertyCard onClick={action('click')} property={models[2]} />
        <PropertyCard onClick={action('click')} property={models[0]} />
      </>
    );
  })
  .add('with broken floorplans', () => {
    return <PropertyCard onClick={action('click')} property={models[1]} />;
  });
