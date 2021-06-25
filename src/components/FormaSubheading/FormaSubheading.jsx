import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Subheading as SubheadingM } from '@contentful/forma-36-react-components';


const Subheading = (props) => (
  <SubheadingM {...props}>
    {props.children}
  </SubheadingM>
);


Subheading.propTypes = {
  children: PropTypes.string,

  element: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "p"])
};



Subheading.defaultProps = {
  children: "Please change SubheadingText",
  element: "h4"
};

export { Subheading as default };
