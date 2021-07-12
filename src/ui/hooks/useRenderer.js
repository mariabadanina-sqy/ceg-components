import { useContext } from 'react'
import { SiteContext } from '@contexts'

function useRenderer() {
  const { renderer } = useContext(SiteContext)
  return {
    isSSG: renderer === 'gatsby',
    isEditor: renderer === 'editor',
    isStorybook: renderer === 'storybook',
  }
}

export { useRenderer }
