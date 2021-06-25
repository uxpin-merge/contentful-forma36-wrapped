import * as PropTypes from 'prop-types';
import * as React from 'react';
import { DropdownListItem as DropdownListItemM } from '@contentful/forma-36-react-components';


const DropdownListItem = (props) => {
  const { onClick, onMouseDown, onFocus, onLeave, onEnter, ...other } = props;

  return (


    <DropdownListItemM {...props.isTitle
      // If closeable prop = true
      ? { ...other }
      //else
      : { ...props }}>{props.children}</DropdownListItemM>
  )
}


DropdownListItem.propTypes = {
  /**
   * The text of the dropdown list item
  * @uxpinpropname Text
  */
  children: PropTypes.string,

  /**
    * @uxpinignoreprop
    */
  listItemRef: PropTypes.shape({ current: PropTypes.instanceOf(HTMLElement) }),

  /**
   * If checked, text will render as title
  */
  isTitle: PropTypes.bool,

  /**
  * If checked, item will be set to active
  */
  isActive: PropTypes.bool,

  /**
  * If checked, item will be set to disable
  */
  isDisabled: PropTypes.bool,

  /**
   * A URL link when clicked.
   */
  href: PropTypes.string,

  /**
   * Function fired when clicked.
   */
  onClick: PropTypes.func,

  /**
   * Function fired when mouse is pressed.
   */
  onMouseDown: PropTypes.func,

  /**
    * @uxpinignoreprop
    */
  submenuToggleLabel: PropTypes.string,

  /**
    * @uxpinignoreprop
    */
  onFocus: PropTypes.func,

  /**
    * @uxpinignoreprop
    */
  onLeave: PropTypes.func,

  /**
    * @uxpinignoreprop
    */
  onEnter: PropTypes.func,
};


DropdownListItem.defaultProps = {

children: "I am a dropdown list item jack"
};

export { DropdownListItem as default };
