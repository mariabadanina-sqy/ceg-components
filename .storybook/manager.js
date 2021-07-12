import { addons } from '@storybook/addons'
import theme from './theme'

addons.setConfig({
  theme: theme,
  /**
   * display panel that shows addon configurations
   * @type {Boolean}
   */
  showPanel: false,
})
