/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M9.8 18.8h16.4v3.08h1.6V17.2h-9V14h-1.6v3.2h-9v4.68h1.6zM14 23H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2M4 31v-6h10v6Zm28-8H22a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2m-10 8v-6h10v6Zm-9-18h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H13a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2m0-8h10v6H13Z"/>',

  solid:
    '<path d="M9.8 18.8h16.4v3.08h1.6V17.2h-9V14h-1.6v3.2h-9v4.68h1.6z"/><rect width="14" height="10" x="2" y="23" rx="2" ry="2"/><rect width="14" height="10" x="20" y="23" rx="2" ry="2"/><rect width="14" height="10" x="11" y="3" rx="2" ry="2"/>',
};

export const organizationIconName = 'organization';
export const organizationIcon: IconShapeTuple = [organizationIconName, renderIcon(icon)];
