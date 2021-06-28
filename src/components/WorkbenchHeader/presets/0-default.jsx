import React from 'react';
import WorkbenchHeader from '../WorkbenchHeader';
import FormaButton from '../../FormaButton/FormaButton';


export default (
  <WorkbenchHeader
    uxpId="WorkbenchHeader-1"
    description= "This is the description"
    buttonLabel= "Click"
    title= "Page title"
    icon="none"
    buttonType= "muted"
  >
  <FormaButton uxpId="Workbench-button-1" buttonType="muted" label="Click"/>
  </WorkbenchHeader>
);
