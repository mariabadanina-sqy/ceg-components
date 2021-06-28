import dataPacksSchemas from './dataPacks';
import dataPacksCategoriesSchemas from './dataPacksCategories';

import structuredData from './structuredData';
import structuredDataTaxonomies from './structuredDataTaxonomies';

import languages from './languages';

const structuredDataSchemas = {
  ...structuredData,
  ...structuredDataTaxonomies,
};

export {
  dataPacksSchemas,
  dataPacksCategoriesSchemas,
  structuredDataSchemas,
  languages,
};
