import CLOUDINARY_CLOUD_NAME from './cloudinaryCloudName';

const cloudinaryDefaults = {
  domain: 'https://res.cloudinary.com',
  uploadFolder: 'image/upload',
  fallback404Image: 'dx-placeholders/fallback-404-image',
  quality: '50',
  crop: 'fill',
  gravity: 'faces:center',
  format: 'auto',
  loading: 'lazy',
  backgroundLazy: false,
  decoding: 'auto',
};

const CLOUDINARY_URL = `${cloudinaryDefaults.domain}/${CLOUDINARY_CLOUD_NAME}/${cloudinaryDefaults.uploadFolder}`;

const CLOUDINARY_BASE_URL = 'https://res.cloudinary.com';

const CLOUDINARY_UPLOAD_FOLDER = 'image/upload';

const CLOUDINARY_BASE_UPLOAD_URL = `${CLOUDINARY_BASE_URL}/${CLOUDINARY_CLOUD_NAME}/${CLOUDINARY_UPLOAD_FOLDER}`;

const FALL_BACK_IMAGE_SRC = `${CLOUDINARY_BASE_UPLOAD_URL}/c_fill,g_faces:center,f_auto,q_70,w_600/dx-placeholders/fallback-404-image`;

const THUMBNAIL_QUERY = `c_fill,f_auto,q_50,w_320,h_240`;

const DEFAULT_IMAGE_FIELD = {
  publicId: 'griddo-components-starter/griddo-01',
  // url: `${CLOUDINARY_URL}/${THUMBNAIL_QUERY}/griddo-components-starter/griddo-01`,
};

const DEFAULT_IMAGE_COMPONENT = {
  title: 'Oxygen',
  alt: 'A default placeholder image',
  veil: 50,
  file: { ...DEFAULT_IMAGE_FIELD },
};

export {
  THUMBNAIL_QUERY,
  DEFAULT_IMAGE_FIELD,
  DEFAULT_IMAGE_COMPONENT,
  CLOUDINARY_URL,
  CLOUDINARY_BASE_UPLOAD_URL,
  CLOUDINARY_BASE_URL,
  FALL_BACK_IMAGE_SRC,
  CLOUDINARY_CLOUD_NAME as cloudinaryCloudName,
  cloudinaryDefaults,
};
