const path = require('path');
const fs = require('fs');
const themes = getAliasPath('@themes/*');
const { parseTheme, mixSubtheme } = require('@sqymagma/theme');
const { themes: siteThemes } = require('../src/griddo.json');
const globalThemeObject = require(`${themes}/globaltheme.js`);

let themeFileObject = {
  globalTheme: parseTheme(globalThemeObject),
};

siteThemes.forEach((site) => {
  // Genera el theme principal de la web (siteTheme)
  const siteThemeObject = mixSubtheme(
    globalThemeObject,
    require(`${themes}/${site.id}/theme.js`),
    true
  );

  // Genera los subthemes (subThemes)
  let subThemeObjects = {};
  site.subthemes.forEach((subtheme) => {
    if (fs.existsSync(`${themes}/${site.id}/${subtheme}.js`)) {
      const newSubTheme = mixSubtheme(
        siteThemeObject,
        require(`${themes}/${site.id}/${subtheme}.js`),
        true
      );

      subThemeObjects[subtheme] = newSubTheme;
    }
  });

  themeFileObject[site.id] = {
    siteTheme: siteThemeObject,
    subThemes: subThemeObjects,
  };
});

fs.writeFileSync(
  `${themes}/.all-themes.json`,
  JSON.stringify(themeFileObject, null, 2)
);

function getAliasPath(key) {
  const alias = require('../jsconfig.json');
  return path.resolve(
    __dirname,
    `../${alias.compilerOptions.paths[key][0].split('/*')[0]}`
  );
}
