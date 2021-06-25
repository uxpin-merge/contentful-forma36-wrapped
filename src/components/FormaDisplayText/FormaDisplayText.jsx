import * as PropTypes from 'prop-types';
import * as React from 'react';
import { DisplayText as DisplayTextM } from '@contentful/forma-36-react-components';


const DisplayText = (props) => (
  <DisplayTextM {...props}>
    {props.children}
  </DisplayTextM>
);


DisplayText.propTypes = {
  children: PropTypes.string,

  size: PropTypes.oneOf(["large", "huge"]),

  element: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "p"])
};



DisplayText.defaultProps = {
  children: "Please change displayText",
  size: "large",
  element: "h1"
};

export { DisplayText as default };
