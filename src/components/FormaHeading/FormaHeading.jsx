import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Heading as HeadingM } from '@contentful/forma-36-react-components';


const Heading = (props) => (
  <HeadingM {...props}>
    {props.children}
  </HeadingM>
);


Heading.propTypes = {
  /**
   * The text to display
   * @uxpinpropname  Text
   */
  children: PropTypes.string,

  /**
   * The html tag to use
   */
  element: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "p"])
};



Heading.defaultProps = {
  children: "Please change Text",
  element: "h4"
};

export { Heading as default };
