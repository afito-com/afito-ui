import React from 'react';
import { control } from 'react-validation';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ValidationWrapper = control(({ error, isChanged, isUsed, ...rest }) => (
  <>
    <Textarea {...rest} />
    {isChanged && isUsed && error}
  </>
));

const Textarea = styled.textarea`
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

Textarea.propTypes = {};

export default Textarea;
