export default {
  type: 'object',
  properties: {
    whiteList: { type: 'array', minItems: 1 },
  },
  required: ['whiteList'],
}
