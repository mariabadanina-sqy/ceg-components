import { createGlobalStyle } from 'styled-components'

const Hoves100 = require('./fonts/hoves/TTHoves-Thin.woff2')
const Hoves200 = require('./fonts/hoves/TTHoves-ExtraLight.woff2')
const Hoves300 = require('./fonts/hoves/TTHoves-Light.woff2')
const Hoves400 = require('./fonts/hoves/TTHoves-Regular.woff2')
const Hoves500 = require('./fonts/hoves/TTHoves-Medium.woff2')
const Hoves600 = require('./fonts/hoves/TTHoves-DemiBold.woff2')
const Hoves700 = require('./fonts/hoves/TTHoves-Bold.woff2')
const Hoves800 = require('./fonts/hoves/TTHoves-ExtraBold.woff2')
const Hoves900 = require('./fonts/hoves/TTHoves-Black.woff2')

const display = 'swap'

export default createGlobalStyle`
    @font-face { font-family: 'Hoves'; src: url(${Hoves100}) format('woff2'); font-weight: 100; font-style: normal; font-display: ${display}; }
    @font-face { font-family: 'Hoves'; src: url(${Hoves200}) format('woff2'); font-weight: 200; font-style: normal; font-display: ${display}; }
    @font-face { font-family: 'Hoves'; src: url(${Hoves300}) format('woff2'); font-weight: 300; font-style: normal; font-display: ${display}; }
    @font-face { font-family: 'Hoves'; src: url(${Hoves400}) format('woff2'); font-weight: 400; font-style: normal; font-display: ${display}; }
    @font-face { font-family: 'Hoves'; src: url(${Hoves500}) format('woff2'); font-weight: 500; font-style: normal; font-display: ${display}; }
    @font-face { font-family: 'Hoves'; src: url(${Hoves600}) format('woff2'); font-weight: 600; font-style: normal; font-display: ${display}; }
    @font-face { font-family: 'Hoves'; src: url(${Hoves700}) format('woff2'); font-weight: 700; font-style: normal; font-display: ${display}; }
    @font-face { font-family: 'Hoves'; src: url(${Hoves800}) format('woff2'); font-weight: 800; font-style: normal; font-display: ${display}; }
    @font-face { font-family: 'Hoves'; src: url(${Hoves900}) format('woff2'); font-weight: 900; font-style: normal; font-display: ${display}; }
`
