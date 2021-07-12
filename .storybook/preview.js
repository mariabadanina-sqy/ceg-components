import * as React from 'react'
import { SiteProvider, PageProvider } from '@adapters'
import { createGlobalTheme, createSubThemes } from '@themes/utils'
import { createGlobalStyle } from 'styled-components'
import { ThemeProvider } from '@contexts'
import { Box } from '@sqymagma/elements'
import cloudinaryDefaults from '@constants/cloudinary/defaults'
import cloudinaryCloudName from '@constants/cloudinary/cloud-name'
import translations from '@translations'
import { clientId, themes } from '../src/griddo.json'

const Global = createGlobalStyle`
  body {
    margin:0!important;
    padding:0!important;
  }
`

const withThemeProvider = (Story, context) => {
  return (
    <StoryWrapper {...context}>
      <Story {...context} />
    </StoryWrapper>
  )
}

const StoryWrapper = ({ children, globals }) => {
  const { subthemeName, language } = globals
  const subthemes = createSubThemes({ theme: themes[0].id })
  const subtheme = subthemes[subthemeName]

  return (
    <SiteProvider
      theme={themes[0].id}
      cloudinaryCloudName={cloudinaryCloudName}
      cloudinaryDefaults={cloudinaryDefaults}
      linkComponent={Box}
      googleMapAPIKey="AIzaSyBVJ_qu0_-4EzAVuLVoP93f7wLlXHzVVPQ"
      siteLangs={[
        { id: 2, locale: 'es_ES' },
        { id: 4, locale: 'en_GB' },
      ]}
      translations={translations}
      socials={{
        flicker: 'https:/www.flicker.com',
        instagram: 'https://www.instagram.com',
        linkedIn: 'https://www.linkedin.com',
        facebook: '',
        twitter: 'https://www.twitter.com',
        youTube: 'https://www.youtube.com',
        newsletter: 'https://www.newsletter.com',
        tiktok: '',
        snapchat: 'https://www.snapchat.com',
      }}
      siteMetadata={{
        title: 'Título del site',
      }}
      renderer="storybook"
      buildMode="release/develop"
    >
      <ThemeProvider theme={subtheme || {}}>
        <Global />
        <PageProvider
          title="Title from storybook PageProvider"
          languageId={language}
          breadcrumb={[
            {
              label: 'Parent 01',
              fullPath: 'https://thesaurus-cx-dev.secuoyas.io/tazboofar',
            },
            {
              label: 'Parent 02',
              fullPath:
                'https://thesaurus-cx-dev.secuoyas.io/tazboofar/child-page',
            },
            {
              label: 'Parent 03',
              fullPath:
                'https://thesaurus-cx-dev.secuoyas.io/tazboofar/child-page',
            },
          ]}
          fullPath={{ domainUrl: '/domain', site: '/site' }}
          header={{
            mainMenu: {
              id: 20,
              site: 4,
              language: 1,
              name: 'MainMenu',
              title: 'Main Menu',
              component: 'MenuContainer',
              type: null,
              layout: null,
              elements: [
                {
                  id: 1008,
                  label: 'Lorem ipsum dolor sit amet',
                  url: {
                    href: null,
                    linkTo: 55,
                    newTab: null,
                    noFollow: null,
                    linkToURL: '//cx.dev.griddo.io/pre-ie-edu/datapacks-bug',
                  },
                  component: 'Menu',
                  auxText: '',
                  children: [],
                },
                {
                  id: 1009,
                  label: 'other',
                  url: {
                    href: null,
                    linkTo: 61,
                    newTab: null,
                    noFollow: null,
                    linkToURL:
                      '//cx.dev.griddo.io/pre-ie-edu/datapacks-bug/new-pagefsd-fdsfds',
                  },
                  component: 'Menu',
                  auxText: '',
                  children: [],
                },
                {
                  id: 1010,
                  label: 'more',
                  url: {
                    href: null,
                    linkTo: 54,
                    newTab: null,
                    noFollow: null,
                    linkToURL:
                      '//cx.dev.griddo.io/pre-ie-edu/datapacks-bug/page-1/page-2',
                  },
                  component: 'Menu',
                  auxText: '',
                  children: [
                    {
                      id: 1011,
                      label: 'than',
                      url: {
                        href: null,
                        linkTo: 60,
                        newTab: null,
                        noFollow: null,
                        linkToURL:
                          '//cx.dev.griddo.io/pre-ie-edu/datapacks-bug/new-page',
                      },
                      component: 'Menu',
                      auxText: '',
                      children: [
                        {
                          id: 1012,
                          label: 'extra',
                          url: {
                            href: null,
                            linkTo: 56,
                            newTab: null,
                            noFollow: null,
                            linkToURL:
                              '//cx.dev.griddo.io/pre-ie-edu/datapacks-bug/videos',
                          },
                          component: 'Menu',
                          auxText: '',
                          children: [],
                        },
                      ],
                    },
                  ],
                },
                {
                  id: 1013,
                  label: 'suppa',
                  url: {
                    href: null,
                    linkTo: 53,
                    newTab: null,
                    noFollow: null,
                    linkToURL:
                      '//cx.dev.griddo.io/pre-ie-edu/datapacks-bug/page-1',
                  },
                  component: 'Menu',
                  auxText: '',
                  children: [
                    {
                      id: 1014,
                      label: 'nuew',
                      url: null,
                      component: 'Menu',
                      auxText: '',
                      children: [],
                    },
                  ],
                },
                {
                  id: 1015,
                  label: 'Externo',
                  url: {
                    href: 'https://secuoyas.com/en/',
                    linkTo: null,
                    newTab: null,
                    noFollow: true,
                  },
                  component: 'Menu',
                  auxText: 'Enlace externo',
                  children: [],
                },
              ],
            },
            topMenu: {
              id: 19,
              site: 4,
              language: 1,
              name: 'TopMenu',
              title: 'Top Menu',
              component: 'MenuContainer',
              type: null,
              layout: null,
              elements: [
                {
                  id: 1096,
                  label: 'top1',
                  url: {
                    href: null,
                    linkTo: 55,
                    newTab: null,
                    noFollow: null,
                    linkToURL: '//cx.dev.griddo.io/pre-ie-edu/datapacks-bug',
                  },
                  component: 'Menu',
                  auxText: 'top1',
                  children: [],
                },
                {
                  id: 1097,
                  label: 'top2',
                  url: {
                    href: null,
                    linkTo: 65,
                    newTab: null,
                    noFollow: null,
                    linkToURL:
                      '//cx.dev.griddo.io/pre-ie-edu/datapacks-bug/featured-audio-visual',
                  },
                  component: 'Menu',
                  auxText: 'top2',
                  children: [],
                },
              ],
            },
          }}
          footer={{
            id: 21,
            site: 4,
            language: 1,
            name: 'FooterMenu',
            title: 'Footer Menu',
            component: 'MenuContainer',
            type: null,
            layout: null,
            legalMenu: {
              elements: [
                {
                  id: 1102,
                  label: 'footer 1',
                  url: {
                    href: null,
                    linkTo: 55,
                    newTab: null,
                    noFollow: null,
                    linkToURL: '//cx.dev.griddo.io/pre-ie-edu/datapacks-bug',
                  },
                  component: 'Menu',
                  auxText: 'footer 1',
                  children: [],
                },
                {
                  id: 1103,
                  label: 'footer 2',
                  url: {
                    href: null,
                    linkTo: 63,
                    newTab: null,
                    noFollow: null,
                    linkToURL:
                      '//cx.dev.griddo.io/pre-ie-edu/datapacks-bug/nueva-slider',
                  },
                  component: 'Menu',
                  auxText: 'footer 2',
                  children: [],
                },
              ],
            },
          }}
        >
          {children}
        </PageProvider>
      </ThemeProvider>
    </SiteProvider>
  )
}

export const decorators = [withThemeProvider]

export const globalTypes = {
  subthemeName: {
    name: 'Theme',
    description: 'Subthemes',
    defaultValue: themes[0].subthemes[0],
    toolbar: {
      icon: 'switchalt',
      items: themes[0].subthemes,
    },
  },

  language: {
    name: 'Language',
    description: 'Languages',
    defaultValue: 4,
    toolbar: {
      icon: 'globe',
      items: [
        { value: 2, right: '🇪🇸', title: 'Spanish' },
        { value: 4, right: '🇺🇸', title: 'English' },
      ],
    },
  },
}

// Create a <div id="modal" /> to attach react portal
if (document.getElementById('modal') === null) {
  const modalRoot = document.createElement('div')
  modalRoot.setAttribute('id', 'modal')
  document.body.append(modalRoot)
}
const body = document.body
body.id = `griddo@${clientId}`

//order: ["Start here", ["Cover", "Welcome"], "Core", "Components", "Playground"],

export const parameters = {
  // Sort stories
  options: {
    showPanel: false,
    storySort: {
      order: ['Start here', 'Elements', 'Components', 'Modules', 'Templates'],
    },
  },

  previewTabs: {
    'storybook/docs/panel': {
      hidden: true,
    },
  },
  actions: { disable: true },
}
