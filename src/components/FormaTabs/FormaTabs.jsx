import * as PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Tabs as TabsM } from '@contentful/forma-36-react-components';
import { Tab } from '@contentful/forma-36-react-components';
import { TabPanel } from '@contentful/forma-36-react-components';

import '@contentful/forma-36-react-components/dist/styles.css';

function Tabs(props) {

  React.useEffect(() => setSelected(props.selected), [props]);

  const [selected, setSelected] = useState(props.selected);

  //Create an array from children that are Tab
  const tabsArray = [];
  React.Children.map(props.children, (child, index) => (
    child.props.componentType === "Tab" ? tabsArray.push(child) : null));

 //Create an array from children that are Tab Panels
  const panelArray = [];
  React.Children.map(props.children, (child, index) => (
    child.props.componentType === "TabPanel" ? panelArray.push(child) : null));

  // console.log("tabs", tabsArray)
  // console.log("panels", panelArray)

  //Create the tabs
  let allTabs = tabsArray.map((item, i) => {
    return (
      <Tab {...item.props}
        id={i}
        key={`tabs-${i}`}
        selected={
          selected === i}
        onSelect={() => handleClick(i)}
      >
        {item.props.children}
      </Tab>
    );
  });

  //Create the tab panels
  let allPanels = panelArray.map((item, i) => {
    return (
      selected === i && <TabPanel id={i} key={`tabs-${i}`} {...item.props}>{item.props.children}</TabPanel>
    );
  });

  return (
  <>
    <TabsM {...props} >
      {allTabs}
    </TabsM>
    <div style={{marginTop: "1.5em"}}>
    {allPanels}
    </div>
  </>
  )

};

/* eslint-disable sort-keys */
Tabs.propTypes = {
   /**
  * @uxpinignoreprop
  */
  children: PropTypes.node,
  /**
  * The number of the selected tab starting with 0
  */
  selected: PropTypes.number,
  /**
  * Does iit have a divider
  */
  withDivider: PropTypes.bool,
  /**
  * The orientation of the divider if dividerOrientation = true
  */
  dividerOrientation: PropTypes.oneOf(["horizontal", "vertical"]),
  role: PropTypes.oneOf(["tablist", "navigation"]),
  onClick: PropTypes.func,
};
/* eslint-enable sort-keys */

Tabs.defaultProps = {
selected: 0
};

export { Tabs as default };
