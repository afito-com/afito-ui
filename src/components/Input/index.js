import React from 'react';
import { control } from 'react-validation';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ValidationWrapper = control(({ error, isChanged, isUsed, name, nolabel, label, ...rest }) => (
  <>
    <Label style={nolabel ? { display: 'none' } : { textTransform: 'capitalize' }} htmlFor={name}>
      {label}
    </Label>
    <Input id={name} name={name} {...rest} />
    {isChanged && isUsed && error}
  </>
));

const Label = styled.label`
  font-size: 14px;
  font-weight: 700;
  font-family: ${props => props.theme.AFITO_UI.bodyFont};
`;

const Input = styled.input`
  box-sizing: border-box;
  border-radius: 4px;
  background-color: white; /*rgb(241, 244, 246);*/
  border: 1px solid #d2dce0;
  width: 100%;
  outline: 0;
  padding: 15px 20px;
  font-size: 14px;
  font-weight: 700;
  font-family: ${props => props.theme.AFITO_UI.bodyFont};

  &::placeholder {
    color: #828282;
  }

  & + .error-message {
    padding-left: 5px;
    color: ${props => props.theme.AFITO_UI.dangerColor};
    font-size: 14px;
    font-weight: 700;
    font-family: ${props => props.theme.AFITO_UI.bodyFont};
    width: 100%;
    text-align: left;

    &::before {
      font-family: 'Font Awesome 5 Free';
      font-weight: 900;
      content: '\f06a'+ ' ';
    }
  }
`;

/*
const Select = control(({ error, isChanged, isUsed, ...rest }) => (
  <>
    <select {...rest} />
    {isChanged && isUsed && error}
  </>
));

export { Textarea, Input, Select };
*/

Input.propTypes = {
  name: PropTypes.string.isRequired
};

export default ValidationWrapper;
