/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M6.06 30a1 1 0 0 1-1-1V8h-2a1 1 0 0 1 0-2h4v23a1 1 0 0 1-1 1"/><path d="M30.06 27h-25V9h25a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3m-23-2h23a1 1 0 0 0 1-1V12a1 1 0 0 0-1-1h-23Z"/><path d="M22.06 20h6v2h-6zm0-6h6v2h-6zm-3 8h-8v-2h7v-6h2v7a1 1 0 0 1-1 1"/>',
};

export const storageAdapterIconName = 'storage-adapter';
export const storageAdapterIcon: IconShapeTuple = [storageAdapterIconName, renderIcon(icon)];
