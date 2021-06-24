import React from 'react';
import FormaEntityList from '../FormaEntityList';
import FormaEntityListItem from '../../FormaEntityListItem/FormaEntityListItem';
import FormaDropdownList from '../../FormaDropdownList/FormaDropdownlist';
import FormaDropdownListItem from '../../FormaDropdownListItem/FormaDropDownListItem';

export default (
  <FormaEntityList uxpId="EntityList-1">
    <FormaEntityListItem
      uxpId="EntityListItem-1"
      title="Asset 1"
      contentType="PDF"
      description="Description of the asset."
      entityType="Entry"
      status="published"
      withThumbnail={true}
      dropDownActive={true}
    >

      <FormaDropdownList uxpId="EntityListItem-Dropdown-1">
        <FormaDropdownListItem isTitle uxpId="EntityListItem-DropdownListItem-1.1">Actions</FormaDropdownListItem>
        <FormaDropdownListItem uxpId="EntityListItem-DropdownListItem-1.2">Edit</FormaDropdownListItem>
        <FormaDropdownListItem uxpId="EntityListItem-DropdownListItem-1.3">Download</FormaDropdownListItem>
        <FormaDropdownListItem uxpId="EntityListItem-DropdownListItem-1.4">Remove</FormaDropdownListItem>
      </FormaDropdownList>
    </FormaEntityListItem>

    <FormaEntityListItem
      uxpId="EntityListItem-2"
      title="Asset 2"
      contentType="PDF"
      description="Description of the asset."
      entityType="Entry"
      status="draft"
      withThumbnail={true}
      dropDownActive={true}
    >

      <FormaDropdownList uxpId="EntityListItem-Dropdown-2">
        <FormaDropdownListItem isTitle uxpId="EntityListItem-DropdownListItem-2.1">Actions</FormaDropdownListItem>
        <FormaDropdownListItem uxpId="EntityListItem-DropdownListItem-2.2">Edit</FormaDropdownListItem>
        <FormaDropdownListItem uxpId="EntityListItem-DropdownListItem-2.3">Download</FormaDropdownListItem>
        <FormaDropdownListItem uxpId="EntityListItem-DropdownListItem-2.4">Remove</FormaDropdownListItem>
      </FormaDropdownList>
    </FormaEntityListItem>

    <FormaEntityListItem
      uxpId="EntityListItem-3"
      title="Asset 3"
      contentType="PDF"
      description="Description of the asset."
      entityType="Entry"
      status="archived"
      withThumbnail={true}
      dropDownActive={true}
    >

      <FormaDropdownList uxpId="EntityListItem-Dropdown-3">
        <FormaDropdownListItem isTitle uxpId="EntityListItem-DropdownListItem-3.1">Actions</FormaDropdownListItem>
        <FormaDropdownListItem uxpId="EntityListItem-DropdownListItem-3.2">Edit</FormaDropdownListItem>
        <FormaDropdownListItem uxpId="EntityListItem-DropdownListItem-3.3">Download</FormaDropdownListItem>
        <FormaDropdownListItem uxpId="EntityListItem-DropdownListItem-3.4">Remove</FormaDropdownListItem>
      </FormaDropdownList>
    </FormaEntityListItem>

  </FormaEntityList>
);
