import React from 'react';
import SignInForm from '../SignInForm';
import SignUpWizard from '../SignUpWizard';
import TabGroup from '../TabGroup';
import Tab from '../Tab';
import { Heading } from '../Typography';

function LoginModal({ activeIndex }) {
  return (
    <TabGroup defaultIndex={activeIndex}>
      <Tab title={<Heading level={5}>Login</Heading>}>
        <SignInForm style={{ paddingTop: '42px' }} onSignIn={() => console.log('sign user in here')} />
      </Tab>
      <Tab title={<Heading level={5}>Join</Heading>}>
        <SignUpWizard style={{ paddingTop: '42px' }} onSignUp={() => console.log('signed up via login modal')} />
      </Tab>
    </TabGroup>
  );
}

export default LoginModal;
