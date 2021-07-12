const {
  color: { colors },
} = require('./theme.js')

module.exports = {
  // This id must match with the filename and the id in src/griddo.json
  id: 'defaultAlt',
  color: {
    colors: {
      ...colors,
      ui01: { value: '#f6f6f7' },
      ui02: { value: '#ffffff' },
      ui03: { value: '#cccccc' },
      ui04: { value: '#dddddd' },
    },
  },
}
