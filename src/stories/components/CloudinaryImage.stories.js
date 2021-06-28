import * as React from 'react';
import { CloudinaryImage } from '@griddo/core';

export const WithPublicId = () => (
  <CloudinaryImage
    publicId="griddo-components-starter/griddo-01"
    responsive={[
      { breakpoint: null, width: '600px' },
      { breakpoint: '768px', width: '1024px' },
      { breakpoint: '1024px', width: '1280px' },
      { breakpoint: '1280px', width: '1600px' },
      { breakpoint: '1600px', width: '2000px' },
    ]}
  />
);

export default {
  title: 'Components/CloudinaryImage',
  parameters: {
    options: {
      showPanel: false,
    },
  },
};
