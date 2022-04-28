/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { registerElementSafely } from '@cds/core/internal';
import { ClarityIcons } from '@cds/core/icon/icon.service.js';
import { CdsMenu } from './menu.element.js';
import { CdsMenuItem } from './menu-item.element.js';
import { angleIcon } from '@cds/core/icon/shapes/angle.js';
import '@cds/core/icon/register.js';

ClarityIcons.addIcons(angleIcon);

registerElementSafely('cds-menu', CdsMenu);
registerElementSafely('cds-menu-item', CdsMenuItem);

declare global {
  interface HTMLElementTagNameMap {
    'cds-menu': CdsMenu;
    'cds-menu-item': CdsMenuItem;
  }
}
