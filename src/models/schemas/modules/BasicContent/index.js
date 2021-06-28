import { createSchema } from '@utils';

// Fields
import title from './title';
import subtitle from './subtitle';
import detail from './detail';
import image from './image';

// Default values
import defaults from './defaults';

// Thumbnail
import thumbnails from './thumbnails';

export default createSchema({
  schemaType: 'module',
  displayName: 'Basic Content',
  component: 'BasicContent',
  dataPacks: null,
  category: null,
  trace: true,
  configTabs: [
    {
      title: 'content',
      fields: [title, subtitle, detail, image],
    },
    {
      title: 'config',
      fields: [],
    },
  ],

  default: defaults,
  thumbnails: thumbnails,
});
