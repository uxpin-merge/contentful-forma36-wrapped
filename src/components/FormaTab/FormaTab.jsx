import * as PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Tabs } from '@contentful/forma-36-react-components';
import { Tab as TabM } from '@contentful/forma-36-react-components';

const Tab = (props) => (
    <TabM {...props} >{props.children}</TabM>
  );


  Tab.propTypes = {
    onSelect: PropTypes.func
  }
  Tab.defaultProps = {
    onSelect: () => undefined

  };

  export { Tab as default };
