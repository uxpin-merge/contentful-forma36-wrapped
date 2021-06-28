import * as PropTypes from 'prop-types';
import * as React from 'react';
import { ProductIcon as ProductIconM } from '@contentful/forma-36-react-components/dist/alpha';


const productIcons = [
  'Apis',
  'Apps',
  'Billing',
  'ContentModel',
  'Content',
  'Home',
  'Media',
  'Oauth',
  'OrgInfo',
  'Organizations',
  'Purchase',
  'Settings',
  'Spaces',
  'Sso',
  'Subscription',
  'Teams',
  'Token',
  'Usage',
  'Users',
  'UserProfile',
]
const ProductIcon = (props) => (
  <ProductIconM  {...props} />
);


ProductIcon.propTypes = {
  /**
    * The Product Icon to display
    */
  icon: PropTypes.oneOf(productIcons),
  /**
    * The size of the Product Icon
    */
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
  /**
    * The color of the Product Icon
    */
  color: PropTypes.oneOf(['primary', 'positive', 'negative', 'warning', 'secondary', 'muted', 'white']),
  tag: PropTypes.oneOf(['div', 'span']),

};


ProductIcon.defaultProps = {
icon: 'Apps',
size: 'large'
};

export { ProductIcon as default };