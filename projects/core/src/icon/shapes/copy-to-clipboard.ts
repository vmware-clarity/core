/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M21 7.34c0-1.28-1.05-2.32-2.33-2.33h-.8A4 4 0 0 0 13.99 2a4.01 4.01 0 0 0-3.88 3.01h-.79C8.04 5.01 7 6.06 6.99 7.34v3.67h14V7.34zm-2 1.67H9V7.34c0-.09.03-.17.1-.23.06-.06.15-.1.23-.1H12v-1c0-1.1.9-2 2-2s2 .9 2 2v1h2.67c.18 0 .33.15.33.33zM24 17h2V6.7c0-.45-.18-.88-.51-1.2-.32-.32-.75-.49-1.2-.49H22v2h2zm0 15H4V7.01h2v-2H4c-.5-.07-1 .07-1.38.4-.38.32-.61.79-.62 1.29v25.61c0 .45.18.88.51 1.2.32.32.75.49 1.2.49h20.58c.45 0 .88-.17 1.2-.49s.5-.75.51-1.2V23h-2zm9-13H18.61l3.11-3.29c.37-.39.37-1.02 0-1.41a.914.914 0 0 0-1.34 0l-5.39 5.71 5.39 5.71c.18.2.43.29.67.29s.48-.1.67-.29c.37-.39.37-1.02 0-1.41l-3.11-3.29H33c.55 0 1-.45 1-1s-.45-1-1-1z"/>',
};

export const copyToClipboardIconName = 'copy-to-clipboard';
export const copyToClipboardIcon: IconShapeTuple = [copyToClipboardIconName, renderIcon(icon)];
