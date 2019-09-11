import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SwitchInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
  margin: 0;
`;

const SwitchLabel = styled.label`
  cursor: pointer;
  text-indent: -9999px;
  width: 35px !important;
  height: 22px;
  background: #eef0f3;
  margin: 0 8px;
  display: block;
  border-radius: 100px;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 3px;
    left: 5px;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0px 4px 7.6px 0.4px rgba(20, 75, 157, 0.24);
    width: 16px;
    height: 16px;

    transition: all 0.1s cubic-bezier(0.3, 0, 0.45, 1);
  }

  input:checked + & {
    background: ${props => props.theme.AFITO_UI.secondaryColor};
  }

  input:checked + &:after {
    left: calc(100% - 5px);
    -moz-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
`;

function SwitchWrapper({ name, onClick, onChange, ...rest }) {
  return (
    <>
      <SwitchInput id={name} name={name} type="checkbox" onClick={onClick} onChange={onChange} {...rest} />
      <SwitchLabel htmlFor={name} onClick={onClick} className="switch" />
    </>
  );
}

SwitchWrapper.propTypes = {};

export default SwitchWrapper;
