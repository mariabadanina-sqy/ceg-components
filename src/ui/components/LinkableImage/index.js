import React from 'react';
import { Link, CloudinaryImage } from '@griddo/core';

const LinkableImage = ({
  ratio,
  quality,
  responsive,
  url,
  file,
  alt,
  veil,
}) => {
  const Image = () => {
    return (
      <div
        css={`
          position: relative;
          &::after {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            content: '';
            display: block;
            background-color: rgba(0, 0, 0, ${veil / 100});
          }
        `}
      >
        {file?.publicId && (
          <CloudinaryImage
            publicId={file.publicId}
            ratio={ratio}
            quality={quality}
            alt={alt}
            responsive={responsive || []}
          />
        )}
      </div>
    );
  };

  return url ? (
    <Link url={url}>
      <Image />
    </Link>
  ) : (
    <Image />
  );
};

export default LinkableImage;
