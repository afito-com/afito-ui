import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Tab = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 65px;
  width: 100%;
  max-width: 300px;
  cursor: pointer;
  color: #8898aa;

  &:hover {
    text-decoration: none;
  }

  &:active,
  &:focus {
    color: ${props => props.theme.AFITO_UI.primaryColor};
  }

  &--small {
    max-width: 150px;
    width: auto;
  }

  &--noborder {
    border: 0;
  }

  &--nohighlight {
    background-color: transparent;
  }

  &--active {
    border-color: ${props => props.theme.AFITO_UI.primaryColor};
    color: ${props => props.theme.AFITO_UI.primaryColor};
  }
`;

const TabWrapper = ({ title, active, onClick, index }) => (
  <Tab onClick={() => onClick(index)} index={index} className={active ? 'Tab Tab--active' : 'Tab'}>
    <h5>{title}</h5>
  </Tab>
);

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  index: PropTypes.number
};

export default TabWrapper;
