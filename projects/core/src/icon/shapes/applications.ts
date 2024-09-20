/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M8 8H4v2h6V4H8zm11 0h-4v2h6V4h-2zm11-4v4h-4v2h6V4zM8 19H4v2h6v-6H8zm11 0h-4v2h6v-6h-2zm11 0h-4v2h6v-6h-2zM8 30H4v2h6v-6H8zm11 0h-4v2h6v-6h-2zm11 0h-4v2h6v-6h-2z"/>',

  outlineAlerted:
    '<path d="M8 8H4v2h6V4H8zm0 11H4v2h6v-6H8zm11 0h-4v2h6v-6h-2zm11-4v4h-4v2h6v-6zM8 30H4v2h6v-6H8zm11 0h-4v2h6v-6h-2zm11 0h-4v2h6v-6h-2zM19 8h-4v2h4v-.11l2-3.39V4h-2Z"/>',

  outlineBadged:
    '<path d="M8 8H4v2h6V4H8zm11 0h-4v2h6V4h-2zM8 19H4v2h6v-6H8zm11 0h-4v2h6v-6h-2zm11 0h-4v2h6v-6h-2zM8 30H4v2h6v-6H8zm11 0h-4v2h6v-6h-2zm11 0h-4v2h6v-6h-2z"/>',

  solid:
    '<path d="M4 4h6v6H4zm0 11h6v6H4zm0 11h6v6H4zM15 4h6v6h-6zm0 11h6v6h-6zm0 11h6v6h-6zM26 4h6v6h-6zm0 11h6v6h-6zm0 11h6v6h-6z"/>',

  solidAlerted:
    '<path d="M4 4h6v6H4zm0 11h6v6H4zm0 11h6v6H4zm11-11h6v6h-6zm0 11h6v6h-6zm11-11h6v6h-6zm0 11h6v6h-6zM15 10h4v-.11l2-3.39V4h-6Z"/>',

  solidBadged:
    '<path d="M4 4h6v6H4zm0 11h6v6H4zm0 11h6v6H4zM15 4h6v6h-6zm0 11h6v6h-6zm0 11h6v6h-6zm11-11h6v6h-6zm0 11h6v6h-6z"/>',
};

export const applicationsIconName = 'applications';
export const applicationsIcon: IconShapeTuple = [applicationsIconName, renderIcon(icon)];
