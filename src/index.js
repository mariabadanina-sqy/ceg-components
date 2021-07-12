import components from '@components'
import modules from '@modules'
import * as templates from '@templates'

import { themes as allThemes } from './griddo.json'

import moduleCategories from '@constants/moduleCategories'
import cloudinaryDefaults from '@constants/cloudinary/defaults'

import translations from '@translations'

import {
  mapLibrary,
  Page,
  Preview,
  SiteProvider,
  PageProvider,
  ThemeProvider,
} from '@adapters'

import { parseTheme } from '@griddo/core'

import {
  componentSchemas,
  moduleSchemas,
  templateSchemas,
  pageSchema,
} from '@schemas'

import {
  dataPacksSchemas,
  dataPacksCategoriesSchemas,
  structuredDataSchemas,
  languages,
} from '@dataPacks'

const schemas = {
  page: pageSchema,
  all: {
    Page: pageSchema,
    ...componentSchemas,
    ...moduleSchemas,
  },
  modules: {
    ...moduleSchemas,
  },
  templates: {
    ...templateSchemas,
  },
  dataPacks: {
    ...dataPacksSchemas,
  },
  dataPacksCategories: {
    ...dataPacksCategoriesSchemas,
  },
  structuredData: {
    ...structuredDataSchemas,
  },
}

// COMPOSE THEMES
const themes = allThemes.map((theme) => ({
  label: theme.name,
  value: theme.id,
}))

const EXPORTS = {
  schemas,
  languages,
  moduleCategories,
  cloudinaryDefaults,
  templates,
  themes,
  translations,
  providers: {
    SiteProvider,
    PageProvider,
    ThemeProvider,
  },
  components: mapLibrary({ ...components, ...modules }),
  core: {
    parseTheme,
    Page,
    Preview,
  },
}

export default EXPORTS
