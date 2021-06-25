import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Typography as TypographyM } from '@contentful/forma-36-react-components';


const Typography = (props) => (
  <TypographyM {...props}>
    {props.children}
  </TypographyM>
);


Typography.propTypes = {
  children: PropTypes.node,
};



Typography.defaultProps = {
};

export { Typography as default };
