import moduleSchemas from './modules'
import templateSchemas from './templates'
import componentSchemas from './components'
import pageSchema from './pages'

const _schemas = {
  ...moduleSchemas,
  ...templateSchemas,
  ...componentSchemas,
  ...pageSchema,
}

export {
  _schemas,
  moduleSchemas,
  templateSchemas,
  componentSchemas,
  pageSchema,
}
