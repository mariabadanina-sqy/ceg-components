import * as React from 'react';
import { ThemeProvider, ThemeContext } from 'styled-components';

import {
  PageContext,
  PageProvider,
  PageConsumer,
  SiteContext,
  SiteProvider as CoreSiteProvider,
  SiteConsumer,
} from '@griddo/core';

import {
  createGlobalTheme,
  createSiteTheme,
  createSubThemes,
  GlobalCSS,
} from '@themes/utils';

import { Reset, Normalize } from './elements';

// import "./fonts.css"

import Fonts from '../../static/font-face.js';

const SiteProvider = (props) => {
  const globalTheme = createGlobalTheme();
  // Breakpoints Alias.
  // Ahora es posible también acceder a los breakpoints de las props mediante un
  // objeto:
  // <Box width={{ s: "100px", xl: "300px" }}
  globalTheme.mediaquery.mediaqueries.forEach((mq) => {
    globalTheme.breakpoints[mq.label] = mq.minWidth;
  });

  const { theme, children } = props;

  const siteTheme = {
    ...createSiteTheme({ theme: theme }),
    subthemes: {
      ...createSubThemes({ theme: theme }),
    },
  };

  // If siteTheme has mediaqueries...
  if (siteTheme.mediaquery) {
    siteTheme.mediaquery.mediaqueries.forEach((mq) => {
      siteTheme.breakpoints[mq.label] = mq.minWidth;
    });
  }

  return (
    <CoreSiteProvider {...props}>
      {/* Global Theme: breakpoints, fonts, spacing, etc.. */}
      {/* Site Theme: colors + subthemes (colors..) */}
      <ThemeProvider theme={{ ...globalTheme, ...siteTheme }}>
        <Reset />
        <Normalize />
        <GlobalCSS />
        <Fonts />
        {children}
      </ThemeProvider>
    </CoreSiteProvider>
  );
};

export {
  PageContext,
  PageProvider,
  PageConsumer,
  SiteContext,
  SiteProvider,
  SiteConsumer,
  ThemeProvider,
  ThemeContext,
};
