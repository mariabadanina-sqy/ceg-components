import { useContext } from 'react';
import { SiteContext } from '@contexts';
import { createSubTheme, createSiteTheme } from '@themes/utils';
import { ThemeContext } from 'styled-components';

// Breakpoint Alias
// Permite acceder a las propiedades rensponsive mediante objetos
// <Box width={{ s:"100px", xl:"300px"}} />
function addBreakpointAlias(theme) {
  theme.mediaquery?.mediaqueries.forEach((mq) => {
    theme.breakpoints[mq.label] = mq.minWidth;
  });
  return { ...theme };
}

function useTheme() {
  const value = useContext(SiteContext);
  if (!value) {
    console.warn('Griddo: You forgot to put <PageProvider>.');
    return {};
  } else {
    const { theme } = value;
    return createSiteTheme({ theme });
  }
}

function useSubTheme(name) {
  const { theme } = useContext(SiteContext);
  return createSubTheme({ theme, name }) || {};
}

function useStyledTheme() {
  const theme = useContext(ThemeContext);
  return theme || {};
}

function useStyledSubTheme({ name }) {
  try {
    return addBreakpointAlias(useContext(ThemeContext).subthemes[name]) || {};
  } catch (e) {
    return {};
  }
}

export { useTheme, useSubTheme, useStyledTheme, useStyledSubTheme };
