import fields from './Fields'

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
              ...fields,
            },
          },
        },
      },
    },
  },
  required: ['schemaType', 'displayName', 'component', 'dataPacks'],
}
