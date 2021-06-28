import * as PropTypes from 'prop-types';
import * as React from 'react';
import { WorkbenchSidebar as WorkbenchSidebartM } from '@contentful/forma-36-react-components';
import { Flex as FlexM } from '@contentful/forma-36-react-components';

const WorkbenchSidebar = (props) => (
  <FlexM fullHeight={true}>
  <WorkbenchSidebartM position={props.position} >
    {props.children}xxxxx
  </WorkbenchSidebartM>
  </FlexM>
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
