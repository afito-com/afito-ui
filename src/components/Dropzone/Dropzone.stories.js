import React from 'react';
import { storiesOf } from '@storybook/react';
import Dropzone from '.';
import { Text } from '../Typography';

storiesOf('Primitives|Dropzone', module).add('default', () => {
  return (
    <Dropzone onDrop={file => console.log('Image dropped: ', { file })} multiple={false}>
      <Text>Drag and drop an image or click here</Text>
    </Dropzone>
  );
});
