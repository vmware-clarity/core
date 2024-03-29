/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { registerElementSafely } from '@cds/core/internal';
import { CdsDatalist } from './datalist.element.js';
import '@cds/core/forms/register.js';
import '@cds/core/button-expand/register.js';

registerElementSafely('cds-datalist', CdsDatalist);

declare global {
  interface HTMLElementTagNameMap {
    'cds-datalist': CdsDatalist;
  }
}
