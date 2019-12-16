import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  colorPrimary: 'rgb(37, 60, 110)',
  colorSecondary: 'rgb(87, 197, 155)',

  // UI
  appBg: 'white',
  appContentBg: '#f1f4f6',
  appBorderColor: '#8898aa',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Nunito", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'silver',
  barSelectedColor: 'rgb(37, 60, 110)',
  barBg: '#f1f4f6',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'rgb(37, 60, 110)',
  inputBorderRadius: 4,

  brandTitle: 'afito-ui',
  brandUrl: 'https://afito.com',
  brandImage: 'https://afito-production-bucket.s3.us-east-2.amazonaws.com/static/images/logo_lightbg.png'
});
