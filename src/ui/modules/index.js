import * as React from 'react'
import { mapLibrary, Component as CoreComponent } from '@adapters'

import AnchorWrapper from '@components/AnchorWrapper'

import BasicContent from './BasicContent'
import Footer from './Footer'
import Header from './Header'
import Distributor from './Distributor'

const EXPORTS = {
  BasicContent,
  Footer,
  Header,
  Distributor,
}

const modules = mapLibrary({
  ...EXPORTS,
})

const ModuleFromList = (props) => (
  <AnchorWrapper>
    <CoreComponent libComponents={modules} {...props} />
  </AnchorWrapper>
)

export default EXPORTS

export { ModuleFromList }
