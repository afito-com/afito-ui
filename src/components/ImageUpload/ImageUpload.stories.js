import React from 'react';
import { storiesOf } from '@storybook/react';
import ImageUpload from '.';

storiesOf('Composites|ImageUpload', module).add('default', () => {
  return (
    <ImageUpload
      onSubmit={imagesToUpload => {
        console.log({ imagesToUpload });
      }}
      loading={false}
    />
  );
});
