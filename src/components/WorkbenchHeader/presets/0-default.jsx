import React from 'react';
import WorkbenchHeader from '../WorkbenchHeader';
import FormaButton from '../../FormaButton/FormaButton';
import FormaFlex from '../../FormaFlex/FormaFlex';


export default (
  <WorkbenchHeader
    uxpId="WorkbenchHeader-1"
    description="This is the description"
    buttonLabel="Click"
    title="Page title"
    icon="none"
    buttonType="positive"
  >
    <FormaFlex uxpId="WorkbenchHeader-flex-1">
      <FormaButton uxpId="WorkbenchHeader-button-1" buttonType="positive" label="Save" />
    </FormaFlex>
  </WorkbenchHeader>
);
