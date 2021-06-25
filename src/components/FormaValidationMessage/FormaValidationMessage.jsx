import * as PropTypes from 'prop-types';
import * as React from 'react';
import { ValidationMessage as ValidationMessageM } from '@contentful/forma-36-react-components';

const ValidationMessage = (props) => (
  <ValidationMessageM {...props}>{props.validationMessageText}</ValidationMessageM>
);

ValidationMessage.propTypes = {
  /**
   * The validation message to be displayed
   * @uxpinpropname  Text
   * */
  validationMessageText: PropTypes.string,
};

ValidationMessage.defaultProps = {
  validationMessageText: "Name is a required field"
};

export { ValidationMessage as default };
