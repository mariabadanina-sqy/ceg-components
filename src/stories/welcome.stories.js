import * as React from 'react';
import { Flex } from '@sqymagma/elements';
import { GriddoBig } from '@components/Icon';

export const Welcome = () => (
  <Flex
    bg="ui01"
    flexDirection="column"
    justifyContent="space-between"
    alignItems="center"
    height="100vh"
  >
    <Flex alignItems="center" justifyContent="center" height="100%" width="60%">
      <GriddoBig width="100%" />
    </Flex>
  </Flex>
);

export default {
  title: 'Start here/Welcome',
  parameters: {
    options: {
      showPanel: false,
    },
  },
};
