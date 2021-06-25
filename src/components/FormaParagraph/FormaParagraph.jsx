import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Paragraph as ParagraphM } from '@contentful/forma-36-react-components';


const Paragraph = (props) => (
  <ParagraphM {...props}>
    {props.children}
  </ParagraphM>
);


Paragraph.propTypes = {
  children: PropTypes.string,

  element: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "p"])
};



Paragraph.defaultProps = {
  children: "Please change ParagraphText",
  element: "p"
};

export { Paragraph as default };
