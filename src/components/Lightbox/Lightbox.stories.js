import React from 'react';
import { storiesOf } from '@storybook/react';
import Lightbox from '.';

storiesOf('Lightbox', module).add('default', () => {
  const images = [
    'https://via.placeholder.com/1400x960',
    'https://via.placeholder.com/1200x500',
    'https://via.placeholder.com/300x541',
    'https://via.placeholder.com/1200x600',
    'https://via.placeholder.com/1200x100',
    'https://via.placeholder.com/1200x541',
    'https://via.placeholder.com/1200x500',
    'https://via.placeholder.com/300x541',
    'https://via.placeholder.com/1200x600',
    'https://via.placeholder.com/1200x100',
    'https://via.placeholder.com/1200x541',
    'https://via.placeholder.com/1200x500',
    'https://via.placeholder.com/300x541',
    'https://via.placeholder.com/1200x600',
    'https://via.placeholder.com/1200x100',
    'https://via.placeholder.com/1200x541',
    'https://via.placeholder.com/1200x500',
    'https://via.placeholder.com/300x541',
    'https://via.placeholder.com/1200x600',
    'https://via.placeholder.com/1200x100',
    'https://via.placeholder.com/1200x541',
    'https://via.placeholder.com/1200x500',
    'https://via.placeholder.com/300x541',
    'https://via.placeholder.com/1200x600',
    'https://via.placeholder.com/1200x100',
    'https://via.placeholder.com/1200x100'
  ];

  return <Lightbox images={images} open={true} defaultImageIdx={25} />;
});
