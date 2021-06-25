import * as PropTypes from 'prop-types';
import * as React from 'react';
import { Asset as AssetM } from '@contentful/forma-36-react-components';


const Asset = (props) => (
  <AssetM {...props} />
);


Asset.propTypes = {
  /**
  * The type of asset being represented
  */
  type: PropTypes.oneOf(["audio", "code", "video", "image", "archive", "markup", "pdf", "plaintext"]),
  /**
  * The title of the asset
  */
  title: PropTypes.string,
  /**
  * The publish status of the asset
  */
  status: PropTypes.oneOf(["archived", "published", "draft", "changed", "deleted"]),
  /**
  * A src attribute to use for image assets
  */
  src: PropTypes.string,
};


Asset.defaultProps = {
  type: "image",
  title: "A published asset",
  status: "published",
  src: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
};

export { Asset as default };
