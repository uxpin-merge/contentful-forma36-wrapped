import * as PropTypes from 'prop-types';
import * as React from 'react';
import { EntityList as EntityListM } from '@contentful/forma-36-react-components';


const EntityList = (props) => (
  <EntityListM {...props} />
);

EntityList.propTypes = {
  /**
   * @uxpinignoreprop
   */
  children: PropTypes.node,
}

export { EntityList as default };
