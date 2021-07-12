import * as React from 'react'
import CloudinaryBackgroundImage from '@components/CloudinaryBackgroundImage'
import { Box } from '@sqymagma/elements'

export const WithPublicId = () => (
  <CloudinaryBackgroundImage
    publicId="griddo-components-starter/griddo-01"
    responsive={{
      _: { width: '400px' },
      s: { width: '600px' },
      m: { width: '900px' },
      l: { width: '1100px' },
      xl: { width: '1300px' },
    }}
  >
    s
    <Box height="100vh" />
  </CloudinaryBackgroundImage>
)

export const WithSRC = () => (
  <CloudinaryBackgroundImage src="https://images.unsplash.com/photo-1624185106263-3cc8008d9f5d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80">
    <Box height="100vh" />
  </CloudinaryBackgroundImage>
)

export default {
  title: 'Components/CloudinaryBackgroundImage',
  parameters: {
    options: {
      showPanel: false,
    },
  },
}
