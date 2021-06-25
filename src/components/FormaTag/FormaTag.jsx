import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Tag as TagM } from '@contentful/forma-36-react-components';

const Tag = (props) => (
  <TagM {...props}>
    {props.children}
  </TagM>
);

Tag.propTypes = {
  /**
 * The text of the Tag
 * @uxpinpropname  Text
 */
  children: PropTypes.string,
  /**
 * The Tag type
 */
  tagType: PropTypes.oneOf(["primary", "primary-filled", "positive", "negative", "warning", "secondary", "featured", "muted"]),
  /**
* The size of the Tag
*/
  size: PropTypes.oneOf(["small", "default"]),
};

Tag.defaultProps = {
  children: "published",
  tagType: "primary",
  size: "default",
};

export { Tag as default };
