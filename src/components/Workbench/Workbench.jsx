import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Workbench as WorkbenchM } from '@contentful/forma-36-react-components';



const Workbench = (props) => (
  <WorkbenchM {...props}>
    {props.children}
  </WorkbenchM>
);


Workbench.propTypes = {

  children: PropTypes.node,

  // headerTitle: Props.string,

};



Workbench.defaultProps = {

};

export { Workbench as default };
