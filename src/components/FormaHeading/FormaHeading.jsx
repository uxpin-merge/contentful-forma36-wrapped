import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Heading as HeadingM } from '@contentful/forma-36-react-components';


const Heading = (props) => (
  <HeadingM {...props}>
    {props.children}
  </HeadingM>
);


Heading.propTypes = {
  children: PropTypes.string,

  element: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "p"])
};



Heading.defaultProps = {
  children: "Please change headingText",
  element: "h4"
};

export { Heading as default };
