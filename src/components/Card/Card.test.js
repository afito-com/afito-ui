import React from 'react';
import ReactDOM from 'react-dom';
import Card from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card image="https://via.placeholder.com/350x150" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
