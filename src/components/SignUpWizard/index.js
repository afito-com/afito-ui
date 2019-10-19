import React, { useState, useReducer } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AccountType from './AccountType';
import UserInfo from './UserInfo';
import Alert from '../Alert';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function SignUpWizard({ onSignUp, style }) {
  const [account_type, setAccountType] = useState('');
  const [userInfo, setUserInfo] = useState({
    password: '',
    passwordConfirm: '',
    email: '',
    first: '',
    last: ''
  });
  const [wizardState, dispatch] = useReducer(wizardReducer, 'accountType');
  const [flash, setFlash] = useState(undefined);
  const [signedUp, setSignedUp] = useState(false);

  function updateUserInfo(e) {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  }

  function wizardReducer(wizardState, action) {
    switch (action.step) {
      case 'accountType': {
        setAccountType(action.data);
        return 'userInfo';
      }
      default: {
        return wizardState;
      }
    }
  }

  function onSubmit(e) {
    e.preventDefault();
    onSignUp();
  }

  function renderWizardState() {
    switch (wizardState) {
      case 'accountType':
        return <AccountType dispatch={dispatch} />;
      case 'userInfo':
        return <UserInfo onSubmit={onSubmit} signedUp={signedUp} updateUserInfo={updateUserInfo} userInfo={userInfo} />;
      case 'completed':
        return <h1>Done</h1>;
      default:
        return;
    }
  }

  return (
    <Wrapper style={style}>
      {flash && <Alert type={flash.type} message={flash.message} />}
      {renderWizardState()}
    </Wrapper>
  );
}

SignUpWizard.propTypes = {
  onSignUp: PropTypes.func.isRequired
};

export default SignUpWizard;
