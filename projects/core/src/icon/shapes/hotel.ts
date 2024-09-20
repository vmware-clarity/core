/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M28 34h-2V13H10v21H8V12c0-.55.45-1 1-1h18c.55 0 1 .45 1 1zM6.89 1.59 8.1 4.03l2.69.39-1.95 1.9L9.3 9 6.89 7.73 4.49 9l.46-2.68L3 4.42l2.69-.39zm11 0 1.21 2.44 2.69.39-1.95 1.9L20.3 9l-2.41-1.27L15.49 9l.46-2.68L14 4.42l2.69-.39zm11 0 1.21 2.44 2.69.39-1.95 1.9L31.3 9l-2.41-1.27L26.49 9l.46-2.68L25 4.42l2.69-.39zM4 34H2V18c0-.55.45-1 1-1h3v2H4zm30 0h-2V19h-2v-2h3c.55 0 1 .45 1 1z"/><path d="M15 16h-2v2h2zm4 0h-2v2h2zm4 0h-2v2h2zm-8 4h-2v2h2zm4 0h-2v2h2zm4 0h-2v2h2zm-8 4h-2v2h2zm4 0h-2v2h2zm4 0h-2v2h2z"/>',
  solid:
    '<path d="M6.89 1.59 8.1 4.03l2.69.39-1.95 1.9L9.3 9 6.89 7.73 4.49 9l.46-2.68L3 4.42l2.69-.39zm11 0 1.21 2.44 2.69.39-1.95 1.9L20.3 9l-2.41-1.27L15.49 9l.46-2.68L14 4.42l2.69-.39zm11 0 1.21 2.44 2.69.39-1.95 1.9L31.3 9l-2.41-1.27L26.49 9l.46-2.68L25 4.42l2.69-.39zM4 34H2V18c0-.55.45-1 1-1h3v2H4zm30 0h-2V19h-2v-2h3c.55 0 1 .45 1 1zm-7-23H9c-.55 0-1 .45-1 1v22h20V12c0-.55-.45-1-1-1M15 26h-2v-2h2zm0-4h-2v-2h2zm0-4h-2v-2h2zm4 8h-2v-2h2zm0-4h-2v-2h2zm0-4h-2v-2h2zm4 8h-2v-2h2zm0-4h-2v-2h2zm0-4h-2v-2h2z"/>',
};

export const hotelIconName = 'hotel';
export const hotelIcon: IconShapeTuple = [hotelIconName, renderIcon(icon)];
