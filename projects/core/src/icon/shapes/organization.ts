/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M13 13h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H13a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2m0-8h10v6H13zm9 18h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H22a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2m0 8v-6h10v6zM4 23h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2m0 8v-6h10v6z" clip-rule="evenodd"/><path d="M26.2 18.8H9.8v3.08H8.2V17.2h9V14h1.6v3.2h9v4.68h-1.6z"/>',

  solid:
    '<path d="M13 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm9 20a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2zM2 25a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm24.2-6.2H9.8v3.08H8.2V17.2h9V14h1.6v3.2h9v4.68h-1.6z"/>',
};

export const organizationIconName = 'organization';
export const organizationIcon: IconShapeTuple = [organizationIconName, renderIcon(icon)];
