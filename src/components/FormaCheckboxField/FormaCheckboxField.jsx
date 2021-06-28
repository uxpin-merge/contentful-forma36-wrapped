import * as PropTypes from 'prop-types';
import * as React from 'react';
import { CheckboxField as CheckboxFieldM } from '@contentful/forma-36-react-components';


const CheckboxField = (props) => (
  <CheckboxFieldM {...props} />
);


CheckboxField.propTypes = {

  helpText: PropTypes.string,

  labelText: PropTypes.string,

  name: PropTypes.string,

  onChange: PropTypes.func,

  validationMessage: PropTypes.string,

  value: PropTypes.string,

  disabled: PropTypes.bool,

  required: PropTypes.bool,

  checked: PropTypes.bool,

  labelIsLight: PropTypes.bool,
};

export { CheckboxField as default };
