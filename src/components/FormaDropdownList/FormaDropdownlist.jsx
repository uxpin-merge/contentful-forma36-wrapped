import * as PropTypes from 'prop-types';
import * as React from 'react';
import { DropdownList as DropdownListM } from '@contentful/forma-36-react-components';


const DropdownList = (props) => (
  <DropdownListM {...props} />
);


DropdownList.propTypes = {
    /**
    * @uxpinignoreprop
    */
  children: PropTypes.node,
    /**
    * @uxpinignoreprop
    */
  listRef: PropTypes.shape({ current: PropTypes.instanceOf(React.Component)}),
    /**
    * Adds a border above or below the list
    */
  border: PropTypes.oneOf(["top", "bottom"]),
    /**
    * If set will add a max-height to the list
    */
  maxHeight: PropTypes.string
};



DropdownList.defaultProps = {

};

export { DropdownList as default };
