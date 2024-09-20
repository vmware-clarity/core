/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M28 22h2v8h-8v-2h-2v4h12V20h-4zm-14 8H6v-8h2v-2H4v12h12v-4h-2zM8 14H6V6h8v2h2V4H4v12h4zM20 4v4h2V6h8v8h-2v2h4V4z"/><path d="M11 11h6v6h-6zm8 0h6v6h-6zm-8 8h6v6h-6zm8 0h6v6h-6z"/>',

  outlineAlerted:
    '<path d="M28 22h2v8h-8v-2h-2v4h12V20h-4zm-14 8H6v-8h2v-2H4v12h12v-4h-2zM8 14H6V6h8v2h2V4H4v12h4z"/><path d="M11 11h6v6h-6zm0 8h6v6h-6zm8 0h6v6h-6zm6-3.6h-2.77A3.69 3.69 0 0 1 19 13.56v-.1V17h6ZM22.45 4H20v4h.14zM28 15.4h4v.6h-4z"/>',

  outlineBadged:
    '<path d="M28 22h2v8h-8v-2h-2v4h12V20h-4zm-14 8H6v-8h2v-2H4v12h12v-4h-2zM8 14H6V6h8v2h2V4H4v12h4z"/><path d="M11 11h6v6h-6zm0 8h6v6h-6zm8 0h6v6h-6zm3-13h.5a7.5 7.5 0 0 1 .28-2H20v4h2Zm8 7.5v.5h-2v2h4v-2.78a7.5 7.5 0 0 1-2 .28m-5-1.92a8 8 0 0 1-.58-.58H19v6h6Z"/>',
};

export const vmwAppIconName = 'vmw-app';
export const vmwAppIcon: IconShapeTuple = [vmwAppIconName, renderIcon(icon)];
