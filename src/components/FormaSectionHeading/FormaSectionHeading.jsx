import * as PropTypes from 'prop-types';
import * as React from 'react';
import { SectionHeading as SectionHeadingM } from '@contentful/forma-36-react-components';


const SectionHeading = (props) => (
  <SectionHeadingM {...props}>
    {props.children}
  </SectionHeadingM>
);


SectionHeading.propTypes = {
  children: PropTypes.string,

  element: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "p"])
};



SectionHeading.defaultProps = {
  children: "Please change SectionHeadingText",
  element: "h4"
};

export { SectionHeading as default };
