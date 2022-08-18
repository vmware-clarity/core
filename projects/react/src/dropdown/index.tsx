import { CdsDropdown as Dropdown } from '@cds/core/dropdown';
import '@cds/core/dropdown/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion, removeFalseHiddenProp } from '../utils/index.js';

export const CdsDropdown = removeFalseHiddenProp(
  createComponent(
    React,
    'cds-dropdown',
    Dropdown,
    {
      onCloseChange: 'closeChange',
      onCdsMotionChange: 'cdsMotionChange',
    },
    'CdsDropdown'
  )
);

logReactVersion(React);
