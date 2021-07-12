export default {
  type: 'object',
  properties: {
    title: { type: 'string' },
    type: { type: 'string' },
    key: { type: 'string' },
    mandatory: { type: 'boolean' },
    advanced: { type: 'boolean' },
    default: {
      type: 'object',
      properties: {
        tag: { type: 'string' },
        content: { type: 'string' },
      },
      additionalProperties: false,
    },
    options: { type: 'array' },
  },
  required: ['title', 'type', 'key', 'advanced', 'options'],
}
