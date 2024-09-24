/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M14 30H6v-8h2v-2H4v12h12v-4h-2zm12-10h-6v6h6zm-16 6h6v-6h-6zm16-16h-6v6h6zM4 16h4v-2H6V6h8v2h2V4H4zm6 0h6v-6h-6zM20 4v4h2V6h8v8h-2v2h4V4zm8 18h2v8h-8v-2h-2v4h12V20h-4z"/>',

  outlineAlerted:
    '<path d="m26.904 1.646-5.682 9.47c-.27.382-.294.879-.063 1.284.23.406.677.652 1.156.637h11.373a1.28 1.28 0 0 0 1.156-.637c.23-.405.206-.902-.063-1.284l-5.682-9.47a1.28 1.28 0 0 0-1.098-.609c-.451 0-.87.232-1.097.61M23.16 4H20v4h.76zM28 15.037h4V16h-4zm-8-.906a3.3 3.3 0 0 0 2.34.906H26V16h-6zM6 22v8h8v-2h2v4H4V20h4v2zm14-2h6v6h-6z"/><path d="M16 26h-6v-6h6zM8 16H4V4h12v4h-2V6H6v8h2z"/><path d="M16 16h-6v-6h6zm14 6h-2v-2h4v12H20v-4h2v2h8z"/>',

  outlineBadged:
    '<path d="M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10m2 1.71a7 7 0 0 1-2 .29v1h-2v2h4zM24.255 10A7 7 0 0 0 26 11.745V16h-6v-6zM23 6c0-.695.101-1.366.29-2H20v4h2V6zM6 22v8h8v-2h2v4H4V20h4v2zm14 4v-6h6v6z"/><path d="M16 26h-6v-6h6zM8 16H4V4h12v4h-2V6H6v8h2z"/><path d="M16 16h-6v-6h6zm14 6h-2v-2h4v12H20v-4h2v2h8z"/>',
};

export const vmwAppIconName = 'vmw-app';
export const vmwAppIcon: IconShapeTuple = [vmwAppIconName, renderIcon(icon)];
