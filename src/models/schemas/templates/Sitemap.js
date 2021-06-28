import { CLOUDINARY_BASE_UPLOAD_URL as CLOUDINARY_URL } from '@constants/cloudinary';

export default {
  schemaType: 'template',
  displayName: 'Sitemap',
  component: 'Sitemap',
  dataPacks: null,
  type: { label: 'Static', value: 'static', special: 'sitemap' },
  singleInstance: true,
  content: [
    {
      title: 'Hero Section',
      key: 'heroSection',
      type: 'ComponentArray',
      maxItems: 1,
      whiteList: ['BasicContent'],
    },
    {
      title: 'Main Section',
      key: 'mainSection',
      type: 'ComponentArray',
      maxItems: 1,
      whiteList: ['BasicContent'],
    },
  ],

  configTabs: [],

  default: {
    type: 'template',
    templateType: 'Sitemap',
    heroSection: { modules: [] },
    mainSection: { modules: [] },
  },
  thumbnails: {
    '1x': `${CLOUDINARY_URL}/thumbnails/Sitemap`,
    '2x': `${CLOUDINARY_URL}/thumbnails/Sitemap@2x`,
  },
};
