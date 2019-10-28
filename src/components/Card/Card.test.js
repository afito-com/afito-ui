import React from 'react';
import ReactDOM from 'react-dom';
import Card from '.';
import ThemeProvider from '../ThemeProvider';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ThemeProvider>
      <Card type="fixed" image="https://via.placeholder.com/350x150">
        Fixed card
      </Card>
    </ThemeProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ThemeProvider>
      <Card type="nohover" image="https://via.placeholder.com/350x150">
        Fixed card
      </Card>
    </ThemeProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
