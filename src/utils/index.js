import { SOCIAL_ICONS_MAP } from '@constants/socialShareLinks'

import Ajv from 'ajv'
import * as schemaValidationFields from '@schemas/validations'
import fieldsSchemaValidations from '@schemas/validations/Fields'

const ajv = new Ajv({ allErrors: true, allowUnionTypes: true })

// Schemas
function schemaError(schema, field, validate) {
  console.error(
    `\---------------
ERROR in schema validation:
schema -> ${schema.component || schema.displayName}
type -> ${field.type}
key -> ${field.key}
${ajv.errorsText(validate.errors)}
\---------------`
  )
}

function validateField(field, schemaValidation, schema) {
  if (field?.type) {
    const validate = ajv.compile(schemaValidation)
    const isValid = validate(field)
    if (!isValid) schemaError(schema, field, validate)
  }
}

function createSchema(schema) {
  const contentFields = getTabFields({ title: 'content', schema })
  const configFields = getTabFields({ title: 'config', schema })

  const allFields = [...contentFields, configFields]

  // Validate fields
  allFields.forEach((field) => {
    // Common field props
    validateField(field, fieldsSchemaValidations, schema)
    // Unique field props
    validateField(field, schemaValidationFields[field?.type], schema)
  })

  return schema

  // const contentFieldsParse = contentFields.map(field => addMissingTitle(field))
  // const configFieldsParsed = configFields.map(field => addMissingTitle(field))

  // return {
  //   ...schema,
  //   configTabs: [
  //     { title: "content", fields: contentFieldsParse },
  //     { title: "config", fields: configFieldsParsed },
  //   ],
  // }
}

const isBrowser = typeof window !== 'undefined'

const getToken = () => {
  const appInfo = isBrowser && JSON.parse(localStorage.getItem('persist:app'))

  if (!appInfo) return null

  let { token } = appInfo
  token = JSON.parse(token)
  const authorization = { Authorization: `bearer ${token}` }

  return authorization
}

const getSiteID = () => {
  const appInfo =
    typeof isBrowser && JSON.parse(localStorage.getItem('persist:root'))

  if (!appInfo) return 1

  let { sites } = appInfo
  sites = JSON.parse(sites)
  const {
    currentSiteInfo: { id },
  } = sites
  return id
}

const getLang = () => isBrowser && parseInt(localStorage.getItem('langID'))

function parseSocials(socialsObject, map = SOCIAL_ICONS_MAP) {
  if (!!socialsObject) {
    let socialsMapped = []
    Object.keys(socialsObject).map((key) => {
      if (map[key]) {
        return (
          socialsObject[key].length &&
          socialsMapped.push({ icon: map[key], url: socialsObject[key] })
        )
      }
    })
    return socialsMapped
  }
  return null
}

const getSchemaDefaults = (type, name) => {
  const path =
    type === 'templates'
      ? 'templates/'
      : type === 'components'
      ? 'components/'
      : 'modules/'
  const schema = require(`../models/schemas/${path}${name}`)
  return schema.default.default
}

function subThemeIsEmpty(obj) {
  return !Object.keys(obj).length
}

function addBreakpointAlias(theme) {
  theme.mediaquery?.mediaqueries.forEach((mq) => {
    theme.breakpoints[mq.label] = mq.minWidth
  })
  return { ...theme }
}

function getTabFields({ title, schema }) {
  return schema.configTabs.find((tab) => tab.title === title)?.fields
}

function addMissingTitle(field) {
  return { ...field, title: field.title || field.key }
}

export {
  addBreakpointAlias,
  createSchema,
  getLang,
  getSchemaDefaults,
  getSiteID,
  getToken,
  parseSocials,
  subThemeIsEmpty,
}
