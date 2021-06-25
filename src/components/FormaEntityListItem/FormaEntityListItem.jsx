import * as PropTypes from 'prop-types';
import * as React from 'react';
import { EntityListItem as EntityListItemM, DropdownListItem, DropdownList } from '@contentful/forma-36-react-components';



function EntityListItem(props) {

  const { cardDragHandlePropTypes, dropDownActive, children, ...other } = props;

  const dropDownElement = children;

  // <DropdownList>
  //   <DropdownListItem isTitle>dddd</DropdownListItem>
  //   <DropdownListItem>Edit</DropdownListItem>
  //   <DropdownListItem>Download</DropdownListItem>
  //   <DropdownListItem>Remove</DropdownListItem>
  // </DropdownList>;

  return (
    <EntityListItemM
      {...other}
      cardDragHandleProptypes
      dropdownListElements={
        props.dropDownActive
          ? dropDownElement
          : null
      }
    />
  )
}
;

EntityListItem.propTypes = {
    /**
     * @uxpinignoreprop
     */
    children: PropTypes.node,

    /**
    * Styling will be applied based on type
    * Below we change prop name in UXPin
    * @uxpinpropname Type
    */
    entityType: PropTypes.oneOf(["Asset", "Entry", "Release"]),

    /**
    * The publish status if the entry
    */
    status: PropTypes.oneOf(["published", "draft", "archived", "changed"]),

    /**
    * Title of entity
    */
    title: PropTypes.string,

    /**
    * Content type of entity
    */
    contentType: PropTypes.string,

    /**
    * Description of entity
    */
    description: PropTypes.string,

    /**
    * If checked: A thumbnail will be shown
    * Below we change prop name in UXPin
    * @uxpinpropname Thumbnail
    */
    withThumbnail: PropTypes.bool,

    /**
    * Custom prop - If checked: will enable dropdown icon and functionality
    * Below we change prop name in UXPin
    * @uxpinpropname Drowdown
    */
    dropDownActive: PropTypes.bool,

    /**
     * If checked: will disable dropdown
     * Below we change prop name in UXPin
     * @uxpinpropname Drpdwn disable
     */
    isActionsDisabled: PropTypes.bool,

    /**
    * The DropdownList elements - adjust item dynamically
    * @uxpinignoreprop
    */
    dropownListElements: PropTypes.element,

    /**
     * If checked: Renders drag handle
     * Below we change prop name in UXPin
     * @uxpinpropname Drag Handle
     */
    withDragHandle: PropTypes.bool,

    /**
     * If checked: Applies css as if component is being dragged
     */
    isDragActive: PropTypes.bool,

    /**
    * Props to pass to a custom drag handle component
    * Below we change prop name in UXPin
    * @uxpinpropname Custom Drag Handle
    * @uxpinignoreprop
    */
    cardDragHandleComponent: PropTypes.node,

    /**
    * Props to pass to the default drag handle.
    * Does not work with Custom Drag Handle prop
    * @uxpinignoreprop
    */
    cardDragHandleProps: PropTypes.node,

    /**
    * The URL of the entity's preview thumbnail. Use 46px x 46px images for best results
    * @uxpinpropname Thmb URL
    */
    thumbnailUrl: PropTypes.string,

    /**
    * The alt text for the thumbnail
    * @uxpinpropname Thmb Alt Text
    */
    thumbnailAltText: PropTypes.string,

    /**
    * A URL to link to
    */
    href: PropTypes.string,

    /**
    * OnClick event
    */
    onClick: PropTypes.func,
};



EntityListItem.defaultProps = {
  title: "This is the title",
  contentType: "pdf",
  description: "Description",
  entityType: "Asset",
  status: "published",
  withThumbnail: true,
  dropDownActive: true,
};

export { EntityListItem as default };
