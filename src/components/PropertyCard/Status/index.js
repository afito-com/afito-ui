import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Badge = styled.div`
  padding: 6px;
  border-radius: 4px;
  background: ${props =>
    props.level === 'primary'
      ? props.theme.AFITO_UI.primaryColor
      : props.level === 'secondary'
      ? props.theme.AFITO_UI.secondaryColor
      : props.level === 'danger'
      ? props.theme.AFITO_UI.dangerColor
      : 'lightgrey'};
  color: white;
  position: absolute;
  top: 10px;
  right: 10px;
`;

Status.propTypes = {
  level: PropTypes.oneOf(['danger', 'primary', 'secondary']).isRequired,
  children: PropTypes.node
};

function Status({ level, children }) {
  return <Badge level={level}>{children}</Badge>;
}

export default Status;
