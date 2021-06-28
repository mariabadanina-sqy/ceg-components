export default {
  type: 'object',
  properties: {
    schemaType: { enum: ['component', 'module', 'template', 'page'] },
    displayName: { type: 'string' },
    component: { type: 'string' },
    category: { type: ['string', 'null'] },
    dataPacks: { type: ['array', 'null'] },
    configTabs: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          title: { enum: ['content', 'config'] },
          fields: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                mandatory: { type: 'boolean' },
                title: { type: 'string' },
                key: { type: 'string' },
                hideable: { type: 'boolean' },
              },
              required: ['key'],
            },
          },
        },
      },
    },
  },
  required: ['schemaType', 'displayName', 'component', 'category', 'dataPacks'],
};
