import React from 'react';
import { storiesOf } from '@storybook/react';
import CheckoutForm from '.';
import { StripeProvider, Elements } from 'react-stripe-elements';
import propertyToUpgrade from './propertyToUpgrade.json';
import propertyToBuy from './propertyToBuy.json';

import * as keys from '../../../config';

storiesOf('Composites|CheckoutForm', module).add('default', () => {
  const verified = true;
  const onCompleted = () => console.log('complete');
  const newSpot = false;

  return (
    <StripeProvider apiKey={keys.stripe_key}>
      <Elements>
        <CheckoutForm
          verified={verified}
          property={propertyToUpgrade}
          propertyToBuy={propertyToBuy}
          amount={parseInt(priceToUpgrade, 10)}
          onCompleted={onCompleted}
          newSpot={newSpot}
        />
      </Elements>
    </StripeProvider>
  );
});
