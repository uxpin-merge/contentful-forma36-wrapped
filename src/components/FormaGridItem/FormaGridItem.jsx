import * as PropTypes from 'prop-types';
import * as React from 'react';
import { GridItem as GridItemM } from '@contentful/forma-36-react-components';


const GridItem = (props) => (
  <GridItemM {...props} />
);

GridItem.propTypes = {

  /**
  * Child nodes to be rendered in the component
  * @uxpinignoreprop */
  children: PropTypes.node,
  /**
   * one of grid-column-start css values */
  columnStart: PropTypes.string,
  /**
   * one of grid-column-end css values */
  columnEnd: PropTypes.string,
  /**
   * one of grid-column-start css values */
  rowStart: PropTypes.string,
  /**
   * one of grid-row-end css values */
  rowEnd: PropTypes.string,
  /**
   * one of grid-area css values */
  area: PropTypes.string,
  /**
   * order css property */
  order: PropTypes.number,

};



GridItem.defaultProps = {

};

export { GridItem as default };
