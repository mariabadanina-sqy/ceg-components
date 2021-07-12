import * as React from 'react'
import { getSchemaDefaults } from '@utils'
import { Sitemap } from '@templates'

const defaults = getSchemaDefaults('templates', 'Sitemap')

export const Base = () => <Sitemap {...defaults} />

export default {
  title: 'Templates/SiteMap',
  parameters: {
    options: {
      showPanel: false,
    },
  },
}
