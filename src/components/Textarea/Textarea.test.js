import React from 'react';
import ReactDOM from 'react-dom';
import Textarea from '.';
import Form from 'react-validation/build/form';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Form>
      <Textarea />
    </Form>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
