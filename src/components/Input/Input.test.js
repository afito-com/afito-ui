import React from 'react';
import ReactDOM from 'react-dom';
import Form from 'react-validation/build/form';
import Input from '.';
import ThemeProvider from '../ThemeProvider';
import * as valid from '../../formValidator';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ThemeProvider>
      <Form
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        <Input
          type="text"
          validations={[valid.required, valid.email]}
          placeholder="Email"
          name="email"
          label="Email*"
          hideLabel
        />
      </Form>
    </ThemeProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
