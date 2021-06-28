import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Paragraph as ParagraphM } from '@contentful/forma-36-react-components';


const Paragraph = (props) => (
  <ParagraphM {...props} 
    
    style={props.isBold ? {fontWeight: "bold"} : null}>
    {props.children}
  </ParagraphM>
);


Paragraph.propTypes = {
  /**
   * The text to display
   * @uxpinpropname  Text
   */
  children: PropTypes.string,
  /**
   * Is the text bold
   */
  isBold: PropTypes.bool,

  /**
   * The html tag to use
   */
  element: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "p"])
};



Paragraph.defaultProps = {
  children: "Please change Text",
  element: "p"
};

export { Paragraph as default };
