import * as PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Tabs as TabsM } from '@contentful/forma-36-react-components';
import { Tab } from '@contentful/forma-36-react-components';
import { TabPanel } from '@contentful/forma-36-react-components';

import '@contentful/forma-36-react-components/dist/styles.css';

function Tabs(props) {

  React.useEffect(() => setSelected(props.selected), [props]);

  const [selected, setSelected] = useState(props.selected);

  const tabsArray = [];
  React.Children.map(props.children, (child, index) => (
    child.props.componentType === "Tab" ? tabsArray.push(child) : null));

  const panelArray = [];
  React.Children.map(props.children, (child, index) => (
    child.props.componentType === "TabPanel" ? panelArray.push(child) : null));


  console.log("tabs", tabsArray)
  console.log("panels", panelArray)


  let allTabs = tabsArray.map((item, i) => {
    return (
      <Tab {...item.props}
        id={i}
        key={`tabs-${i}`}
        selected={
          selected === i}
        onSelect={() => handleClick(i)}
      >{item.props.children}

      </Tab>
    );
  });

  let allPanels = panelArray.map((item, i) => {
    return (
      selected === i && <TabPanel id={i} key={`tabs-${i}`} style={{marginTop: "1.5em"}}{...item.props}>{item.props.children}</TabPanel>
    );
  });


  function handleClick(tabId) {
    setSelected(tabId);

  }


  return (
  <>
    <TabsM {...props} >
      {allTabs}
    </TabsM>
    {allPanels}
  </>
  )

};

/* eslint-disable sort-keys */
Tabs.propTypes = {
  children: PropTypes.node,
  dividerOrientation: PropTypes.oneOf(["horizontal", "vertical"]),
  role: PropTypes.oneOf(["tablist", "navigation"]),
  withDivider: PropTypes.bool,
  // onSelect: PropTypes.func,
  onClick: PropTypes.func,
  selected: PropTypes.number
};
/* eslint-enable sort-keys */

Tabs.defaultProps = {
selected: 0
};

export { Tabs as default };
