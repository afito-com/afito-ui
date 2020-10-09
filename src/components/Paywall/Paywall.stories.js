import React from 'react';
import { storiesOf } from '@storybook/react';
import Paywall from '.';
import mockProperties from './mockProperties';
import * as keys from '../../../config';

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
        onCompleted={() => console.log('completed')}
        stripeKey={keys.stripe_key}
      />
    );
  });
