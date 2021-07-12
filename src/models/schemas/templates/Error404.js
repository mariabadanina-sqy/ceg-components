import CLOUDINARY_BASE_UPLOAD_URL from '@constants/cloudinary/base-upload-url'

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
    '1x': `${CLOUDINARY_BASE_UPLOAD_URL}/thumbnails/Error404`,
    '2x': `${CLOUDINARY_BASE_UPLOAD_URL}/thumbnails/Error404@2x`,
  },
}
