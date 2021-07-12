import { createSchema } from '@utils'
import { CLOUDINARY_BASE_UPLOAD_URL as CLOUDINARY_URL } from '@constants/cloudinary/cloudinary'

export default createSchema({
  schemaType: 'page',
  displayName: 'Page',
  component: 'Page',
  dataPacks: null,
  configTabs: [
    {
      title: 'content',
      fields: [
        {
          title: 'Title',
          type: 'TextField',
          key: 'title',
        },
        {
          title: 'Template',
          key: 'template',
          type: 'template',
        },
      ],
    },
    {
      title: 'config',
      fields: [
        {
          type: 'UniqueCheck',
          key: 'setAsHome',
          options: [
            {
              title: 'Set as home',
            },
          ],
        },
        {
          title: 'Parent',
          type: 'AsyncSelect',
          entity: 'pages',
          key: 'parent',
        },
        {
          title: 'Slug',
          type: 'TextField',
          key: 'slug',
        },
        {
          title: 'Template',
          key: 'template',
          type: 'template',
        },
      ],
    },
    {
      title: 'seo',
      fields: [
        {
          title: 'Meta title',
          type: 'TextField',
          key: 'metaTitle',
        },
        {
          title: 'Meta description',
          type: 'TextArea',
          key: 'metaDescription',
        },
        {
          title: 'Canonical URL',
          type: 'TextField',
          key: 'canonicalURL',
        },
        {
          title: 'Meta robots index',
          type: 'RadioGroup',
          key: 'isIndexed',
          options: [
            {
              value: true,
              title: 'Index',
              name: 'index',
            },
            {
              value: false,
              title: 'No index',
              name: 'noindex',
            },
          ],
        },
        {
          title: 'Meta robots follow',
          type: 'RadioGroup',
          key: 'follow',
          options: [
            {
              value: true,
              title: 'Follow',
              name: 'follow',
            },
            {
              value: false,
              title: 'No follow',
              name: 'nofollow',
            },
          ],
        },
        {
          title: 'Meta robots advanced',
          type: 'CheckGroup',
          key: 'metasAdvanced',
          options: [
            {
              value: 'noimageindex',
              title: 'No image index',
              name: 'noimage',
            },
            {
              value: 'nosnippet',
              title: 'No snippet',
              name: 'nosnippet',
            },
            {
              value: 'noodp',
              title: 'No ODP',
              name: 'noodp',
            },
            {
              value: 'noarchive',
              title: 'No archive',
              name: 'noarchive',
            },
          ],
        },
        {
          title: 'Social Media',
          type: 'FieldGroup',
          key: 'socialShare',
          fields: [
            {
              title: 'Title',
              type: 'TextField',
              key: 'socialTitle',
            },
            {
              title: 'Description',
              type: 'TextField',
              key: 'socialDescription',
            },
            {
              title: 'Image',
              type: 'ImageField',
              key: 'socialImage',
            },
          ],
        },
      ],
    },
  ],
  default: {
    component: 'Page',
    setAsHome: false,
    slug: 'new-page',
    title: 'New Page',
    headerConfig: '{}',
    footerConfig: '{}',
    liveStatus: { id: 1 },
    template: {},
    metaTitle: '',
    metaDescription: '',
    canonicalURL: '',
    isIndexed: true,
    follow: true,
    metasAdvanced: '',
    socialTitle: '',
    socialDescription: '',
    socialImage: {},
  },
  thumbnails: {
    '1x': `${CLOUDINARY_URL}/thumbnails/Page`,
    '2x': `${CLOUDINARY_URL}/thumbnails/Page@2x`,
  },
})
