import { CLOUDINARY_BASE_UPLOAD_URL as CLOUDINARY_URL } from '@constants/cloudinary';

export default {
  schemaType: 'template',
  displayName: 'Basic Template',
  component: 'BasicTemplate',
  dataPacks: null,
  type: { label: 'Static', value: 'static' },
  content: [
    {
      title: 'Hero Section',
      type: 'ComponentArray',
      maxItems: 1,
      whiteList: ['BasicContent'],
      key: 'heroSection',
    },
    {
      title: 'Main Section',
      type: 'ComponentArray',
      maxItems: null,
      whiteList: ['BasicContent', 'Distributor'],
      key: 'mainSection',
    },
  ],

  default: {
    type: 'template',
    templateType: 'BasicTemplate',
    heroSection: {
      component: 'Section',
      name: 'Hero Section',
      modules: [],
      sectionPosition: 1,
    },
    mainSection: {
      component: 'Section',
      name: 'Main Section',
      modules: [],
      sectionPosition: 2,
    },
  },

  thumbnails: {
    '1x': `${CLOUDINARY_URL}/thumbnails/BasicTemplate-new`,
    '2x': `${CLOUDINARY_URL}/thumbnails/BasicTemplate@2x-new`,
  },
};
