import React from 'react';
import axios from 'axios';
import { storiesOf } from '@storybook/react';
import Paywall from '.';
import mockProperties from './mockProperties';
import * as keys from '../../../config';
import Cookies from 'js-cookie';

function registerPayingUser(source) {
  const token = Cookies.getJSON('token');
  const headers = { Authorization: `JWT ${token}` };

  return axios.post(`${keys.base_url}payments/register`, { stripeToken: source }, { headers });
}

storiesOf('Composites|Paywall', module)
  .add('returning customer', () => {
    return (
      <Paywall
        isReturningCustomer={true}
        user_id={1}
        property={mockProperties[0]}
        onCompleted={() => console.log('completed')}
        stripeKey={keys.stripe_key}
      />
    );
  })
  .add('new customer', () => {
    return (
      <Paywall
        isReturningCustomer={false}
        user_id={1}
        property={mockProperties[1]}
        onCompleted={async (stripeError, source) => {
          if (stripeError) console.error({ stripeError });
          try {
            let res = await registerPayingUser(source);
            // if token successfully saved, set to active
            if (res.status === 200) {
              console.log('good');
            }
          } catch (err) {
            console.error('Error registering paid user: ', { err });
          }
        }}
        stripeKey={keys.stripe_key}
      />
    );
  });
