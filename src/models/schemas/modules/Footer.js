import { createSchema } from '@utils'
import { CLOUDINARY_BASE_UPLOAD_URL as CLOUDINARY_URL } from '@constants/cloudinary/cloudinary'

export default createSchema({
  schemaType: 'module',
  displayName: 'Footer',
  component: 'Footer',
  type: 'footer',
  category: 'footer',
  dataPacks: null,
  configTabs: [
    {
      title: 'content',
      fields: [
        {
          title: 'Name',
          type: 'TextField',
          key: 'title',
          mandatory: true,
        },
        {
          title: 'Show Web Links',
          type: 'RadioGroup',
          key: 'showWebLinks',
          mandatory: true,
          options: [
            {
              value: true,
              title: 'Yes',
              name: 'yes',
            },
            {
              value: false,
              title: 'No',
              name: 'no',
            },
          ],
        },

        {
          title: 'Title',
          type: 'TextField',
          key: 'claim',
          mandatory: true,
        },

        {
          title: 'Add button',
          type: 'ComponentContainer',
          whiteList: ['Link'],
          key: 'link',
          hideable: true,
        },

        {
          title: 'Copyright Text',
          type: 'TextField',
          key: 'copyrightText',
          hideable: true,
        },

        {
          title: 'Logo',
          type: 'Select',
          key: 'school',
          options: [
            { value: 'IE', label: 'Instituto de empresa' },
            { value: 'BUS', label: 'Business School' },
            {
              value: 'CLIC',
              label: 'Center for Corporate Learning Innovation',
            },
            { value: 'XL', label: 'Exponential Learning' },
            { value: 'IEEDU', label: 'Reinventing Higher Education' },
            { value: 'LAW', label: 'Law School' },
            { value: 'ARQ', label: 'School of Architecture and Design' },
            { value: 'GPA', label: 'School of Global and public Affairs' },
            { value: 'HST', label: 'School of Human Sciences and Technology' },
            { value: 'UNI', label: 'University' },
          ],
        },

        {
          title: 'Other modules above the footer',
          type: 'ComponentArray',
          maxItems: null,
          whiteList: ['BasicContent'],
          key: 'elements',
          mandatory: false,
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
        {
          type: 'UniqueCheck',
          key: 'setAsDefault',
          options: [
            {
              title: 'Set as Footer default',
            },
          ],
        },

        {
          title: 'Select Footer Menu',
          key: 'legalMenu',
          type: 'AsyncSelect',
          entity: 'menu_containers',
          mandatory: true,
        },

        {
          title: 'Style',
          key: 'theme',
          type: 'VisualUniqueSelection',
          options: [
            {
              value: 'accent',
              img: `${CLOUDINARY_URL}/themes/STYLE03`,
            },
            {
              value: 'inverse',
              img: `${CLOUDINARY_URL}/themes/STYLE04`,
            },
          ],
          columns: 8,
        },
      ],
    },
  ],

  default: {
    anchorID: null,
    component: 'Footer',
    type: 'footer',

    // Content
    title: 'Footer name',
    showWebLinks: true,
    claim: 'Lorem Ipsum',
    link: { component: 'Link' },
    copyrightText: null,
    school: 'IE',
    elements: [],

    // Config
    setAsDefault: false,
    footerMenu: null,
    legalMenu: null,
    theme: 'accent',
  },
  thumbnails: {
    '1x': `${CLOUDINARY_URL}/thumbnails/Footer`,
    '2x': `${CLOUDINARY_URL}/thumbnails/Footer@2x`,
  },
})
