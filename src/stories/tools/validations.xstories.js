import * as React from 'react';
import { validateFields, validateBaseSchema } from './utils';

import './styles.css';

// DATA
import * as _moduleSchemas from '../../models/schemas/modules';
import * as _componentSchemas from '../../models/schemas/components';
import * as _templateSchemas from '../../models/schemas/templates';
import * as _pageSchemas from '../../models/schemas/pages';

// // SCHEMA VALIDATIONS
import * as schemaValidations from '../../models/schemas/validations';

const moduleSchemas = { ..._moduleSchemas.default };
const componentSchemas = { ..._componentSchemas.default };
const templateSchemas = { ..._templateSchemas.default };
const pageSchemas = { ..._pageSchemas.default };

const dataMap = [
  { type: 'Components', data: componentSchemas },
  { type: 'Modules', data: moduleSchemas },
  { type: 'Templates', data: templateSchemas },
  // { type: "Pages", data: pageSchemas },
];

// Base files
let baseFilesValidations = [];
dataMap.forEach(({ type, data }) => {
  baseFilesValidations.push(
    validateBaseSchema({
      data,
      schemaValidation: schemaValidations[type],
    })
  );
});

// Fields
const fieldsValidations = validateFields({
  data: {
    ...moduleSchemas,
    ...componentSchemas,
    ...templateSchemas,
    // ...pageSchemas,
  },
  schemaValidations: schemaValidations,
});

const ErrorDisplay = ({ e, type }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="error-display">
      <p className="error-display__title">
        {e.schemaFile} {e.schema.type && `@ ${e.schema.type}`}
        {e.schema.key ? ` ( ${e.schema.key} )` : `( header )`}
      </p>
      <div className="error-display__subtitle">
        {e.error.split(',').map((k, idx) => (
          <div key={idx}>{k}</div>
        ))}
      </div>
      {type === 'field' && (
        <button
          className="error-display__button"
          onClick={() => setOpen(!open)}
        >
          Show schema
        </button>
      )}
      <pre
        className={`error-display__output error-display__output--${
          open ? 'open' : 'close'
        }`}
      >
        {JSON.stringify(e, null, 2)}
      </pre>
    </div>
  );
};

export const Validations = () => {
  const error01 = fieldsValidations.filter(Boolean);
  const error02 = baseFilesValidations.flat().filter(Boolean);

  return (
    <div>
      {/* <pre>{JSON.stringify(error01, null, 2)}</pre> */}

      {error01.map((e, idx) => {
        return <ErrorDisplay key={idx} e={e} type="field" />;
      })}

      {error02.map((e, idx) => {
        return <ErrorDisplay key={idx} e={e} type="base" />;
      })}

      {error01.length === 0 && error02.length === 0 && (
        <div className="error-display__ok">🐾</div>
      )}

      {/* <pre>{JSON.stringify(error02, null, 2)}</pre> */}
    </div>
  );
};

export default {
  title: 'Testing/JsonSchema',
  parameters: {
    options: {
      showPanel: false,
    },
  },
};
