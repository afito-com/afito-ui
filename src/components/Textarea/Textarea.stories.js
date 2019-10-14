import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Form from 'react-validation/build/form';
import Textarea from '.';

storiesOf('Primitives|Textarea', module)
  .add('default', () => {
    return (
      <Form>
        <Textarea onKeyDown={action('keydown')} name="School" placeholder="Enter school name" />
      </Form>
    );
  })
  .add('with label', () => {
    return (
      <Form>
        <Textarea onKeyDown={action('keydown')} name="School" label="School" placeholder="Enter school name" />
      </Form>
    );
  })
  .add('without label', () => {
    return (
      <Form>
        <Textarea
          onKeyDown={action('keydown')}
          name="School"
          label="School"
          hideLabel
          placeholder="Enter school name"
        />
      </Form>
    );
  });
