const {
  color: { colors },
} = require('../globaltheme.js');

const theme = {
  brand01: '#00338D',
  brand02: '#002D91',
  ink: '#333333',
  paper: '#FFFFFF',
};

module.exports = {
  // This id must match with the folder name and the id in src/griddo.json
  id: 'standard-theme',

  color: {
    colors: {
      ...colors,
      overlay01: { value: '#000000', opacity: 0.5 },
      brand01: { value: theme.brand01 },
      brand02: { value: theme.brand02 },

      inverse01: { value: theme.paper },
      inverse02: { value: theme.brand01 },
      inverse02Alt: { value: theme.brand01 },

      link01: { value: theme.brand01 },
      link01Hover: { value: '#5C7DB6' },
      link01Pressed: { value: '#6294E9' },
      link01Focus: { value: '#6294E9' },

      link02: { value: theme.ink },
      link02Hover: { value: theme.brand01 },
      link02Pressed: { value: '#666666' },
      link02Focus: { value: '#666666' },

      interactive01: { value: theme.brand01 },
      interactive01Hover: { value: theme.ink },
      interactive01Pressed: { value: '#232323' },
      interactive01Focus: { value: '#EB7974' },
      textOnInteractive01: { value: theme.paper },
      textOnInteractive01Hover: { value: theme.paper },
      textOnInteractive01Pressed: { value: theme.paper },
      textOnInteractive01Focus: { value: theme.paper },

      interactive02: { value: theme.ink },
      interactive02Hover: { value: theme.brand01 },
      interactive02Pressed: { value: '#232323' },
      interactive02Focus: { value: '#EB7974' },
      textOnInteractive02: { value: theme.ink },
      textOnInteractive02Hover: { value: theme.paper },
      textOnInteractive02Pressed: { value: theme.paper },
      textOnInteractive02Focus: { value: theme.paper },

      interactive03: { value: theme.paper },
      interactive03Hover: { value: theme.brand01 },
      interactive03Pressed: { value: '#092C4A' },
      interactive03Focus: { value: '#EB7974' },
      // textOnInteractive03: { value: theme.paper },
      // textOnInteractive03Hover: { value: theme.paper },
      // textOnInteractive03Pressed: { value: theme.paper },
      // textOnInteractive03Focus: { value: theme.paper },

      interactive04: { value: theme.ink },
      interactive04Hover: { value: theme.ink },
      interactive04Pressed: { value: theme.brand01 },
      interactive04Focus: { value: '#EB7974' },
      textOnInteractive04: { value: theme.paper },
      textOnInteractive04Hover: { value: theme.paper },
      textOnInteractive04Pressed: { value: theme.paper },
      textOnInteractive04Focus: { value: theme.paper },

      disabled01: { value: '#D6D6D6' },
      disabled02: { value: '#b5b5b5' },

      primaryBackground: { value: theme.paper },
      ui01: { value: theme.paper },
      ui02: { value: '#f6f6f7' },
      ui03: { value: '#E8E8EA' },
      ui04: { value: '#b5b5b5' },
      ui05: { value: theme.ink },

      text01: { value: theme.ink },
      text02: { value: '#555555' },
      text03: { value: '#bfbfbf' },
      text04: { value: '#8d8d8d' },

      icons01: { value: theme.ink },
      icons02: { value: '#555555' },
      icons03: { value: '#bfbfbf' },
      icons04: { value: '#8d8d8d' },

      field01: { value: '#ff0000' },

      success: { value: '#99CF36' },
      error: { value: '#DE2B31' },
      focusLine: { value: '#0022FF' },
    },
  },
};
