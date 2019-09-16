import React from 'react';
import { storiesOf } from '@storybook/react';
import TabGroup from '.';
import Tab from '../Tab';

storiesOf('TabGroup', module).add('default', () => {
  const activeModalIndex = 1;

  return (
    <TabGroup defaultIndex={activeModalIndex}>
      <Tab title="Login">
        <div>Login Form</div>
      </Tab>
      <Tab title="Join">
        <div>Sign Up Form</div>
      </Tab>
    </TabGroup>
  );
});
