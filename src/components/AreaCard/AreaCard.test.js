import React from 'react';
import ReactDOM from 'react-dom';
import AreaCard from '.';
import models from './model';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AreaCard {...models[0]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AreaCard {...models[1]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AreaCard {...models[2]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
