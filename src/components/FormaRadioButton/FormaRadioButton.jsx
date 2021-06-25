import * as PropTypes from 'prop-types';
import * as React from 'react';
import { RadioButton as RadioButtonM } from '@contentful/forma-36-react-components';


const RadioButton = (props) => (
  <RadioButtonM {...props} />
);


RadioButton.propTypes = {
  name: PropTypes.string,

  required: PropTypes.bool,

  labelText: PropTypes.string,

  /**
   * @uxpinbind onChange 0.target.checked
   */
  checked: PropTypes.bool,

  onChange: PropTypes.func,

  onBlur: PropTypes.func,

  onFocus: PropTypes.func,

  value: PropTypes.string,

  disabled: PropTypes.bool,

  willBlurOnEsc: PropTypes.bool,

  indeterminate: PropTypes.bool,
};

export { RadioButton as default };
