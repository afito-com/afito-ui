import React from 'react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../theme.js';

const ComponentLibThemeProvider = props => {
  const theme = {
    AFITO_UI: Object.assign({}, defaultTheme, props.theme)
  };
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default ComponentLibThemeProvider;
