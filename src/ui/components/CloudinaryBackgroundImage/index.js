import * as React from 'react'
import { css } from 'styled-components'
import { Flex } from '@sqymagma/elements'
import { useSite } from '@griddo/core'
import cloudinaryCloudName from '@constants/cloudinary/cloud-name'
import { getURIWithParams } from './utils'

const CloudinaryBackgroundImage = ({
  backgroundRepeat = 'no-repeat',
  backgroundSize = 'cover',
  backgroundPosition = '50% 50%',
  backgroundImage,
  children,
  overlayColor = null,
  overlayOpacity,
  overlayTransition = '2s',
  publicId,
  responsive,
  src,
  ...props
}) => {
  const { cloudinaryDefaults } = useSite()
  const { domain, uploadFolder } = cloudinaryDefaults

  const root = `${domain}/${cloudinaryCloudName}/${uploadFolder}`

  const backgroundImageResponsive =
    responsive &&
    Object.fromEntries(
      Object.keys(responsive).map((key) => {
        const cloudinaryUrl = getURIWithParams({
          root,
          imageConfig: {
            ...cloudinaryDefaults,
            ...responsive[key],
          },
        })

        const fullImagePath = `${cloudinaryUrl}/${publicId}`
        return [key, `url(${fullImagePath})`]
      })
    )

  return (
    <Flex
      backgroundRepeat={backgroundRepeat}
      backgroundPosition={backgroundPosition}
      backgroundSize={backgroundSize}
      overlayColor={overlayColor}
      overlayOpacity={overlayOpacity}
      overlayTransition={overlayTransition}
      position="relative"
      {...props}
      backgroundImage={src ? `url(${src})` : backgroundImageResponsive}
      height="100%"
      width="100%"
      css={`
        &::before {
          z-index: 0;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          content: '';
          display: block;
          transition: all ${(p) => p.overlayTransition} ease;
          background-color: rgba(0, 0, 0, ${(p) => p.overlayOpacity});
          ${(p) =>
            p.overlayColor &&
            css`
              background-color: ${p.overlayColor};
              opacity: ${p.overlayOpacity};
            `}
        }
      `}
    >
      {children}
    </Flex>
  )
}
export default CloudinaryBackgroundImage
