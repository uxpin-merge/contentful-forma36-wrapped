import * as PropTypes from 'prop-types';
import * as React from 'react';
import { SectionHeading as SectionHeadingM } from '@contentful/forma-36-react-components';


const SectionHeading = (props) => (
  <SectionHeadingM {...props}>
    {props.children}
  </SectionHeadingM>
);


SectionHeading.propTypes = {
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



SectionHeading.defaultProps = {
  children: "Section Text",
  element: "h4"
};

export { SectionHeading as default };
