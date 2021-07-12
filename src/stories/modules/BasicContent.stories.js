import * as React from 'react'
import BasicContent from '@modules/BasicContent'
import { getSchemaDefaults } from '@utils'

const defaults = getSchemaDefaults('modules', 'BasicContent')

export const SchemaDefaults = () => <BasicContent {...defaults} />

export const HolaATodos = () => (
  <BasicContent
    {...defaults}
    image={{
      alt: 'Alt',
      veil: 50,
      url: { linkToURL: '//www.secuoyas.com' },
      file: { publicId: 'griddo-components-starter/griddo-01' },
    }}
  />
)

export default {
  title: 'Modules/BasicContent',
  parameters: {
    options: {
      showPanel: false,
    },
  },
}
