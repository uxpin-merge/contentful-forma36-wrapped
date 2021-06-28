import * as PropTypes from 'prop-types';
import * as React from 'react';
import { RadioButtonField as RadioButtonFieldM } from '@contentful/forma-36-react-components';

const RadioButtonField = (props) => (
  <RadioButtonFieldM {...props} />
);


RadioButtonField.propTypes = {
  labelText: PropTypes.string,
  validationMessage: PropTypes.string,
  helpText: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  required: PropTypes.bool,
  checked: PropTypes.bool,
  labelIsLight: PropTypes.bool,
  onChange: PropTypes.func,
};

export { RadioButtonField as default };
