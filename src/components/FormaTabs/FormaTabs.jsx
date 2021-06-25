import * as PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Tabs as TabsM } from '@contentful/forma-36-react-components';
import { Tab } from '@contentful/forma-36-react-components';
import { TabPanel } from '@contentful/forma-36-react-components';
import { Button } from '@contentful/forma-36-react-components';

import '@contentful/forma-36-react-components/dist/styles.css';

function Tabs(props) {

  
  const [selected, setSelected] = useState(props.selected);


  function handleClick(tabId) {
    alert(tabId);
    setSelected(tabId);
  
  }
  return (
    <div>
      <TabsM {...props} >

      
      
        {React.Children.map(props.children, (child, index) => (
          

        <div value="" index={index}>
          <Tab {...child.props}
          id={index}
          selected={
            // TODO: Need to check if child.props.selected is also true
            selected === index}
          onSelect= {() =>handleClick(index)}
          >{child.props.children}</Tab>

        </div>
      ))}


      </TabsM>


      {/* {selected === 'first' && (
        <TabPanel id="first">content first tab</TabPanel>
      )}
      {selected === 'second' && (
        <TabPanel id="second">content second tab</TabPanel>
      )}
      {selected === 'third' && (
        <TabPanel id="third">content third tab</TabPanel>
      )} */}
    </div>
  );
};


/* eslint-disable sort-keys */
Tabs.propTypes = {
  children: PropTypes.node,
  dividerOrientation: PropTypes.oneOf(["horizontal", "vertical"]),
  role: PropTypes.oneOf(["tablist", "navigation"]),
  withDivider: PropTypes.bool,
  // onSelect: PropTypes.func,
  onClick: PropTypes.func
};
/* eslint-enable sort-keys */

Tabs.defaultProps = {

};

export { Tabs as default };
