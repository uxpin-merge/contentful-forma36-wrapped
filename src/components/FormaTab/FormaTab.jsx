import * as PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Tabs } from '@contentful/forma-36-react-components';
import { Tab as TabM } from '@contentful/forma-36-react-components';

const Tab = (props) => (
    <TabM {...props} >{props.children}</TabM>
    
  );


  Tab.propTypes = {
    id: PropTypes.string,
    onSelect: PropTypes.func, 
    selected: PropTypes.bool, 
    href: PropTypes.string, 
    target: PropTypes.string, 
    disabled: PropTypes.bool, 
    tabIndex: PropTypes.number,   
    style: PropTypes.string, 
    className: PropTypes.string, 
    testId: PropTypes.string, 
    children: PropTypes.node,


  }
  Tab.defaultProps = {
    // onSelect: () => alert("jack")

  };

  export { Tab as default };
