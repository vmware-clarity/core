/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M24 4.5h6.4A1.6 1.6 0 0 1 32 6.1v6.4h-8zm2 6h4v-4h-4zm-6 0v-2h2v-4h-8v4h2v4h2v2h-4v-2h-2v-8H5.6A1.6 1.6 0 0 0 4 6.1v6.4h8v2h2v2h-2v2h-2v-4H8v4H6v-4H4v4h2v2H4v2h4v-2h2v2h2v-2h2v8h2v-2h2v-2h-2v-4h2v2h2v6h-2v2h-4v2h8v-2h-2v-2h2v-6h6v-2h2v2h2v-2h-2v-2h2v-2h-2v-2h-2v2h-2v-2h-4v-4zm2 8h2v-2h2v2h2v2h-6zm-2-2v2h2v-2zm-2 0h-4v4h2v-2h2zm0 0h2v-2h-2zm4 4v2h-2v-2zm-2-10v2h-2v-2zm-4-2h4v-2h-4zm-10 2h4v-4H6zM4 30.9a1.6 1.6 0 0 0 1.6 1.6H12v-8H4zm6-.4v-4H6v4zm14 2h6.4a1.6 1.6 0 0 0 1.6-1.6v-6.4h-8zm6-6h-4v4h4z" clip-rule="evenodd"/>',
};

export const qrCodeIconName = 'qr-code';
export const qrCodeIcon: IconShapeTuple = [qrCodeIconName, renderIcon(icon)];
