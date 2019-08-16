import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Form from 'react-validation/build/form';
import Textarea from '.';

storiesOf('Textarea', module).add('default', () => {
  return (
    <Form>
      <Textarea onKeyDown={action('keydown')} placeholder="Enter school name" />
    </Form>
  );
});
