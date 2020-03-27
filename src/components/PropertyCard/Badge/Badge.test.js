import React from 'react';
import ReactDOM from 'react-dom';
import Badge from '.';
import ThemeProvider from '../../ThemeProvider';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ThemeProvider>
      <Badge>Leased</Badge>
    </ThemeProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
