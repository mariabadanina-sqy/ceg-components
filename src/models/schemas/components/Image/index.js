import { createSchema } from '@utils'
import CLOUDINARY_BASE_UPLOAD_URL from '@constants/cloudinary/base-upload-url'

export default createSchema({
  schemaType: 'component',
  displayName: 'Image',
  component: 'Image',
  dataPacks: null,
  configTabs: [
    {
      title: 'content',
      fields: [
        {
          title: 'File',
          type: 'ImageField',
          key: 'file',
        },
        {
          title: 'Title',
          type: 'TextField',
          key: 'title',
        },
        {
          title: 'Alternative Text',
          type: 'TextField',
          key: 'alt',
        },
        {
          title: 'Veil percentage',
          type: 'SliderField',
          key: 'veil',
        },
      ],
    },
  ],
  default: {
    component: 'Image',
  },
  thumbnails: {
    '1x': `${CLOUDINARY_BASE_UPLOAD_URL}/thumbnails/Image`,
    '2x': `${CLOUDINARY_BASE_UPLOAD_URL}/thumbnails/Image@2x`,
  },
})
