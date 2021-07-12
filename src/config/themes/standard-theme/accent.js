const {
  color: { colors },
} = require('./theme.js')

module.exports = {
  // This id must match with the filename and the id in src/griddo.json
  id: 'accent',
  color: {
    colors: {
      ...colors,
      brand01: { value: '#00338D' },
      brand02: { value: '#00338D' },

      text01: { value: '#ffffff' },
      text02: { value: '#BFC8FC' },
      text03: { value: '#ffffff' },
      text04: { value: '#BFC8FC' },

      icons01: { value: '#333333' },
      icons02: { value: '#555555' },
      icons03: { value: '#bfbfbf' },
      icons04: { value: '#8d8d8d' },
      icons05: { value: '#00338D' },

      interactive01: { value: '#ffffff' },
      interactive01Hover: { value: '#092C4A' },
      interactive01Pressed: { value: '#232323' },
      textOnInteractive01: { value: '#333333' },
      textOnInteractive01Hover: { value: '#ffffff' },
      textOnInteractive01Pressed: { value: '#ffffff' },

      interactive02: { value: '#ffffff' },
      interactive02Hover: { value: '#ffffff' },
      interactive02Pressed: { value: '#ffffff' },
      textOnInteractive02: { value: '#ffffff' },
      textOnInteractive02Hover: { value: '#00338D' },
      textOnInteractive02Pressed: { value: '#00338D' },

      inverse01: { value: '#00338D' },
      inverse02: { value: '#ffffff' },
      inverse03: { value: '#333333' },

      link01: { value: '#ffffff' },
      link01Hover: { value: '#809FB7' },
      link01Pressed: { value: '#ffffff' },

      link02: { value: '#ffffff' },
      link02Hover: { value: '#809FB7' },
      link02Pressed: { value: '#ffffff' },

      primaryBackground: { value: '#00338D' },

      ui01: { value: '#00338D' },
      ui02: { value: '#1A4798' },
      ui03: { value: '#335CA4' },
      ui04: { value: '#6685BB' },
      ui05: { value: '#ffffff' },

      info: { value: '#00338D' },
      success: { value: '#B2E94D' },
      error: { value: '#FF6363' },
      focusLine: { value: '#99A6FD' },

      disabled01: { value: '#A3B3D' },
      disabled02: { value: '#6681BD' },
    },
  },
}
