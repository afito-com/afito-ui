import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  font-family: ${props => props.theme.AFITO_UI.bodyFont};
  font-weight: 800;
  font-size: 14px;
  text-transform: uppercase;
  display: inline-block;
  outline: 0;
  padding: ${props => props.theme.AFITO_UI.buttonPadding};
  border-radius: 4px;
  border: 1px solid transparent;
  margin: 10px 0;
  box-shadow: ${props => props.theme.AFITO_UI.buttonShadow};
  cursor: pointer;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, background 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:disabled {
    background: darken(${props => props.theme.AFITO_UI.secondaryColor}, 10%);
    color: #8898aa;
    border-color: #dfdfdf;
    box-shadow: none;
    cursor: default;
  }

  &:hover {
    text-decoration: none;
  }

  &:active {
    box-shadow: ${props => props.theme.AFITO_UI.buttonShadowDepressed};
  }

  &:focus {
    outline: 0;
  }

  & + & {
    margin-left: 15px;
  }

  &--fill {
    width: 100%;
  }
`;

const PrimaryButton = styled(ButtonWrapper)`
  color: rgb(242, 242, 242);
  background: ${props => props.theme.AFITO_UI.primaryColor};

  &:active {
    background: darken(${props => props.theme.AFITO_UI.primaryColor}, 5%);
  }
`;

const SecondaryButton = styled(ButtonWrapper)`
  color: rgb(242, 242, 242);
  background: ${props => props.theme.AFITO_UI.secondaryColor};

  &:active {
    background: darken(${props => props.theme.AFITO_UI.secondaryColor}, 5%);
  }
`;

const OutlineButton = styled(ButtonWrapper)`
  color: #505050;
  background: transparent;
  border: 1px solid #d2dce0;
  box-shadow: none;

  &:active {
    box-shadow: none;
  }
`;

function Button({ level, children, ...rest }) {
  if (level === 'primary') {
    return (
      <PrimaryButton level={level} {...rest}>
        {children}
      </PrimaryButton>
    );
  } else if (level === 'secondary') {
    return (
      <SecondaryButton level={level} {...rest}>
        {children}
      </SecondaryButton>
    );
  } else if (level === 'outline') {
    return (
      <OutlineButton level={level} {...rest}>
        {children}
      </OutlineButton>
    );
  } else {
    return null;
  }
}

Button.propTypes = {
  level: PropTypes.string.isRequired
};

export default Button;
