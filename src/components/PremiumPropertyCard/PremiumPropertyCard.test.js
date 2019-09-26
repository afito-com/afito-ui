import React from 'react';
import ReactDOM from 'react-dom';
import PropertyCard from '.';
import ThemeProvider from '../ThemeProvider';
import models from './model';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ThemeProvider>
      <PropertyCard {...models[0]} />
    </ThemeProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ThemeProvider>
      <PropertyCard {...models[1]} />
    </ThemeProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
