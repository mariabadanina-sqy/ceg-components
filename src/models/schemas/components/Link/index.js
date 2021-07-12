import { createSchema } from '@utils';
import { CLOUDINARY_BASE_UPLOAD_URL as CLOUDINARY_URL } from '@constants/cloudinary/cloudinary';

export default createSchema({
  schemaType: 'component',
  displayName: 'Link',
  component: 'Link',
  dataPacks: null,
  configTabs: [
    {
      title: 'content',
      fields: [
        {
          title: 'Text',
          type: 'TextField',
          key: 'text',
        },
        {
          title: 'URL',
          type: 'UrlField',
          key: 'url',
          advanced: true,
        },
      ],
    },

    {
      title: 'config',
      fields: [
        {
          title: 'Style',
          key: 'style',
          type: 'VisualUniqueSelection',
          options: [
            {
              value: 'primary',
              img: `${CLOUDINARY_URL}/themes/primaryStyle`,
            },
            {
              value: 'secondary',
              img: `${CLOUDINARY_URL}/themes/secondaryStyle`,
            },
            {
              value: 'link',
              img: `${CLOUDINARY_URL}/themes/linkStyle`,
            },
          ],
          columns: 3,
        },
      ],
    },
  ],

  default: {
    component: 'Link',
    text: 'Link',
    url: {
      url: '',
      linkTo: null,
      newTab: true,
      noFollow: false,
      size: null,
      icon: null,
      linkContainer: null,
    },
    style: 'primary',
  },

  thumbnails: {
    '1x': `${CLOUDINARY_URL}/thumbnails/Link`,
    '2x': `${CLOUDINARY_URL}/thumbnails/Link@2x`,
  },
});
