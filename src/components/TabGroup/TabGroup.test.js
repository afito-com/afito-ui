import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from '../ThemeProvider';
import Tab from '../Tab';
import TabGroup from '.';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(
    <ThemeProvider>
      <TabGroup defaultIndex={0}>
        <Tab title="Login">
          <div>Login Form</div>
        </Tab>
        <Tab title="Join">
          <div>Sign Up Form</div>
        </Tab>
      </TabGroup>
    </ThemeProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
