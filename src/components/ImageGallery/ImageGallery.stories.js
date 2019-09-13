import React from 'react';
import { storiesOf } from '@storybook/react';
import ImageGallery from '.';

storiesOf('ImageGallery', module).add('default', () => {
  const images = [
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
    'https://via.placeholder.com/1200x541',
    'https://via.placeholder.com/1200x500',
    'https://via.placeholder.com/300x541',
    'https://via.placeholder.com/1200x600',
    'https://via.placeholder.com/1200x100'
  ];

  return <ImageGallery loop width={728} images={images} />;
});
