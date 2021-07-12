export default {
  title: 'Title',
  type: 'HeadingField',
  key: 'title',
  advanced: true,
  hideable: true,
  default: { tag: 'h2', content: 'Title' },
  options: [
    { value: 'h1', label: 'H1' },
    { value: 'h2', label: 'H2' },
    { value: 'h3', label: 'H3' },
    { value: 'h4', label: 'H4' },
    { value: 'span', label: 'span' },
  ],
}
