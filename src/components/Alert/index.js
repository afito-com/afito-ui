import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Text } from '../Typography';

const Wrapper = styled.div`
  padding: 20px;
  width: 100%;
  border-radius: 4px;
  text-align: left;
  box-sizing: border-box;
  font-size: 14px;
  margin: 5px 0;
  background: ${props => {
    switch (props.type) {
      case 'info':
        return `${props.theme.AFITO_UI.lightPrimaryColor}`;
      case 'success':
        return `${props.theme.AFITO_UI.lightSecondaryColor}`;
      case 'warning':
        return `${props.theme.AFITO_UI.lightWarningColor}`;
      case 'danger':
        return `${props.theme.AFITO_UI.lightDangerColor}`;
      default:
        return 'lightgrey';
    }
  }};
`;

export default function Alert({ type, children }) {
  function getIcon(type) {
    switch (type) {
      case 'info':
        return <i className="fas fa-info-circle" />;
      case 'success':
        return <i className="fas fa-check-circle" />;
      case 'danger':
        return <i className="fas fa-exclamation-triangle" />;
      case 'warning':
        return <i className="fas fa-exclamation-circle" />;
      default:
        return <i className="fas fa-info-circle" />;
    }
  }

  return (
    <Wrapper type={type}>
      <Text style={{ marginRight: '15px' }}>{getIcon(type)}</Text>
      <Text>{children || 'Unknown Error: Try again later.'}</Text>
    </Wrapper>
  );
}

Alert.propTypes = {
  type: PropTypes.string.isRequired
};
