import React from 'react';
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

const Label = styled.label`
  font-size: 14px;
  font-weight: 700;
  font-family: ${props => props.theme.AFITO_UI.bodyFont};
`;

const Wrapper = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #d2dce0;
  width: 100%;
  outline: 0;
  margin: 5px 0;
  padding: 15px 20px;
  font-size: 16px;
  font-weight: 700;
  font-family: ${props => props.theme.AFITO_UI.bodyFont};
  background: url('https://afito-production-bucket.s3.amazonaws.com/static/icons/chevron_down.png') no-repeat 98% 50%;
  background-size: 8px;
  background-clip: padding-box;
  background-color: white;

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

SelectNew.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  hideLabel: PropTypes.bool
};

function SelectNew({ name, label, hideLabel, ...rest }) {
  return (
    <>
      <Label style={hideLabel ? visuallyHiddenStyles : { textTransform: 'capitalize' }} htmlFor={name}>
        {label}
      </Label>
      <Wrapper id={name} name={name} {...rest} />
    </>
  );
}

export default SelectNew;
