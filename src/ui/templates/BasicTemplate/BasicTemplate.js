import * as React from 'react';
import { ModuleFromList } from '@modules';
import MasterTemplate from '../MasterTemplate';

const BasicTemplate = ({ heroSection, mainSection }) => {
  return (
    <MasterTemplate>
      {heroSection.modules &&
        heroSection.modules.map((module) => (
          <ModuleFromList {...module} key={module.editorID} />
        ))}

      {mainSection.modules &&
        mainSection.modules.map((module) => (
          <ModuleFromList {...module} key={module.editorID} />
        ))}
    </MasterTemplate>
  );
};

export default BasicTemplate;
