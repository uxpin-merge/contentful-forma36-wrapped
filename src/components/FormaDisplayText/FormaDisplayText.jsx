import * as PropTypes from 'prop-types';
import * as React from 'react';
import { DisplayText as DisplayTextM } from '@contentful/forma-36-react-components';


const DisplayText = (props) => (
  <DisplayTextM {...props}>
    {props.children}
  </DisplayTextM>
);


DisplayText.propTypes = {
  /**
   * The text to display
   * @uxpinpropname  Text
   */
  children: PropTypes.string,
  /**
   * The size of text
   */
  size: PropTypes.oneOf(["default", "large", "huge"]),
  /**
   * The html tag to use
   */
  element: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "p"])
};



DisplayText.defaultProps = {
  children: "Display Text",
  size: "large",
  element: "h1"
};

export { DisplayText as default };
