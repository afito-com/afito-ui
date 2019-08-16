import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const SwitchWrapper = ({ name, onClick, onChange, ...rest }) => (
  <>
    <SwitchInput id={name} name={name} type="checkbox" onClick={onClick} onChange={onChange} {...rest} />
    <SwitchLabel htmlFor={name} onClick={onClick} className="switch" />
  </>
);

const SwitchInput = styled.input`
  height: 0;
  width: 0;
  visibility: hidden;
`;

const SwitchLabel = styled.label`
  cursor: pointer;
  text-indent: -9999px;
  width: 45px !important;
  height: 22px;
  background: #ddd;
  margin: 0 8px;
  display: block;
  border-radius: 100px;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 1px;
    left: 1px;
    width: 20px;
    height: 20px;
    background: #fff;
    border-radius: 90px;

    transition: 0.3s ease-in-out;
  }

  input:checked + & {
    background: #3acc93;
  }

  input:checked + &:after {
    left: calc(100% - 1px);
    -moz-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
`;

export default SwitchWrapper;
