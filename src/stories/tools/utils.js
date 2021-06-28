import Ajv from 'ajv';
const ajv = new Ajv({ allErrors: true, allowUnionTypes: true });

function validateField({ data, file, schemaValidations }) {
  const validate = ajv.compile(schemaValidations[data.type]);
  const valid = validate(data);
  if (!valid) {
    console.log('');
    console.log('JSON Schema Validations errors:');
    console.log('@' + file + ': ' + ajv.errorsText(validate.errors));
    // process.exit(1)
    return {
      schemaFile: file,
      error: ajv.errorsText(validate.errors),
      schema: data,
    };
  } else {
    return false;
  }
}

function getAllFields(schema) {
  const contentTab =
    schema?.configTabs?.find((tab) => tab.title === 'content')?.fields || [];
  const configTab =
    schema?.configTabs?.find((tab) => tab.title === 'config')?.fields || [];
  return [...contentTab, ...configTab];
}

function validateBase({ data, file, schemaValidation }) {
  const validate = ajv.compile(schemaValidation);
  const valid = validate(data);

  if (!valid) {
    console.log('');
    console.log('JSON Schema Validations errors:');
    console.log('@' + file + ': ' + ajv.errorsText(validate.errors));
    console.log('');
    // process.exit(1)
    return {
      schemaFile: file,
      error: ajv.errorsText(validate.errors),
      schema: data,
    };
  } else {
    return false;
  }
}

function validateBaseSchema({ data, schemaValidation }) {
  let output = [];
  Object.keys(data).forEach((key) => {
    const json = data[key];
    output.push(
      validateBase({
        data: json,
        schemaValidation: schemaValidation,
        file: key,
      })
    );
  });
  return output;
}

function validateFields({ data, schemaValidations }) {
  let output = [];
  Object.keys(data).forEach((key) => {
    const schema = data[key];
    const allFields = getAllFields(schema);
    allFields.forEach((data) => {
      output.push(validateField({ data, file: key, schemaValidations }));
    });
  });

  return output;
}

export { validateField, getAllFields, validateBaseSchema, validateFields };
