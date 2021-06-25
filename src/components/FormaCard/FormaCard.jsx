import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Card as CardM } from '@contentful/forma-36-react-components';
const Card = (props) => (
  <CardM {...props} >
    {props.children}
  </CardM>
);
Card.propTypes = {
  /**
  * The title of the entry. It will also be used as aria-label
  * */
  title: PropTypes.string,
  /**
  * Child nodes to be rendered in the component
  * */
  children: PropTypes.string,
  /**
  * Applies padding styles of different sizes
  * */
  padding: PropTypes.oneOf(["none", "default", "large"]),
  /**
  * The action to be performed when user clicks on the Card
  * */
  onClick: PropTypes.func,
  /**
  * Applies selected styles to the element
  * */
  selected: PropTypes.bool,
};

Card.defaultProps = {
  children: "This is the Card’s content",
  title: "Title"
};
export { Card as default };
