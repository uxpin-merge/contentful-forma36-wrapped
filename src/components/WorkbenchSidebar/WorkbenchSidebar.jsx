import * as PropTypes from 'prop-types';
import * as React from 'react';
import { WorkbenchSidebar as WorkbenchSidebartM } from '@contentful/forma-36-react-components';

const WorkbenchSidebar = (props) => (
  
  <WorkbenchSidebartM {...props} >
    {props.children}
  </WorkbenchSidebartM>
);

WorkbenchSidebar.propTypes = {
  /**
  * Type of content
  */
  position: PropTypes.oneOf(["left", "right"]),

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


WorkbenchSidebar.defaultProps = {

};

export { WorkbenchSidebar as default };
