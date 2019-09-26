import React from 'react';
import ReactDOM from 'react-dom';
import PropertyCard from '.';
import ThemeProvider from '../ThemeProvider';
import Range from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const prices = [4500, 2700, 2700, 2900];

  ReactDOM.render(
    <ThemeProvider>
      <Range name="price" items={prices} onRangeChange={() => console.log('change')} />
    </ThemeProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  const prices = [];

  ReactDOM.render(
    <ThemeProvider>
      <Range name="price" items={prices} onRangeChange={() => console.log('change')} />
    </ThemeProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
