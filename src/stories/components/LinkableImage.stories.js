import * as React from 'react';
import LinkableImage from '@components/LinkableImage';
import { getSchemaDefaults } from '@utils';

const defaults = getSchemaDefaults('components', 'LinkableImage');

export const SchemaDefault = () => <LinkableImage {...defaults} />;

export const CustomProps = () => (
  <LinkableImage
    {...defaults}
    alt="Alt"
    veil={50}
    file={{
      publicId: 'griddo-components-starter/griddo-01',
    }}
    url={{
      newTab: true,
      noFollow: true,
      href: '//www.secuoyas.com',
    }}
    responsive={[
      { breakpoint: null, width: '100px' },
      { breakpoint: '400px', width: '400px' },
      { breakpoint: '800px', width: '800px' },
      { breakpoint: '1200px', width: '1200px' },
    ]}
  />
);

export default {
  title: 'Components/LinkableImage',
  parameters: {
    options: {
      showPanel: false,
    },
  },
};
