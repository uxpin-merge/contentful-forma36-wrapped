import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Card } from '@contentful/forma-36-react-components';
const FormaCard = (props) => (
  <Card {...props} >
    {props.children}
  </Card>
);
FormaCard.propTypes = {
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

FormaCard.defaultProps = {
  children: "This is the Card’s content",
  title: "Title"
};
export { FormaCard as default };
