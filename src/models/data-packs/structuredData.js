export default {
  ITEMS: {
    title: 'Items',
    dataPacks: ['ITEMS'],
    local: true,
    taxonomy: false,
    fromPage: false,
    translate: true,
    schema: {
      fields: [
        {
          key: 'title',
          title: 'Title',
          type: 'TextField',
          mandatory: true,
        },
        {
          key: 'subtitle',
          title: 'Subtitle',
          type: 'TextField',
          mandatory: true,
        },
        {
          key: 'content',
          title: 'Content',
          type: 'RichText',
          mandatory: true,
        },
        {
          key: 'linkText',
          title: 'Link text',
          type: 'TextField',
          mandatory: true,
        },
        {
          key: 'link',
          title: 'Link',
          type: 'UrlField',
          mandatory: true,
        },
        {
          key: 'image',
          title: 'Image',
          type: 'ImageField',
          mandatory: true,
        },
      ],
    },
    clone: null,
    defaultValues: null,
  },
}
