import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Typography as TypographyM } from '@contentful/forma-36-react-components';


const Typography = (props) => (
  <TypographyM {...props}>
    {props.children}
  </TypographyM>
);


Typography.propTypes = {
  /**
   * The nested children components
   */
  children: PropTypes.node,
};



Typography.defaultProps = {
};

export { Typography as default };
