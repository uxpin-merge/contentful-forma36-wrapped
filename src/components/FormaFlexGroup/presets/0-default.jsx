import React from 'react';
import FormaFlexGroup from '../FormaFlexGroup';
import FormaFlex from '../../FormaFlex/FormaFlex';
import FormaButton from '../../FormaButton/FormaButton'

export default (
  <FormaFlexGroup
    uxpId="flex-group-1"
  >
    <FormaFlex uxpId="flex-1"><FormaButton label="1" buttonType="secondary" isFullWidth uxpId="flex-button-1" /></FormaFlex>
    <FormaFlex uxpId="flex-2"><FormaButton label="2" buttonType="secondary" isFullWidth uxpId="flex-button-1" /></FormaFlex>
    <FormaFlex uxpId="flex-3"><FormaButton label="3" buttonType="secondary" isFullWidth uxpId="flex-button-1" /></FormaFlex>
    <FormaFlex uxpId="flex-4"><FormaButton label="4" buttonType="secondary" isFullWidth uxpId="flex-button-1" /></FormaFlex>
  </FormaFlexGroup>
);
