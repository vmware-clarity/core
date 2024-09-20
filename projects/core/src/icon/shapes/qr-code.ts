/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M5.6 4A1.6 1.6 0 0 0 4 5.6V12h8V4Zm4.4 6H6V6h4ZM4 30.4A1.6 1.6 0 0 0 5.6 32H12v-8H4ZM6 26h4v4H6Zm18 6h6.4a1.6 1.6 0 0 0 1.6-1.6V24h-8Zm2-6h4v4h-4Zm4.4-22H24v8h8V5.6A1.6 1.6 0 0 0 30.4 4m-.4 6h-4V6h4Zm-10 0V8h-4v4h2v-2zm-8 2h2v2h-2zm2 2h4v2h-4zm6-8v2h2V4h-8v4h2V6zM4 14h2v4H4z"/><path d="M12 16v2h-2v-4H8v4H6v2H4v2h4v-2h2v2h2v-2h2v-4zm8 0h2v2h2v-2h2v-2h-4v-4h-2v2h-2v2h2zm-2 14h-4v2h8v-2h-2v-2h-2z"/><path d="M22 20v-2h-2v-2h-2v2h-2v2h2v2h2v-2zm8 0h2v2h-2zm-8 0h6v2h-6zm8-6h-2v2h-2v2h2v2h2v-2h2v-2h-2zm-10 8h2v6h-2zm-6 6h2v-2h2v-2h-2v-4h-2z"/>',
};

export const qrCodeIconName = 'qr-code';
export const qrCodeIcon: IconShapeTuple = [qrCodeIconName, renderIcon(icon)];
