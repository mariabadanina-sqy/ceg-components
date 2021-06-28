import { useEffect, useState } from 'react';
import { usePage, useSite } from '@griddo/core';
import { getToken, getSiteID, getLang } from '@utils';

const getOptions = () => {
  const lang = getLang();

  return {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      'Content-Type': 'application/json',
      lang,
      ...getToken(),
    },
  };
};

const useSitemap = () => {
  const [state, setState] = useState();
  const [loading, setLoading] = useState(true);
  const { apiUrl, header, footer, fullPath } = usePage();
  const { siteMetadata } = useSite();

  useEffect(() => {
    getSitemap();
  }, []);

  const getSitemap = async () => {
    const sitemap = {};

    sitemap['topMenu'] = [
      {
        label: siteMetadata?.title,
        children: header.topMenu?.elements,
        url: {
          linkToURL: !!fullPath && `${fullPath.domainUrl}${fullPath.site}`,
        },
      },
    ];

    if (!siteMetadata) {
      const siteID = getSiteID();
      const siteUrl = `${apiUrl}/site/${siteID}`;
      const siteRes = await fetch(siteUrl, getOptions());
      const { name } = await siteRes.json();
      sitemap['topMenu'][0].label = name;
    }

    sitemap['mainMenu'] = header.mainMenu?.elements;

    const footerElements = footer.legalMenu?.elements;
    sitemap['footerMenu'] = [{ label: null, children: footerElements }];

    setState(sitemap);
    setLoading(false);
  };

  return [state, loading];
};

export { useSitemap };
