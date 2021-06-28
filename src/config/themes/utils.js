// Estos métodos acceden al archivo: src/config/themes/.all-themes.json

import { createGlobalStyle } from 'styled-components';
import themes from './.all-themes';

function createGlobalTheme() {
  return themes.globalTheme;
}

function createSiteTheme({ theme }) {
  const userTheme = themes[theme];
  if (userTheme) {
    return userTheme.siteTheme;
  } else {
    console.warn(
      `Griddo: Theme ${theme} doesn't exist. Using a fallback theme.`
    );
    return themes['default-theme'].siteTheme;
  }
}

function createSubThemes({ theme }) {
  const userSubTheme = themes[theme];
  if (userSubTheme) {
    return userSubTheme.subThemes;
  } else {
    console.warn(
      `Griddo: Theme ${theme} doesn't exist. Can't create subthemes. Using a fallback theme.`
    );
    return themes['default-theme'].subThemes;
  }
}

function createSubTheme({ theme, name }) {
  return createSubThemes({ theme })[name];
}

const GlobalCSS = createGlobalStyle`
  html, body {
    line-height: ${(p) => p.theme.lineHeightBase};
    font-family: ${(p) => p.theme.fontFamily.primary};
    color: ${(p) => p.theme.colors.text01};
    background-color: ${(p) => p.theme.colors.primaryBackground};
    min-height: 100%;
    width: 100%;
    -webkit-font-smoothing: antialiased;
  }

  * { box-sizing: border-box; }
  a { color: inherit; text-decoration: none; }
  ${'' /* // Las clases griddo- son de thesaurus wysiwyg */}
  ${'' /* // Las clases fr- son de froala */}
  ${'' /* // La clase modal-image es para las imágenes de los modales */}
  #iesite img:not([class*="griddo-"]):not([class*="fr-"]):not([class*="modal-image"]) {
     display: block; width: 100%; max-width: 100%;
  }

  em { font-style: italic; }

  /* Reset H1 from normalize */
  h1 { margin:0; font-size: unset; }
`;

export {
  createGlobalTheme,
  createSiteTheme,
  createSubThemes,
  createSubTheme,
  GlobalCSS,
};
