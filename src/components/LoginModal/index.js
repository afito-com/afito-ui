import React from 'react';
import styled from 'styled-components';
import { Heading } from '../Typography';
import TabGroup from '../TabGroup';
import Tab from '../Tab';
import SignInForm from '../SignInForm';
import SignUpWizard from '../SignUpWizard';

const Wrapper = styled.div`
  text-align: center;
`;

const Logo = styled.img`
  margin: 10px 0 30px 0;
  height: 65px;
`;

function LoginModal({ activeIndex }) {
  return (
    <Wrapper>
      <Logo
        src="https://afito-production-bucket.s3.us-east-2.amazonaws.com/static/images/logo_lightbg.png"
        alt="Afito Logo"
      />
      <TabGroup defaultIndex={activeIndex}>
        <Tab title={<Heading level={5}>Login</Heading>}>
          <SignInForm style={{ paddingTop: '42px' }} onSignIn={() => console.log('sign user in here')} />
        </Tab>
        <Tab title={<Heading level={5}>Join</Heading>}>
          <SignUpWizard style={{ paddingTop: '42px' }} onSignUp={() => console.log('signed up via login modal')} />
        </Tab>
      </TabGroup>
    </Wrapper>
  );
}

export default LoginModal;
