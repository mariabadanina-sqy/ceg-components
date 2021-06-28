export default {
  type: 'object',
  properties: {
    title: { type: 'string' },
    key: { type: 'string' },
    mandatory: { type: 'boolean' },
    hideable: { type: 'boolean' },
    advanced: { type: 'boolean' },
    whiteList: { type: 'array', minItems: 1 },
    options: { type: 'array', minItems: 1 },
    maxItems: { type: ['number', 'null'] },
  },
  required: ['title', 'type', 'key'],
};
