import React from 'react';
import FormaFlex from '../FormaFlex';
import FormaButton from '../../FormaButton/FormaButton'

export default (
  <FormaFlex
    uxpId="flex-1"
  >
    <FormaFlex uxpId="flex-1.1"><FormaButton label="1wwww" buttonType="secondary" isFullWidth uxpId="flex-button-1.1.1" /></FormaFlex>
    <FormaFlex uxpId="flex-1.2"><FormaButton label="2" buttonType="secondary" isFullWidth uxpId="flex-button-1.2.1" /></FormaFlex>
    <FormaFlex uxpId="flex-1.3"><FormaButton label="3" buttonType="secondary" isFullWidth uxpId="flex-button-1.3.1" /></FormaFlex>
    <FormaFlex uxpId="flex-1.4"><FormaButton label="4" buttonType="secondary" isFullWidth uxpId="flex-button-1.4.1" /></FormaFlex>
  </FormaFlex>
);
