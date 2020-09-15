import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Field } from 'formik';

const Wrapper = styled.div`
  width: 100%;

  & + .error-message {
    padding-left: 5px;
    margin: 0;
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

const Label = styled.label`
  font-size: 14px;
  font-weight: 700;
  font-family: ${props => props.theme.AFITO_UI.bodyFont};
`;

const Input = styled(Field)`
  margin: 5px 0;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: white; /*rgb(241, 244, 246);*/
  border: 1px solid #d2dce0;
  width: 100%;
  outline: 0;
  padding: 15px 20px;
  font-size: 16px;
  font-weight: 700;
  font-family: ${props => props.theme.AFITO_UI.bodyFont};

  &::placeholder {
    color: #828282;
  }

  &:disabled {
    background: #f1f4f6;
    cursor: default;

    &::placeholder {
      background: darken($secondary-color, 10%);
      color: #8898aa !important;
      cursor: default;
      text-decoration: line-through;
    }
  }
`;

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

InputNew.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  hideLabel: PropTypes.bool,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  style: PropTypes.object
};

export default function InputNew({ name, label, type, hideLabel, placeholder, style, disabled }) {
  return (
    <Wrapper style={style}>
      <Label style={hideLabel ? visuallyHiddenStyles : { textTransform: 'capitalize' }} htmlFor={name}>
        {label}
      </Label>
      <Input disabled={disabled} name={name} placeholder={placeholder} type={type} />
    </Wrapper>
  );
}
