import * as React from "react"
import styled, { css } from "styled-components"
import { system } from "styled-system"
import { Box } from "@sqymagma/elements"

import ADownload from "./svg/arrows/a-download.svg"
import DropDown from "./svg/arrows/drop-down.svg"
import DropUp from "./svg/arrows/drop-up.svg"
import Expand from "./svg/arrows/expand.svg"
import ExternalLink from "./svg/arrows/external-link.svg"
import Higher from "./svg/arrows/higher.svg"
import Less from "./svg/arrows/less.svg"
import Quote from "./svg/components/quote.svg"
import Add1 from "./svg/general/add-1.svg"
import Add from "./svg/general/add.svg"
import Calendar2 from "./svg/general/calendar2.svg"
import Close from "./svg/general/close.svg"
import List2 from "./svg/general/list2.svg"
import Phone from "./svg/general/phone.svg"
import ProgramFavorite from "./svg/general/program-favorite.svg"
import RadioCheck2 from "./svg/general/radio-check2.svg"
import Search from "./svg/general/search.svg"
import Search2 from "./svg/general/search2.svg"
import GriddoBig from "./svg/griddo/griddo-big.svg"
import GriddoSmall from "./svg/griddo/griddo-small.svg"
import BackArrow from "./svg/initials/back-arrow.svg"
import CloseMenu from "./svg/initials/close-menu.svg"
import DownArrow from "./svg/initials/down-arrow.svg"
import Email from "./svg/initials/email.svg"
import OpenMenuFit from "./svg/initials/open-menu-fit.svg"
import OpenMenu from "./svg/initials/open-menu.svg"
import Play from "./svg/initials/play.svg"
import LogoBs from "./svg/logos/logo-bs.svg"
import LogoCfclahrVerticalFit from "./svg/logos/logo-cfclahr-vertical-fit.svg"
import LogoCfclahrVertical from "./svg/logos/logo-cfclahr-vertical.svg"
import LogoCfclahr from "./svg/logos/logo-cfclahr.svg"
import LogoCfcli from "./svg/logos/logo-cfcli.svg"
import LogoEl from "./svg/logos/logo-el.svg"
import LogoLs from "./svg/logos/logo-ls.svg"
import LogoRhe from "./svg/logos/logo-rhe.svg"
import LogoSoad from "./svg/logos/logo-soad.svg"
import LogoSogp from "./svg/logos/logo-sogp.svg"
import LogoSohst from "./svg/logos/logo-sohst.svg"
import LogoUH from "./svg/logos/logo-u-h.svg"
import LogoUV from "./svg/logos/logo-u-v.svg"
import LogoUXxx from "./svg/logos/logo-u.xxx.svg"
import Logo from "./svg/logos/logo.svg"
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

const BaseADownload = styled(Box)
  .attrs(p => ({ as: ADownload }))
  .withConfig({shouldForwardProp: (prop) => ![...filterProps].includes(prop)})
`${Base}`
const BaseDropDown = styled(Box)
  .attrs(p => ({ as: DropDown }))
  .withConfig({shouldForwardProp: (prop) => ![...filterProps].includes(prop)})
`${Base}`
const BaseDropUp = styled(Box)
  .attrs(p => ({ as: DropUp }))
  .withConfig({shouldForwardProp: (prop) => ![...filterProps].includes(prop)})
`${Base}`
const BaseExpand = styled(Box)
  .attrs(p => ({ as: Expand }))
  .withConfig({shouldForwardProp: (prop) => ![...filterProps].includes(prop)})
`${Base}`
const BaseExternalLink = styled(Box)
  .attrs(p => ({ as: ExternalLink }))
  .withConfig({shouldForwardProp: (prop) => ![...filterProps].includes(prop)})
`${Base}`
const BaseHigher = styled(Box)
  .attrs(p => ({ as: Higher }))
  .withConfig({shouldForwardProp: (prop) => ![...filterProps].includes(prop)})
`${Base}`
const BaseLess = styled(Box)
  .attrs(p => ({ as: Less }))
  .withConfig({shouldForwardProp: (prop) => ![...filterProps].includes(prop)})
`${Base}`
const BaseQuote = styled(Box)
  .attrs(p => ({ as: Quote }))
  .withConfig({shouldForwardProp: (prop) => ![...filterProps].includes(prop)})
`${Base}`
const BaseAdd1 = styled(Box)
  .attrs(p => ({ as: Add1 }))
  .withConfig({shouldForwardProp: (prop) => ![...filterProps].includes(prop)})
`${Base}`
const BaseAdd = styled(Box)
  .attrs(p => ({ as: Add }))
  .withConfig({shouldForwardProp: (prop) => ![...filterProps].includes(prop)})
`${Base}`
const BaseCalendar2 = styled(Box)
  .attrs(p => ({ as: Calendar2 }))
  .withConfig({shouldForwardProp: (prop) => ![...filterProps].includes(prop)})
`${Base}`
const BaseClose = styled(Box)
  .attrs(p => ({ as: Close }))
  .withConfig({shouldForwardProp: (prop) => ![...filterProps].includes(prop)})
`${Base}`
const BaseList2 = styled(Box)
  .attrs(p => ({ as: List2 }))
  .withConfig({shouldForwardProp: (prop) => ![...filterProps].includes(prop)})
`${Base}`
const BasePhone = styled(Box)
  .attrs(p => ({ as: Phone }))
  .withConfig({shouldForwardProp: (prop) => ![...filterProps].includes(prop)})
`${Base}`
const BaseProgramFavorite = styled(Box)
  .attrs(p => ({ as: ProgramFavorite }))
  .withConfig({shouldForwardProp: (prop) => ![...filterProps].includes(prop)})
`${Base}`
const BaseRadioCheck2 = styled(Box)
  .attrs(p => ({ as: RadioCheck2 }))
  .withConfig({shouldForwardProp: (prop) => ![...filterProps].includes(prop)})
`${Base}`
const BaseSearch = styled(Box)
  .attrs(p => ({ as: Search }))
  .withConfig({shouldForwardProp: (prop) => ![...filterProps].includes(prop)})
`${Base}`
const BaseSearch2 = styled(Box)
  .attrs(p => ({ as: Search2 }))
  .withConfig({shouldForwardProp: (prop) => ![...filterProps].includes(prop)})
`${Base}`
const BaseGriddoBig = styled(Box)
  .attrs(p => ({ as: GriddoBig }))
  .withConfig({shouldForwardProp: (prop) => ![...filterProps].includes(prop)})
`${Base}`
const BaseGriddoSmall = styled(Box)
  .attrs(p => ({ as: GriddoSmall }))
  .withConfig({shouldForwardProp: (prop) => ![...filterProps].includes(prop)})
`${Base}`
const BaseBackArrow = styled(Box)
  .attrs(p => ({ as: BackArrow }))
  .withConfig({shouldForwardProp: (prop) => ![...filterProps].includes(prop)})
`${Base}`
const BaseCloseMenu = styled(Box)
  .attrs(p => ({ as: CloseMenu }))
  .withConfig({shouldForwardProp: (prop) => ![...filterProps].includes(prop)})
`${Base}`
const BaseDownArrow = styled(Box)
  .attrs(p => ({ as: DownArrow }))
  .withConfig({shouldForwardProp: (prop) => ![...filterProps].includes(prop)})
`${Base}`
const BaseEmail = styled(Box)
  .attrs(p => ({ as: Email }))
  .withConfig({shouldForwardProp: (prop) => ![...filterProps].includes(prop)})
`${Base}`
const BaseOpenMenuFit = styled(Box)
  .attrs(p => ({ as: OpenMenuFit }))
  .withConfig({shouldForwardProp: (prop) => ![...filterProps].includes(prop)})
`${Base}`
const BaseOpenMenu = styled(Box)
  .attrs(p => ({ as: OpenMenu }))
  .withConfig({shouldForwardProp: (prop) => ![...filterProps].includes(prop)})
`${Base}`
const BasePlay = styled(Box)
  .attrs(p => ({ as: Play }))
  .withConfig({shouldForwardProp: (prop) => ![...filterProps].includes(prop)})
`${Base}`
const BaseLogoBs = styled(Box)
  .attrs(p => ({ as: LogoBs }))
  .withConfig({shouldForwardProp: (prop) => ![...filterProps].includes(prop)})
`${Base}`
const BaseLogoCfclahrVerticalFit = styled(Box)
  .attrs(p => ({ as: LogoCfclahrVerticalFit }))
  .withConfig({shouldForwardProp: (prop) => ![...filterProps].includes(prop)})
`${Base}`
const BaseLogoCfclahrVertical = styled(Box)
  .attrs(p => ({ as: LogoCfclahrVertical }))
  .withConfig({shouldForwardProp: (prop) => ![...filterProps].includes(prop)})
`${Base}`
const BaseLogoCfclahr = styled(Box)
  .attrs(p => ({ as: LogoCfclahr }))
  .withConfig({shouldForwardProp: (prop) => ![...filterProps].includes(prop)})
`${Base}`
const BaseLogoCfcli = styled(Box)
  .attrs(p => ({ as: LogoCfcli }))
  .withConfig({shouldForwardProp: (prop) => ![...filterProps].includes(prop)})
`${Base}`
const BaseLogoEl = styled(Box)
  .attrs(p => ({ as: LogoEl }))
  .withConfig({shouldForwardProp: (prop) => ![...filterProps].includes(prop)})
`${Base}`
const BaseLogoLs = styled(Box)
  .attrs(p => ({ as: LogoLs }))
  .withConfig({shouldForwardProp: (prop) => ![...filterProps].includes(prop)})
`${Base}`
const BaseLogoRhe = styled(Box)
  .attrs(p => ({ as: LogoRhe }))
  .withConfig({shouldForwardProp: (prop) => ![...filterProps].includes(prop)})
`${Base}`
const BaseLogoSoad = styled(Box)
  .attrs(p => ({ as: LogoSoad }))
  .withConfig({shouldForwardProp: (prop) => ![...filterProps].includes(prop)})
`${Base}`
const BaseLogoSogp = styled(Box)
  .attrs(p => ({ as: LogoSogp }))
  .withConfig({shouldForwardProp: (prop) => ![...filterProps].includes(prop)})
`${Base}`
const BaseLogoSohst = styled(Box)
  .attrs(p => ({ as: LogoSohst }))
  .withConfig({shouldForwardProp: (prop) => ![...filterProps].includes(prop)})
`${Base}`
const BaseLogoUH = styled(Box)
  .attrs(p => ({ as: LogoUH }))
  .withConfig({shouldForwardProp: (prop) => ![...filterProps].includes(prop)})
`${Base}`
const BaseLogoUV = styled(Box)
  .attrs(p => ({ as: LogoUV }))
  .withConfig({shouldForwardProp: (prop) => ![...filterProps].includes(prop)})
`${Base}`
const BaseLogoUXxx = styled(Box)
  .attrs(p => ({ as: LogoUXxx }))
  .withConfig({shouldForwardProp: (prop) => ![...filterProps].includes(prop)})
`${Base}`
const BaseLogo = styled(Box)
  .attrs(p => ({ as: Logo }))
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
    aDownload : <BaseADownload {...props} />,
dropDown : <BaseDropDown {...props} />,
dropUp : <BaseDropUp {...props} />,
expand : <BaseExpand {...props} />,
externalLink : <BaseExternalLink {...props} />,
higher : <BaseHigher {...props} />,
less : <BaseLess {...props} />,
quote : <BaseQuote {...props} />,
add1 : <BaseAdd1 {...props} />,
add : <BaseAdd {...props} />,
calendar2 : <BaseCalendar2 {...props} />,
close : <BaseClose {...props} />,
list2 : <BaseList2 {...props} />,
phone : <BasePhone {...props} />,
programFavorite : <BaseProgramFavorite {...props} />,
radioCheck2 : <BaseRadioCheck2 {...props} />,
search : <BaseSearch {...props} />,
search2 : <BaseSearch2 {...props} />,
griddoBig : <BaseGriddoBig {...props} />,
griddoSmall : <BaseGriddoSmall {...props} />,
backArrow : <BaseBackArrow {...props} />,
closeMenu : <BaseCloseMenu {...props} />,
downArrow : <BaseDownArrow {...props} />,
email : <BaseEmail {...props} />,
openMenuFit : <BaseOpenMenuFit {...props} />,
openMenu : <BaseOpenMenu {...props} />,
play : <BasePlay {...props} />,
logoBs : <BaseLogoBs {...props} />,
logoCfclahrVerticalFit : <BaseLogoCfclahrVerticalFit {...props} />,
logoCfclahrVertical : <BaseLogoCfclahrVertical {...props} />,
logoCfclahr : <BaseLogoCfclahr {...props} />,
logoCfcli : <BaseLogoCfcli {...props} />,
logoEl : <BaseLogoEl {...props} />,
logoLs : <BaseLogoLs {...props} />,
logoRhe : <BaseLogoRhe {...props} />,
logoSoad : <BaseLogoSoad {...props} />,
logoSogp : <BaseLogoSogp {...props} />,
logoSohst : <BaseLogoSohst {...props} />,
logoUH : <BaseLogoUH {...props} />,
logoUV : <BaseLogoUV {...props} />,
logoUXxx : <BaseLogoUXxx {...props} />,
logo : <BaseLogo {...props} />,
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

export { BaseADownload as ADownload }
export { BaseDropDown as DropDown }
export { BaseDropUp as DropUp }
export { BaseExpand as Expand }
export { BaseExternalLink as ExternalLink }
export { BaseHigher as Higher }
export { BaseLess as Less }
export { BaseQuote as Quote }
export { BaseAdd1 as Add1 }
export { BaseAdd as Add }
export { BaseCalendar2 as Calendar2 }
export { BaseClose as Close }
export { BaseList2 as List2 }
export { BasePhone as Phone }
export { BaseProgramFavorite as ProgramFavorite }
export { BaseRadioCheck2 as RadioCheck2 }
export { BaseSearch as Search }
export { BaseSearch2 as Search2 }
export { BaseGriddoBig as GriddoBig }
export { BaseGriddoSmall as GriddoSmall }
export { BaseBackArrow as BackArrow }
export { BaseCloseMenu as CloseMenu }
export { BaseDownArrow as DownArrow }
export { BaseEmail as Email }
export { BaseOpenMenuFit as OpenMenuFit }
export { BaseOpenMenu as OpenMenu }
export { BasePlay as Play }
export { BaseLogoBs as LogoBs }
export { BaseLogoCfclahrVerticalFit as LogoCfclahrVerticalFit }
export { BaseLogoCfclahrVertical as LogoCfclahrVertical }
export { BaseLogoCfclahr as LogoCfclahr }
export { BaseLogoCfcli as LogoCfcli }
export { BaseLogoEl as LogoEl }
export { BaseLogoLs as LogoLs }
export { BaseLogoRhe as LogoRhe }
export { BaseLogoSoad as LogoSoad }
export { BaseLogoSogp as LogoSogp }
export { BaseLogoSohst as LogoSohst }
export { BaseLogoUH as LogoUH }
export { BaseLogoUV as LogoUV }
export { BaseLogoUXxx as LogoUXxx }
export { BaseLogo as Logo }
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
 