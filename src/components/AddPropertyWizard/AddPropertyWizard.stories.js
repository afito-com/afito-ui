import React from 'react';
import { storiesOf } from '@storybook/react';
import AddPropertyWizard from '.';
import { createProperty } from '../../api';
import * as keys from '../../../config';
import docs from './README.md';

storiesOf('Composites|AddPropertyWizard', module)
  .addParameters({
    readme: {
      sidebar: docs
    }
  })
  .add('default', () => {
    return (
      <AddPropertyWizard
        user_id={1}
        createProperty={createProperty}
        onCompleted={() => console.log('completed')}
        onPropertyCreated={createdProperty => console.log({ createdProperty })}
      />
    );
  })
  .add('with paywall', () => {
    return (
      <AddPropertyWizard
        user_id={1}
        paywall={true}
        stripeKey={keys.stripe_key}
        onPaywallComplete={stripeToken => {
          console.log({ stripeToken });
          return Promise.resolve('good');
        }}
        createProperty={createProperty}
        onCompleted={() => console.log('completed')}
        onPropertyCreated={createdProperty => console.log({ createdProperty })}
      />
    );
  });
