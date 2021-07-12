import * as React from 'react'
import styled from 'styled-components'
import { Box } from '@sqymagma/elements'

const Wrapper = styled(Box)`
  scroll-margin-top: 72px;
  ${(p) => p.theme.mq.m} {
    scroll-margin-top: 128px;
  }
`

const AnchorWrapper = ({ children, ...props }) => {
  return <Wrapper {...props}>{children}</Wrapper>
}

export default AnchorWrapper
