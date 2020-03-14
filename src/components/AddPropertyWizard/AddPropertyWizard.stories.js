import React from 'react';
import { storiesOf } from '@storybook/react';
import AddPropertyWizard from '.';
import { createProperty } from '../../api';
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
        createProperty={createProperty}
        onCompleted={() => console.log('completed')}
        onPropertyCreated={createdProperty => console.log({ createdProperty })}
      />
    );
  });
