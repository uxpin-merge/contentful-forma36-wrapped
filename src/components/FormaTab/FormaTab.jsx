import * as PropTypes from 'prop-types';
import React from 'react';
import { Tab as TabM } from '@contentful/forma-36-react-components';

const Tab = (props) => (
  <TabM  {...props} >{props.children}</TabM>

);


Tab.propTypes = {
  /**
  * @uxpinignoreprop
  */
  id: PropTypes.string,

  /**
  * @uxpinpropname Tab Label
  */
  children: PropTypes.node,

  href: PropTypes.string,

  target: PropTypes.string,

  selected: PropTypes.bool,

  disabled: PropTypes.bool,

  /**
 * @uxpinignoreprop
 */
  tabIndex: PropTypes.number,
  /**
* @uxpinignoreprop
*/
  style: PropTypes.string,

  /**
* @uxpinignoreprop
*/
  className: PropTypes.string,

  /**
* @uxpinignoreprop
*/
  testId: PropTypes.string,

  /**
 * @uxpinignoreprop
 */
  role: PropTypes.string,

  /**
* @uxpinignoreprop
*/
  componentType: PropTypes.string,

  onSelect: PropTypes.func,
}
Tab.defaultProps = {
  // onSelect: () => alert("jack")
  componentType: "Tab"
};

export { Tab as default };
