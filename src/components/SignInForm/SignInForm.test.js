import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import SignInForm from '.';
import ThemeProvider from '../ThemeProvider';

describe('<SignInForm />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ThemeProvider>
        <SignInForm
          onSignIn={({ email, password }, callback) => {
            console.log({ email, password });
            // Send email & password to API
            callback({ status: 400, data: { message: 'Invalid username/password' } });
          }}
        />
      </ThemeProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('submits the form when the submit button is clicked', () => {
    const mockCallback = jest.fn(({ email, password }, callback) => {
      console.log({ email, password });
      // Send email & password to API
      callback({ status: 200, data: { message: 'Logged in' } });
    });
  });
});
