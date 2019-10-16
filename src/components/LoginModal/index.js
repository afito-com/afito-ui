import React from 'react';
import PropTypes from 'prop-types';
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

function LoginModal({ activeIndex, onLogIn, onJoin }) {
  return (
    <Wrapper>
      <Logo
        src="https://afito-production-bucket.s3.us-east-2.amazonaws.com/static/images/logo_lightbg.png"
        alt="Afito Logo"
      />
      <TabGroup defaultIndex={activeIndex}>
        <Tab title={<Heading level={5}>Login</Heading>}>
          <SignInForm style={{ paddingTop: '42px' }} onSignIn={() => onLogIn()} />
        </Tab>
        <Tab title={<Heading level={5}>Join</Heading>}>
          <SignUpWizard style={{ paddingTop: '42px' }} onSignUp={() => onJoin()} />
        </Tab>
      </TabGroup>
    </Wrapper>
  );
}

LoginModal.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  onLogIn: PropTypes.func.isRequired,
  onJoin: PropTypes.func.isRequired
};

export default LoginModal;
