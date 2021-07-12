import { CLOUDINARY_BASE_UPLOAD_URL as CLOUDINARY_URL } from '@constants/cloudinary/cloudinary'

export default {
  displayName: 'Error 404',
  component: 'Error404',
  dataPacks: null,
  type: { label: 'Static', value: 'static', special: '404' },
  singleInstance: true,
  schemaType: 'template',
  content: [],

  default: {
    type: 'template',
    templateType: 'Error404',
  },

  thumbnails: {
    '1x': `${CLOUDINARY_URL}/thumbnails/Error404`,
    '2x': `${CLOUDINARY_URL}/thumbnails/Error404@2x`,
  },
}
