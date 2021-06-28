import * as React from 'react';
import Icon, { GriddoSmall, GriddoBig } from '@components/Icon';
import { Flex } from '@sqymagma/elements';

export const WithName = () => (
  <Flex m="m" flexDirection="column">
    <Icon width="400px" name="griddoSmall" />
    <Icon width="400px" name="griddoBig" />
    <Icon width="400px" name="griddoSmall" fill="text01" />
    <Icon width="400px" name="griddoBig" fill="#ff00ff" />
  </Flex>
);

export const WithImport = () => (
  <Flex m="m" flexDirection="column">
    <GriddoSmall width="400px" />
    <GriddoBig width="400px" />
    <GriddoSmall width="400px" fill="text01" />
    <GriddoBig width="400px" fill="#ff00ff" />
  </Flex>
);

export default {
  title: 'Components/Icons',
  parameters: {
    options: {
      showPanel: false,
    },
  },
};
