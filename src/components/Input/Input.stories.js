import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Form from 'react-validation/build/form';
import Input from '.';
import Button from '../Button';
import { Heading } from '../Typography';
import { Container, Row, Column } from '../Grid';
import * as valid from '../../formValidator';

storiesOf('Input', module)
  .add('text', () => {
    return (
      <Container>
        <Row>
          <Column xs={12}>
            <Form
              onSubmit={e => {
                e.preventDefault();
                action('submit');
              }}
            >
              <Input
                onKeyDown={action('keydown')}
                type="text"
                name="school"
                label="Enter school name"
                placeholder="Enter school name"
                hideLabel
              />
            </Form>
          </Column>
        </Row>
      </Container>
    );
  })
  .add('text with validation', () => {
    return (
      <Container>
        <Row>
          <Column xs={12}>
            <Form
              onSubmit={e => {
                e.preventDefault();
                action('submit');
              }}
            >
              <Heading level={5}>Enter a valid/invalid email</Heading>
              <Input
                onKeyDown={action('keydown')}
                type="text"
                validations={[valid.required, valid.email]}
                placeholder="Email"
                name="email"
                label="Email*"
                hideLabel
              />
              <Button level="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Column>
        </Row>
      </Container>
    );
  });
