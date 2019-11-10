import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Form from 'react-validation/build/form';
import FormButton from '../FormButton';
import Input from '../Input';
import LoadingBlock from '../LoadingBlock';
import Alert from '../Alert';
import { Text } from '../Typography';
//import { UserAPI } from '../../api';
import * as valid from '../../formValidator';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: auto;

  & a {
    color: ${props => props.theme.AFITO_UI.primaryColor};
  }
`;
const FormWrapper = styled(Form)`
  display: flex;
  text-align: left;
  flex-direction: column;
  min-width: 400px;
  width: 400px;

  @media (max-width: 500px) {
    min-width: 100%;
    width: 100%;
  }
`;

export default function SignInForm({ onSignIn, style }) {
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: ''
  });
  const [alert, setAlert] = useState();
  const [loading, setLoading] = useState(false);

  function updateUserInfo(e) {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  }

  function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    onSignIn({ ...userInfo }, function(res) {
      if (res.status === 200) {
        setAlert({ type: 'success', message: res.data.message });
      } else {
        setAlert({ type: 'danger', message: res.data.message });
      }
      setLoading(false);
    });
  }

  return (
    <Wrapper style={style}>
      <FormWrapper onSubmit={onSubmit}>
        {alert && <Alert type={alert.type}>{alert.message}</Alert>}
        <Input
          placeholder="example@domain.com"
          id="email"
          type="email"
          name="email"
          validations={[valid.required, valid.email]}
          onChange={e => updateUserInfo(e)}
        />
        <Input
          placeholder="Password"
          name="password"
          id="password"
          type="password"
          onChange={e => updateUserInfo(e)}
          validations={[valid.required]}
        />
        <Text>
          <a href="/account-recovery">Forgot your password?</a>
        </Text>
        <FormButton level="secondary" disabled={loading}>
          {loading ? <LoadingBlock quiet small color="white" /> : 'Go'}
        </FormButton>
        <Text>
          Dont have an account?&nbsp;<a href="/join">Register here.</a>
        </Text>
      </FormWrapper>
    </Wrapper>
  );
}

SignInForm.propTypes = {
  onSignIn: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  style: PropTypes.object
};
