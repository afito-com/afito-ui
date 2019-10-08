import React from 'react';
import { control } from 'react-validation';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const visuallyHiddenStyles = {
  border: 0,
  clip: 'rect(0 0 0 0)',
  height: '1px',
  margin: '-1px',
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  width: '1px'
};

const ValidationWrapper = control(({ error, isChanged, isUsed, name, hideLabel, label, ...rest }) => (
  <>
    <Label style={hideLabel ? visuallyHiddenStyles : { textTransform: 'capitalize' }} htmlFor={name}>
      {label}
    </Label>
    <Textarea id={name} name={name} {...rest} />
    {isChanged && isUsed && error}
  </>
));

const Label = styled.label`
  font-size: 14px;
  font-weight: 700;
  font-family: ${props => props.theme.AFITO_UI.bodyFont};
`;

const Textarea = styled.textarea`
  margin: 5px 0;
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
`;

Textarea.propTypes = {
  name: PropTypes.string.isRequired
};

export default ValidationWrapper;
