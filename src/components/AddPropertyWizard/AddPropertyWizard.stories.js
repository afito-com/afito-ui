import React from 'react';
import { storiesOf } from '@storybook/react';
import AddPropertyWizard from '.';
import { createProperty } from '../../api';

storiesOf('Composites|AddPropertyWizard', module).add('default', () => {
  return (
    <AddPropertyWizard
      createProperty={createProperty}
      onCompleted={() => console.log('completed')}
      onPropertyCreated={createdProperty => console.log({ createdProperty })}
    />
  );
});
