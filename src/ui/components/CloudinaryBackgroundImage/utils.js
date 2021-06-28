const removeUnit = (unit) =>
  unit
    ? unit
        .toString()
        .split(/cm|mm|in|px|pt|pc|em|ex|ch|rem|vw|vh|vmin|vmax|%/)[0]
    : '';

const cleanCloudinaryURI = (URI) =>
  URI.split(/._null|._undefined|,{1,}|._,|._$|undefined|null/)
    .filter(Boolean)
    .join(',');

const getURIWithParams = ({ root, imageConfig }) => {
  const crop = imageConfig.crop ? `c_${imageConfig.crop}` : ``;
  const quality = imageConfig.quality ? `q_${imageConfig.quality}` : ``;
  const gravity = imageConfig.gravity ? `g_${imageConfig.gravity}` : ``;
  const format = imageConfig.format ? `f_${imageConfig.format}` : ``;
  const width = imageConfig.width ? `w_${removeUnit(imageConfig.width)}` : ``;
  const height = imageConfig.height
    ? `h_${removeUnit(imageConfig.height)}`
    : ``;
  const aspectRatio = imageConfig.ar ? `ar_${imageConfig.ar}` : ``;

  // Clean the URI to avoid orphans query params: w_null, w_, etc..
  const queryParamsURL = cleanCloudinaryURI(
    `${crop},${gravity},${format},${width},${quality},${height},${aspectRatio}`
  );

  return `${root}/${queryParamsURL}`;
};

export { getURIWithParams };
