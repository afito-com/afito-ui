import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import PremiumPropertyCard from '.';
import models from './model';

storiesOf('PremiumPropertyCard', module)
  .add('without floorplans', () => {
    return (
      <>
        <PremiumPropertyCard {...models[0]} />
        <PremiumPropertyCard {...models[0]} />
      </>
    );
  })
  .add('with broken floorplans', () => {
    return <PremiumPropertyCard {...models[1]} />;
  });
