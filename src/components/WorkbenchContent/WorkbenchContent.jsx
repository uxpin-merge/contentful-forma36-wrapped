import * as PropTypes from 'prop-types';
import * as React from 'react';
import { WorkbenchContent as WorkbenchContentM } from '@contentful/forma-36-react-components';

const WorkbenchContent = (props) => (
  
  <WorkbenchContentM {...props} >
    {props.children}
  </WorkbenchContentM>
);

WorkbenchContent.propTypes = {
  /**
  * Type of content
  */
  type: PropTypes.oneOf(["default", "text", "full"]),

 /**
  * An ID used for testing purposes applied as a data attribute (data-test-id)
  * @uxpinignoreprop
  */
  children: PropTypes.node,

  /**
  * @uxpinignoreprop
  */
  className: PropTypes.string,

  /**
  * @uxpinignoreprop
  */
  testId: PropTypes.string


};


WorkbenchContent.defaultProps = {

};

export { WorkbenchContent as default };
