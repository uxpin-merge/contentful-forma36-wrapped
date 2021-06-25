import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Illustration as IllustrationM } from '@contentful/forma-36-react-components';
const illustations =[
  "Archive",
  "Audio",
  "Image",
  "Markup",
  "Pdf",
  "Plaintext",
  "Presentation",
  "Richtext",
  "Spreadsheet",
  "Video",
]

const Illustration = (props) => (
  <IllustrationM {...props} />
);


Illustration.propTypes = {
  /**
  * The Illustration icon to display.
  *
  * */
  illustration: PropTypes.oneOf(illustations)
}


Illustration.defaultProps = {
  illustration: "Archive",
};

export { Illustration as default };
