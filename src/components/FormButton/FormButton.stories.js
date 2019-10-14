import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Form from 'react-validation/build/form';
import FormButton from '.';
import Input from '../Input';
import { Container, Row, Column } from '../Grid';
import * as valid from '../../formValidator';

storiesOf('Primitives|FormButton', module).add('default', () => {
  return (
    <Container>
      <Row>
        <Column xs={12}>
          <Form
            onSubmit={e => {
              action('submit');
              e.preventDefault();
            }}
          >
            <Input
              onKeyDown={action('keydown')}
              type="text"
              name="email"
              label="Enter valid email"
              placeholder="Enter valid email"
              hideLabel
              validations={[valid.email]}
            />
            <FormButton type="submit" level="secondary">
              Submit
            </FormButton>
          </Form>
        </Column>
      </Row>
    </Container>
  );
});
