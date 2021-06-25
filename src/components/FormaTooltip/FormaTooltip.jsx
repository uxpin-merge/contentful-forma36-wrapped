import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Tooltip as TooltipM } from '@contentful/forma-36-react-components';


const Tooltip = (props) => {
  const { uxpinRef, ...other } = props;
  return (
    <div ref={uxpinRef}>
      <TooltipM  {...other}  >
        {props.children}
      </TooltipM>
    </div>
  )
}


Tooltip.propTypes = {
  /**
   * The content to be displayed in the tooltip
   */
  content: PropTypes.node,

  /**
   * It sets the "preferred" position of the Tooltip
   */
  place: PropTypes.oneOf(["left", "right", "auto", "top", "bottom"]),

  /**
   * The max-width of the tooltip
   */
  maxWidth: PropTypes.number,

  /**
   * It sets a delay period for the Tooltip
   */
  hideDelay: PropTypes.number,

  /**
   * If checked tooltip will be visible (requires browser refresh)
   */
  isVisible: PropTypes.bool,

  /**
  * Function that will be called when target gets focused
  */
  onFocus: PropTypes.func,

  /**
  * Function that will be called when target gets blurred
  */
  onBlur: PropTypes.func,

  /**
    * Function that will be called when the user move the mouse out of the target
    */
  onMouseLeave: PropTypes.func,

  /**
    * Function that will be called when the user move the mouse over of the target
    */
  onMouseOver: PropTypes.func,

  /**
  * @uxpinignoreprop
  */
  children: PropTypes.node,

  /**
  * @uxpinignoreprop
  */
  containerElement: PropTypes.element,

  /**
* @uxpinignoreprop
*/
  targetWrapperClassName: PropTypes.string,

  /**
  * @uxpinignoreprop
  */
  usePortal: PropTypes.bool,

};

Tooltip.defaultProps = {
  content: "Hi I am a tooltip",
  place: "top",
};

export { Tooltip as default };
