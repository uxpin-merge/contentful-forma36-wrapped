import React from 'react';
import FormaTabs from '../FormaTabs';
import FormaTab from '../../FormaTab/FormaTab';
import TabPanel from '../../TabPanel/TabPanel';

export default (
    <FormaTabs selected={0} uxpId="tabs-1">
        <FormaTab componentType="Tab" uxpId="tab-1">Tab 1</FormaTab>
        <FormaTab componentType="Tab" uxpId="tab-2">Tab 2</FormaTab>
        <TabPanel componentType="TabPanel" uxpId="tab-panel-1" >
            This is the FIRST Tab Panel
        </TabPanel>
        <TabPanel componentType="TabPanel" uxpId="tab-panel-2" >
            This is the SECOND Tab Panel
        </TabPanel>
    </FormaTabs>
);
