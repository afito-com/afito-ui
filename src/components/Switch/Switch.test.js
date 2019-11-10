import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from '../ThemeProvider';
import Switch from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <ThemeProvider>
      <Switch
        name="toggle_example"
        checked={true}
        onClick={e => e.stopPropagation()}
        onChange={() => console.log('on change')}
      />
    </ThemeProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
