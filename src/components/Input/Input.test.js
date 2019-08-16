import React from 'react';
import ReactDOM from 'react-dom';
import Input from '.';
import Form from 'react-validation/build/form';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Input type="text" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
