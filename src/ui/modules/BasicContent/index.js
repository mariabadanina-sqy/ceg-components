import * as React from 'react';
import { Stack, Box, Text } from '@sqymagma/elements';
import ModuleWrapper from '@modules/ModuleWrapper';
import LinkableImage from '@components/LinkableImage';

export default ({ title, subtitle, detail, image }) => {
  return (
    <ModuleWrapper>
      <Stack
        flexDirection={{ default: 'column', m: 'row' }}
        hs={{ default: '0', m: 'm' }}
        vs={{ default: 'm', m: '0' }}
      >
        <h1>hola</h1>
        <Box width={{ default: '100%', m: '50%' }}>
          <LinkableImage
            publicId={image?.file?.publicId}
            url={image?.url}
            overlayOpacity={image?.veil / 100}
            responsive={[
              { breakpoint: null, width: '600px' },
              { breakpoint: '768px', width: '1200px' },
              { breakpoint: '1200px', width: '1600px' },
            ]}
          />
        </Box>
        <Stack
          flexDirection="column"
          vs="xs"
          width={{ default: '100%', m: '50%' }}
        >
          <Text textStyle="headingl" as={title.tag} color="text01">
            {title.content}
          </Text>
          <Text textStyle="headingxs" as="span" color="text02">
            {subtitle}
          </Text>
          <Text textStyle="body" as="p" color="text01">
            {detail}
          </Text>
        </Stack>
      </Stack>
    </ModuleWrapper>
  );
};
