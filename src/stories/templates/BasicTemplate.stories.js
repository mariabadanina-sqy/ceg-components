import * as React from 'react';
import { getSchemaDefaults } from '@utils';
import { BasicTemplate } from '@templates';

const defaults = getSchemaDefaults('templates', 'BasicTemplate');

export const SchemaDefault = () => <BasicTemplate {...defaults} />;

export const TestingModule = () => (
  <>
    <BasicTemplate
      {...defaults}
      heroSection={{
        modules: [{ component: 'BasicContent' }, { component: 'BasicContent' }],
      }}
    />
  </>
);

export const TestingBackgroundImageLazyLoading = () => {
  return (
    <BasicTemplate
      heroSection={{ modules: [] }}
      mainSection={{
        modules: [
          { component: 'BasicContent' },
          { component: 'BasicContent' },
          { component: 'BasicContent' },
          { component: 'BasicContent' },
          { component: 'BasicContent' },
          { component: 'BasicContent' },
          { component: 'BasicContent' },
          { component: 'BasicContent' },
          { component: 'BasicContent' },
          { component: 'BasicContent' },
          { component: 'BasicContent' },
        ],
      }}
    />
  );
};

export default {
  title: 'Templates/BasicTemplate',
  parameters: {
    options: {
      showPanel: false,
    },
  },
};
