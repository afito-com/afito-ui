import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../theme.js';

const ComponentLibThemeProvider = props => {
  const theme = {
    AFITO_UI: Object.assign({}, defaultTheme, props.theme)
  };
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

ComponentLibThemeProvider.propTypes = {
  theme: PropTypes.object,
  children: PropTypes.node
};

export default ComponentLibThemeProvider;
