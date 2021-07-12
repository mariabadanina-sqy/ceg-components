import * as React from 'react'
import { ThemeProvider } from '@contexts'

import {
  Component,
  getComponent,
  Page,
  Preview,
  parseTheme,
  CloudinaryBackgroundImage,
  CloudinaryImage,
} from '@griddo/core'

import { useTheme, useStyledSubTheme } from '@hooks'
import { subThemeIsEmpty, addBreakpointAlias } from '@utils'

const getTheme = (theme, subTheme) => {
  const mainTheme = useTheme()
  return theme === 'default'
    ? addBreakpointAlias(mainTheme)
    : addBreakpointAlias(subTheme)
}

const getComponentConfig = (props) => {
  const { component, theme } = props

  const subTheme = useStyledSubTheme({
    name: theme,
  })
  const mappedTheme = getTheme(theme, subTheme)
  const hasSubTheme = !subThemeIsEmpty(subTheme)

  const mappedProps = {
    ...props,
    // Ponemos theme a null porque hace interferencia con styled components
    // A este nivel de componente no hace falta pasarle theme.
    theme: null,
    moduleTheme: theme,
  }

  return {
    mappedProps,
    mappedTheme,
    hasSubTheme,
  }
}

const withProviderComponent = (component) => {
  return (props) => {
    const { mappedProps, mappedTheme, hasSubTheme } = getComponentConfig(props)

    const mappedComponent = React.createElement(component, mappedProps)

    return hasSubTheme ? (
      <ThemeProvider theme={mappedTheme}>{mappedComponent}</ThemeProvider>
    ) : (
      mappedComponent
    )
  }
}

const mapLibrary = (lib) => {
  return Object.fromEntries(
    Object.entries(lib).map(([key, component]) => {
      return [key, withProviderComponent(component)]
    })
  )
}

export default getComponent

export {
  mapLibrary,
  Component,
  Page,
  Preview,
  parseTheme,
  CloudinaryBackgroundImage,
  CloudinaryImage,
}
