import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Checkbox as CheckboxM } from '@contentful/forma-36-react-components';


const Checkbox = (props) => (
  <CheckboxM {...props} />
);


Checkbox.propTypes = {
  required: PropTypes.bool,

  labelText: PropTypes.string,

  name: PropTypes.string,

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

export { Checkbox as default };
