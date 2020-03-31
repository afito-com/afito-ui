import React from 'react';
import ReactDOM from 'react-dom';
import SignUpWizard from '.';
import ThemeProvider from '../ThemeProvider';

describe('<SignUpWizard />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(
      <ThemeProvider>
        <SignUpWizard
          onSignUp={() => {
            return new Promise((resolve, reject) => {
              reject({ response: { data: { message: 'Sorry there was an error' } } });
            });
          }}
        />
      </ThemeProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
