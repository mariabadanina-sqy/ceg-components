import { create } from '@storybook/theming/create';

export default create({
  base: 'light',

  colorPrimary: '#333333',
  colorSecondary: '#00147c',

  // UI
  appBg: 'white',
  appContentBg: '#ffffff',
  appBorderColor: '#f7f7f7',
  appBorderRadius: 2,

  // Typography
  fontBase: 'IBM Plex mono',
  fontCode: 'monospace',

  // Text colors
  textColor: '#333333',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: 'lightgray',
  barSelectedColor: '#333333',
  barBg: 'white',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'IE Thesaurus',
  _brandImage: 'ie-logo-storybook.png',
  brandImage: 'griddo-logo.svg',
});
