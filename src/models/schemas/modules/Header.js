import { createSchema } from '@utils'
import CLOUDINARY_BASE_UPLOAD_URL from '@constants/cloudinary/base-upload-url'

export default createSchema({
  schemaType: 'module',
  displayName: 'Header',
  component: 'Header',
  type: 'header',
  category: 'header',
  dataPacks: null,
  configTabs: [
    {
      title: 'content',
      fields: [
        {
          title: 'Name',
          key: 'title',
          type: 'TextField',
          mandatory: true,
        },

        {
          title: 'Show top navigation',
          type: 'ConditionalField',
          key: 'showTopNavigation',
          options: [
            { value: true, title: 'Yes', name: 'yes' },
            { value: false, title: 'No', name: 'no' },
          ],
          fields: [
            {
              title: 'Title',
              key: 'note01',
              type: 'NoteField',
              condition: true,
            },
            {
              title: 'Check options to add on Top Navigation',
              type: 'CheckGroup',
              key: 'topNavigationContent',
              condition: true,
              options: [
                {
                  value: 'showSocialMedia',
                  title: 'Show social media',
                  name: 'showSocialMedia',
                },
                {
                  value: 'showSearchFeature',
                  title: 'Show search feature',
                  name: 'showSearchFeature',
                },
              ],
            },
          ],
        },

        {
          title: 'Logo',
          type: 'Select',
          key: 'school',
          mandatory: true,
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
          title: 'Primary link',
          type: 'ComponentContainer',
          whiteList: ['Link'],
          key: 'primaryLink',
          hideable: true,
        },
        {
          title: 'Secondary link',
          type: 'ComponentContainer',
          whiteList: ['Link'],
          key: 'secondaryLink',
          hideable: true,
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
          options: [{ title: 'Set as Header default' }],
        },

        {
          title: 'Top menu',
          type: 'AsyncSelect',
          entity: 'menu_containers',
          key: 'topMenu',
          mandatory: true,
        },

        {
          title: 'Main menu',
          type: 'AsyncSelect',
          entity: 'menu_containers',
          key: 'mainMenu',
          mandatory: true,
        },

        {
          type: 'UniqueCheck',
          key: 'sticky',
          options: [{ title: 'Keep sticky on scroll' }],
          condition: true,
        },

        {
          title: 'Add navigation banner',
          type: 'ConditionalField',
          key: 'navigationBanner',
          mandatory: false,
          options: [
            { value: true, title: 'Yes', name: 'yes' },
            { value: false, title: 'No', name: 'no' },
          ],
          fields: [
            {
              title: 'Icon',
              type: 'ImageField',
              key: 'navigationBannerIcon',
              mandatory: false,
              condition: true,
            },
            {
              title: 'Navigation Banner Text',
              type: 'TextField',
              key: 'navigationBannerText',
              hideable: true,
              condition: true,
            },
            {
              title: 'Link',
              type: 'ComponentContainer',
              whiteList: ['Link'],
              key: 'navigationBannerLink',
              hideable: true,
              condition: true,
            },
            {
              title: 'Background color',
              type: 'ColorPicker',
              colors: [
                '#d9e3f0',
                '#f47373',
                '#697689',
                '#37d67a',
                '#2ccce4',
                '#555555',
                '#dce775',
                '#ff8a65',
                '#ba68c8',
              ],
              key: 'navigationBannerBGColor',
              condition: true,
            },
          ],
        },
      ],
    },
  ],

  default: {
    component: 'Header',
    type: 'header',

    // Content
    title: 'Header name',
    note01: {
      title: '',
      text:
        'To configure social links go to settings/general/social. To activate search feature go to settings/actionables',
    },
    showTopNavigation: true,
    topNavigationContent: [],
    school: 'IE',
    primaryLink: {
      component: 'Link',
    },
    secondaryLink: {
      component: 'Link',
    },

    // Config
    setAsDefault: false,
    topMenu: null,
    mainMenu: null,
    sticky: true,
    navigationBannerIcon: null,
    navigationBanner: false,
    navigationBannerText: 'lorem ipsum',
    navigationBannerLink: {
      component: 'Link',
    },
    navigationBannerBGColor: '#50ABFF',
  },
  thumbnails: {
    '1x': `${CLOUDINARY_BASE_UPLOAD_URL}/thumbnails/Header`,
    '2x': `${CLOUDINARY_BASE_UPLOAD_URL}/thumbnails/Header@2x`,
  },
  styles: {
    S001: `${CLOUDINARY_BASE_UPLOAD_URL}/thumbnails/HeaderStyle01`,
    S002: `${CLOUDINARY_BASE_UPLOAD_URL}/thumbnails/HeaderStyle02`,
  },
})
