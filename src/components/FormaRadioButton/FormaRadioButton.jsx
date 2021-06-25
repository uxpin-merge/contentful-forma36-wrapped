import * as PropTypes from 'prop-types';
import * as React from 'react';
import { RadioButton as RadioButtonM } from '@contentful/forma-36-react-components';

/**
 * @uxpinwrappers
 * NonResizableWrapper
 */
const RadioButton = (props) => {
  const { uxpinRef, ...other } = props;
  return (
    <div style={{width: "fit-content"}} ref={uxpinRef}>
    <RadioButtonM  {...other} /></div>
  )
};


RadioButton.propTypes = {
  name: PropTypes.string,
  labelText: PropTypes.string,
  value: PropTypes.string,
  /**
   * @uxpinbind onChange 0.target.checked
   */
  checked: PropTypes.bool,
  required: PropTypes.bool,
  indeterminate: PropTypes.bool,
  disabled: PropTypes.bool,
  willBlurOnEsc: PropTypes.bool,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,

};

export { RadioButton as default };
