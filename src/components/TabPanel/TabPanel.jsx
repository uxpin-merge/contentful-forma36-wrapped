import * as PropTypes from 'prop-types';
import * as React from 'react';
import { TabPanel as TabPanelM } from '@contentful/forma-36-react-components';

const TabPanel = (props) => (
  <TabPanelM {...props} />
);

TabPanel.propTypes = {

 /**
  * The content of TabPanel. Components can be nested
  * @uxpinpropname Content
  */
  children: PropTypes.node,
 /**
  * @uxpinignoreprop
  */
  componentType:PropTypes.string,
};


TabPanel.defaultProps = {
  componentType:"TabPanel",
};

export { TabPanel as default };
