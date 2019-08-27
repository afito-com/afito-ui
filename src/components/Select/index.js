import React from 'react';
import { control } from 'react-validation';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const SelectWrapper = control(({ error, isChanged, isUsed, name, label, nolabel, ...rest }) => (
  <>
    <Label style={nolabel ? { display: 'none' } : { textTransform: 'capitalize' }} htmlFor={name}>
      {label}
    </Label>
    <Select id={name} name={name} {...rest} />
    {isChanged && isUsed && error}
  </>
));

const Label = styled.label`
  font-size: 14px;
  font-weight: 700;
  font-family: ${props => props.theme.AFITO_UI.bodyFont};
`;

const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  box-sizing: border-box;
  border-radius: 4px;
  background-color: white;
  border: 1px solid #d2dce0;
  width: 100%;
  outline: 0;
  padding: 15px 20px;
  font-size: 14px;
  font-weight: 700;
  font-family: ${props => props.theme.AFITO_UI.bodyFont};
  background: url('../../assets/chevron_down.png') no-repeat 100% 100%;
  background-clip: padding-box;

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
  }
`;

Select.propTypes = {};

export default SelectWrapper;
