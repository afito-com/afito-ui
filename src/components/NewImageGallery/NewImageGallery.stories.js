import React from 'react';
import { storiesOf } from '@storybook/react';
import NewImageGallery from '.';

storiesOf('Composites|NewImageGallery', module).add('default', () => {
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

  return <NewImageGallery images={images} onImageClick={idx => console.log(idx)} />;
});
