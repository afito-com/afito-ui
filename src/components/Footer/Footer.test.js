import React from 'react';
import ReactDOM from 'react-dom';
import Footer from '.';
import ThemeProvider from '../ThemeProvider';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ThemeProvider>
      <Footer />
    </ThemeProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
