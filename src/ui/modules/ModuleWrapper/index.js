import * as React from 'react';
import { Flex } from '@sqymagma/elements';
import { useStyledTheme } from '@hooks';

const ModuleWrapper = ({ children, ...props }) => {
  const { breakpoints } = useStyledTheme();
  return (
    <Flex
      bg="ui01"
      maxWidth={[...breakpoints]}
      width="100%"
      flexDirection="column"
      mx="auto"
      p="xl"
      {...props}
    >
      {children}
    </Flex>
  );
};

export default ModuleWrapper;
