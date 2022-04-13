import {
  CdsControlMessage as ControlMessage,
  CdsControlAction as ControlAction,
  CdsInternalControlGroup as ControlGroup,
  CdsControl as Control,
  CdsFormGroup as FormGroup,
} from '@cds/core/forms';
import '@cds/core/forms/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils/index.js';

export const CdsControlMessage = createComponent(React, 'cds-control-message', ControlMessage, {}, 'CdsControlMessage');
export const CdsControlAction = createComponent(React, 'cds-control-action', ControlAction, {}, 'CdsControlAction');
export const CdsControlGroup = createComponent(React, 'cds-control-group', ControlGroup, {}, 'CdsControlGroup');
export const CdsControl = createComponent(React, 'cds-control', Control, {}, 'CdsControl');
export const CdsFormGroup = createComponent(React, 'cds-form-group', FormGroup, {}, 'CdsFormGroup');

logReactVersion(React);
