import * as PropTypes from 'prop-types';
import * as React from 'react';
import { EntityList } from '@contentful/forma-36-react-components';


const FormaEntityList = (props) => (
  <EntityList {...props} />
);

FormaEntityList.propTypes = {
  /**
   * @uxpinignoreprop
   */
  children: PropTypes.node,
}

export { FormaEntityList as default };