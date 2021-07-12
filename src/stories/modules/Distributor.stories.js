import * as React from 'react'
import Distributor from '@modules/Distributor'
import { getSchemaDefaults } from '@utils'

const defaults = getSchemaDefaults('module', 'Distributor')

const queriedItems = Array(3)
  .fill(0)
  .map((x) => ({
    content: {
      title: 'Distributor item title',
      text: 'Content distributor text',
      href: 'https://www.secuoyas.com',
    },
  }))

export const Base = () => (
  <Distributor {...defaults} queriedItems={queriedItems} />
)

export default {
  title: 'Modules/Distributor',
  parameters: {
    options: {
      showPanel: false,
    },
  },
}
