import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from '../ThemeProvider';
import AddPropertyWizard from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <ThemeProvider>
      <AddPropertyWizard />
    </ThemeProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
