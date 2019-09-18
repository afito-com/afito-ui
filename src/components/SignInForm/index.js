import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Form from 'react-validation/build/form';
//import { Flash } from '../../components/UI/FlashProvider';
import { Row, Column } from '../Grid';
import FormButton from '../FormButton';
import Input from '../Input';
import LoadingBlock from '../LoadingBlock';
import { Text } from '../Typography';
//import { UserAPI } from '../../api';
import * as valid from '../../formValidator';
import { getParam, validateUrl } from '../../utils';

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

class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false,
      error: undefined
    };

    this.onFieldChange = this.onFieldChange.bind(this);
    this.onError = this.onError.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onFieldChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  onError(err) {
    let errorMessage;
    if (err.response) {
      errorMessage = err.response.data.message;
    }

    this.setState({ error: errorMessage });
  }

  onSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    this.setState({ loading: true });
    this.props
      .onSignIn(email, password)
      .then(res => UserAPI.setToken(res.data.token))
      .then(token => {
        if (UserAPI.isLoggedIn()) {
          const redirect = getParam('redirect');

          if (validateUrl(redirect)) {
            window.location = redirect;
          } else {
            window.location.reload();
          }
        }
      })
      .catch(this.onError)
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  render() {
    const { loading, error } = this.state;

    return (
      <Wrapper style={this.props.style}>
        <FormWrapper onSubmit={this.onSubmit}>
          {/*error && <Flash inline noExpire flash={{ type: 'danger', message: error }} />*/}
          <Input
            placeholder="example@domain.com"
            name="email"
            id="email"
            type="email"
            onChange={this.onFieldChange}
            validations={[valid.required, valid.email]}
          />
          <Input
            placeholder="Password"
            name="password"
            id="password"
            type="password"
            onChange={this.onFieldChange}
            validations={[valid.required]}
          />
          <Text>
            <a href="/account-recovery">Forgot your password?</a>
          </Text>
          <FormButton level="secondary">{loading ? <LoadingBlock quiet small color="white" /> : 'Go'}</FormButton>
          <Text>
            Dont have an account?&nbsp;<a href="/join">Register here.</a>
          </Text>
        </FormWrapper>
      </Wrapper>
    );
  }
}

SignInForm.propTypes = {
  onSignIn: PropTypes.func.isRequired
};

export default SignInForm;
