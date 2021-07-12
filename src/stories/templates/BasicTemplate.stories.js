import * as React from 'react'
import { getSchemaDefaults } from '@utils'
import { BasicTemplate } from '@templates'

const defaults = getSchemaDefaults('templates', 'BasicTemplate')
const basicContentDefaults = getSchemaDefaults('modules', 'BasicContent')

export const SchemaDefault = () => <BasicTemplate {...defaults} />

export const TestingModule = () => (
  <>
    <BasicTemplate
      {...defaults}
      heroSection={{
        modules: [{ component: 'BasicContent', ...basicContentDefaults }],
      }}
      mainSection={{
        modules: [
          { component: 'BasicContent', ...basicContentDefaults },
          { component: 'BasicContent', ...basicContentDefaults },
          { component: 'BasicContent', ...basicContentDefaults },
        ],
      }}
    />
  </>
)

export default {
  title: 'Templates/BasicTemplate',
  parameters: {
    options: {
      showPanel: false,
    },
  },
}
