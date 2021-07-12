import { createSchema } from '@utils'
import { CLOUDINARY_BASE_UPLOAD_URL as CLOUDINARY_URL } from '@constants/cloudinary/cloudinary'

export default createSchema({
  schemaType: 'module',
  displayName: 'Distributor',
  component: 'Distributor',
  dataPacks: null,
  category: null,
  sectionList: null,
  configTabs: [
    {
      title: 'content',
      fields: [
        {
          title: 'Items',
          type: 'ReferenceField',
          source: ['ITEMS'],
          key: 'data',
        },
      ],
    },
    {
      title: 'config',
      fields: [
        {
          title: 'Anchor ID',
          type: 'TextField',
          key: 'anchorID',
          prefix: '#',
          hideable: true,
          helptext:
            'Do not use uppercase letter or spaces and cannot start with numbers. Example: this-is-an-anchor.',
        },
      ],
    },
  ],

  default: {
    component: 'Distributor',
    hasDistributorData: true,
    data: {
      mode: 'auto',
      source: ['ITEMS'],
      order: 'alpha',
      quantity: 2,
    },
  },

  thumbnails: {
    '1x': `${CLOUDINARY_URL}/thumbnails/Distributor`,
    '2x': `${CLOUDINARY_URL}/thumbnails/Distributor@2x`,
  },
})
