/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { registerElementSafely } from '@cds/core/internal';
import { CdsIcon } from './icon.element.js';

registerElementSafely('cds-icon', CdsIcon);

declare global {
  interface HTMLElementTagNameMap {
    'cds-icon': CdsIcon;
  }
}
