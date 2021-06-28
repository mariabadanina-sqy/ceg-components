import * as React from 'react';
import { Component as CoreComponent, mapLibrary } from '@adapters';

import AnchorWrapper from './AnchorWrapper';
import Modal from './Modal';
import Portal from './Portal';
import Icon from './Icon';
import CloudinaryBackgroundImage from './CloudinaryBackgroundImage';

const EXPORTS = {};

const components = mapLibrary({
  ...EXPORTS,
});

const Component = (props) => (
  <CoreComponent libComponents={components} {...props} />
);

export default EXPORTS;

export {
  Component,
  AnchorWrapper,
  Modal,
  Portal,
  Icon,
  CloudinaryBackgroundImage,
};
