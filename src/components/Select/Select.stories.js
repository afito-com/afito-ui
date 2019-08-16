import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Form from 'react-validation/build/form';
import Select from '.';
import Button from '../Button';
import { Heading } from '../Typography';
import * as valid from '../../formValidator';

storiesOf('Select', module)
  .add('default', () => {
    return (
      <Form>
        <Select name="baths" label="Baths" onChange={action('change')}>
          <option value="" disabled>
            Baths
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Select>
      </Form>
    );
  })
  .add('required', () => {
    return (
      <Form>
        <Select validations={[valid.required]} name="baths" label="Baths*" onChange={action('change')}>
          <option value="" disabled>
            Baths
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Select>
        <Button level="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  })
  .add('no label', () => {
    return (
      <Form>
        <Select nolabel name="beds" label="Beds" onChange={action('change')}>
          <option value="" disabled>
            Beds
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Select>
      </Form>
    );
  })
  .add('with validation', () => {
    return (
      <Form
        onSubmit={e => {
          e.preventDefault();
          action('submit');
        }}
      >
        <Heading level={5}>Submit the form without a selection</Heading>
        <Select onChange={action('change')} validations={[valid.required]} name="beds" label="Beds*">
          <option value="" disabled>
            Beds
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </Select>
        <Button level="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  });
