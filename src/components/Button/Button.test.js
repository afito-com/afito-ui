import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '.';
import Form from 'react-validation/build/form';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button level="primary" />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button level="secondary" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button level="outline" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
