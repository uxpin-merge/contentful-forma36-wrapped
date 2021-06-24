import React from 'react';
import FormaEntityListItem from '../FormaEntityListItem';
import FormaDropdownList from '../../FormaDropdownList/FormaDropdownlist';
import FormaDropdownListItem from '../../FormaDropdownListItem/FormaDropDownListItem';

export default (
  <FormaEntityListItem
    uxpId="EntityListItem-1"
    title="This is the title"
    contentType="PDF"
    description="Description of the asset."
    entityType="Entry"
    status="changed"
    withThumbnail={true}
    dropDownActive={true}
  >

    <FormaDropdownList uxpId="EntityListItem-Dropdown-1">
      <FormaDropdownListItem isTitle uxpId="EntityListItem-DropdownListItem-1">Actions</FormaDropdownListItem>
      <FormaDropdownListItem uxpId="EntityListItem-DropdownListItem-2">Edit</FormaDropdownListItem>
      <FormaDropdownListItem uxpId="EntityListItem-DropdownListItem-3">Download</FormaDropdownListItem>
      <FormaDropdownListItem uxpId="EntityListItem-DropdownListItem-4">Remove</FormaDropdownListItem>
    </FormaDropdownList>
  </FormaEntityListItem>
);
