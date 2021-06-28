import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Subheading as SubheadingM } from '@contentful/forma-36-react-components';


const Subheading = (props) => (
  <SubheadingM {...props}>
    {props.children}
  </SubheadingM>
);


Subheading.propTypes = {
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



Subheading.defaultProps = {
  children: "Subheading Text",
  element: "h4"
};

export { Subheading as default };
