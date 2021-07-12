import * as React from "react"
import styled, { css } from "styled-components"
import { system } from "styled-system"
import { Box } from "@sqymagma/elements"

import GriddoBig from "./svg/griddo/griddo-big.svg"
import GriddoSmall from "./svg/griddo/griddo-small.svg"
import Facebook from "./svg/social-media/facebook.svg"
import Flickr from "./svg/social-media/flickr.svg"
import GooglePlus from "./svg/social-media/google-plus.svg"
import Instagram from "./svg/social-media/instagram.svg"
import Linkedin from "./svg/social-media/linkedin.svg"
import Linkedin2 from "./svg/social-media/linkedin2.svg"
import Pinterest from "./svg/social-media/pinterest.svg"
import Snapchat from "./svg/social-media/snapchat.svg"
import Spotify from "./svg/social-media/spotify.svg"
import Tiktok from "./svg/social-media/tiktok.svg"
import Tumblr from "./svg/social-media/tumblr.svg"
import Twitter from "./svg/social-media/twitter.svg"
import Whatsapp from "./svg/social-media/whatsapp.svg"
import Youtube from "./svg/social-media/youtube.svg"
import Youtube2 from "./svg/social-media/youtube2.svg"

const filterProps = ["width", "height", "fill", "color", "bg", "display"]

const Base = css`
  * {
    ${system({
      fill: {
        property: "fill",
        scale: "colors",
      },
    })}
  }
`

const BaseGriddoBig = styled(Box)
  .attrs(p => ({ as: GriddoBig }))
  .withConfig({shouldForwardProp: (prop) => ![...filterProps].includes(prop)})
`${Base}`
const BaseGriddoSmall = styled(Box)
  .attrs(p => ({ as: GriddoSmall }))
  .withConfig({shouldForwardProp: (prop) => ![...filterProps].includes(prop)})
`${Base}`
const BaseFacebook = styled(Box)
  .attrs(p => ({ as: Facebook }))
  .withConfig({shouldForwardProp: (prop) => ![...filterProps].includes(prop)})
`${Base}`
const BaseFlickr = styled(Box)
  .attrs(p => ({ as: Flickr }))
  .withConfig({shouldForwardProp: (prop) => ![...filterProps].includes(prop)})
`${Base}`
const BaseGooglePlus = styled(Box)
  .attrs(p => ({ as: GooglePlus }))
  .withConfig({shouldForwardProp: (prop) => ![...filterProps].includes(prop)})
`${Base}`
const BaseInstagram = styled(Box)
  .attrs(p => ({ as: Instagram }))
  .withConfig({shouldForwardProp: (prop) => ![...filterProps].includes(prop)})
`${Base}`
const BaseLinkedin = styled(Box)
  .attrs(p => ({ as: Linkedin }))
  .withConfig({shouldForwardProp: (prop) => ![...filterProps].includes(prop)})
`${Base}`
const BaseLinkedin2 = styled(Box)
  .attrs(p => ({ as: Linkedin2 }))
  .withConfig({shouldForwardProp: (prop) => ![...filterProps].includes(prop)})
`${Base}`
const BasePinterest = styled(Box)
  .attrs(p => ({ as: Pinterest }))
  .withConfig({shouldForwardProp: (prop) => ![...filterProps].includes(prop)})
`${Base}`
const BaseSnapchat = styled(Box)
  .attrs(p => ({ as: Snapchat }))
  .withConfig({shouldForwardProp: (prop) => ![...filterProps].includes(prop)})
`${Base}`
const BaseSpotify = styled(Box)
  .attrs(p => ({ as: Spotify }))
  .withConfig({shouldForwardProp: (prop) => ![...filterProps].includes(prop)})
`${Base}`
const BaseTiktok = styled(Box)
  .attrs(p => ({ as: Tiktok }))
  .withConfig({shouldForwardProp: (prop) => ![...filterProps].includes(prop)})
`${Base}`
const BaseTumblr = styled(Box)
  .attrs(p => ({ as: Tumblr }))
  .withConfig({shouldForwardProp: (prop) => ![...filterProps].includes(prop)})
`${Base}`
const BaseTwitter = styled(Box)
  .attrs(p => ({ as: Twitter }))
  .withConfig({shouldForwardProp: (prop) => ![...filterProps].includes(prop)})
`${Base}`
const BaseWhatsapp = styled(Box)
  .attrs(p => ({ as: Whatsapp }))
  .withConfig({shouldForwardProp: (prop) => ![...filterProps].includes(prop)})
`${Base}`
const BaseYoutube = styled(Box)
  .attrs(p => ({ as: Youtube }))
  .withConfig({shouldForwardProp: (prop) => ![...filterProps].includes(prop)})
`${Base}`
const BaseYoutube2 = styled(Box)
  .attrs(p => ({ as: Youtube2 }))
  .withConfig({shouldForwardProp: (prop) => ![...filterProps].includes(prop)})
`${Base}`

const Icons = ({ name, props}) => {
  const list = {
    griddoBig : <BaseGriddoBig {...props} />,
griddoSmall : <BaseGriddoSmall {...props} />,
facebook : <BaseFacebook {...props} />,
flickr : <BaseFlickr {...props} />,
googlePlus : <BaseGooglePlus {...props} />,
instagram : <BaseInstagram {...props} />,
linkedin : <BaseLinkedin {...props} />,
linkedin2 : <BaseLinkedin2 {...props} />,
pinterest : <BasePinterest {...props} />,
snapchat : <BaseSnapchat {...props} />,
spotify : <BaseSpotify {...props} />,
tiktok : <BaseTiktok {...props} />,
tumblr : <BaseTumblr {...props} />,
twitter : <BaseTwitter {...props} />,
whatsapp : <BaseWhatsapp {...props} />,
youtube : <BaseYoutube {...props} />,
youtube2 : <BaseYoutube2 {...props} />,
    }
    return list[name] || null
}

const IcnSystem = ({ name, ...props }) => {
  const icon = Icons({ name, props })
  if (!icon) console.warn(`Griddo: The Icon ${name} doesn't exist in the icon library`)
  return icon
}

export { BaseGriddoBig as GriddoBig }
export { BaseGriddoSmall as GriddoSmall }
export { BaseFacebook as Facebook }
export { BaseFlickr as Flickr }
export { BaseGooglePlus as GooglePlus }
export { BaseInstagram as Instagram }
export { BaseLinkedin as Linkedin }
export { BaseLinkedin2 as Linkedin2 }
export { BasePinterest as Pinterest }
export { BaseSnapchat as Snapchat }
export { BaseSpotify as Spotify }
export { BaseTiktok as Tiktok }
export { BaseTumblr as Tumblr }
export { BaseTwitter as Twitter }
export { BaseWhatsapp as Whatsapp }
export { BaseYoutube as Youtube }
export { BaseYoutube2 as Youtube2 }

export default IcnSystem
 