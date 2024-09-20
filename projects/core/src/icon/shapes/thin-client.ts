/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M13 30H5a1 1 0 0 1-1-1V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v25a1 1 0 0 1-1 1m-7-2h6V4H6Z"/><circle cx="9" cy="7.42" r="1.5"/><path d="M15 34H3a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2M7.55 12.2h3v1.6h-3zm0 3h3v1.6h-3zm0 3h3v1.6h-3zM16 8h2v1.6h-2zm4 0h2v1.6h-2zm13 3.8h-8a.8.8 0 0 1-.8-.8V5a.8.8 0 0 1 .8-.8h8a.8.8 0 0 1 .8.8v6a.8.8 0 0 1-.8.8m-7.2-1.6h6.4V5.8h-6.4ZM16 20h2v1.6h-2zm4 0h2v1.6h-2zm13 3.8h-8a.8.8 0 0 1-.8-.8v-6a.8.8 0 0 1 .8-.8h8a.8.8 0 0 1 .8.8v6a.8.8 0 0 1-.8.8m-7.2-1.6h6.4v-4.4h-6.4Z"/>',

  solid:
    '<path d="M15 32H3a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2M5 30h8a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v25a1 1 0 0 0 1 1M9 5.92a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 9 5.92M6 12.2h5.84v1.6H6Zm0 3h5.84v1.6H6Zm0 3h6v1.6H6ZM16 8h2v1.6h-2zm4 0h2v1.6h-2zm13-3.8h-8a.8.8 0 0 0-.8.8v6a.8.8 0 0 0 .8.8h8a.8.8 0 0 0 .8-.8V5a.8.8 0 0 0-.8-.8m-.8 6h-6.4V5.8h6.4ZM16 20h2v1.6h-2zm4 0h2v1.6h-2zm13-3.8h-8a.8.8 0 0 0-.8.8v6a.8.8 0 0 0 .8.8h8a.8.8 0 0 0 .8-.8v-6a.8.8 0 0 0-.8-.8m-.8 6h-6.4v-4.4h6.4Z"/>',
};

export const thinClientIconName = 'thin-client';
export const thinClientIcon: IconShapeTuple = [thinClientIconName, renderIcon(icon)];
