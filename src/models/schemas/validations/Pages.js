export default {
  type: 'object',
  properties: {
    schemaType: { enum: ['component', 'module', 'template', 'page'] },
    displayName: { type: 'string' },
    component: { type: 'string' },
    dataPacks: { type: ['array', 'null'] },
  },
  required: ['schemaType', 'displayName', 'component', 'dataPacks'],
}
