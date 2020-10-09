import React from 'react';
import ReactDOM from 'react-dom';
import ThemeProvider from '../ThemeProvider';
import Paywall from '.';
import mockProperties from './mockProperties';
import * as keys from '../../../config';

describe('<Paywall />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ThemeProvider>
        <Paywall
          stripeKey={keys.stripe_key}
          isReturningCustomer={true}
          property={mockProperties[0]}
          onCompleted={jest.fn}
        />
      </ThemeProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <ThemeProvider>
        <Paywall
          stripeKey={keys.stripe_key}
          isReturningCustomer={false}
          property={mockProperties[1]}
          onCompleted={jest.fn}
        />
      </ThemeProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
