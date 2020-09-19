import React from 'react';
import { storiesOf } from '@storybook/react';
import ImageUpload from '.';
import mockProperty from './mockProperty.json';

storiesOf('Composites|ImageUpload', module)
  .add('default', () => {
    return (
      <ImageUpload
        onSubmit={imagesToUpload => {
          console.log({ imagesToUpload });
        }}
        loading={false}
      />
    );
  })
  .add('with existing images', () => {
    return (
      <ImageUpload
        onSubmit={imagesToUpload => {
          console.log({ imagesToUpload });
        }}
        property={mockProperty}
        loading={false}
      />
    );
  });
