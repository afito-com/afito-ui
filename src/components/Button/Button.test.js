import React from 'react';
import ReactDOM from 'react-dom';
import { Button, FormButton } from '.';
import Form from 'react-validation/build/form';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Form>
      <FormButton />
    </Form>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
