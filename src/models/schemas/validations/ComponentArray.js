export default {
  type: 'object',
  properties: {
    maxItems: { type: ['null', 'number'] },
    whiteList: { type: 'array', minItems: 1 },
  },
  required: ['whiteList'],
};
