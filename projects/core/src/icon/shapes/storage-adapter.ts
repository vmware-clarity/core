/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M22 20h6v-2h-6zm-4 2h-6v2h7c.27 0 .52-.11.71-.29s.29-.44.29-.71v-9h-2zm15.12-11.12c-.56-.56-1.33-.88-2.12-.88H8V6H3c-.27 0-.52.11-.71.29S2 6.73 2 7s.11.52.29.71S2.73 8 3 8h3v21c0 .27.11.52.29.71s.44.29.71.29.52-.11.71-.29S8 29.27 8 29v-1h23c.8 0 1.56-.32 2.12-.88S34 25.79 34 25V13c0-.8-.32-1.56-.88-2.12M32 25c0 .27-.11.52-.29.71s-.44.29-.71.29H8V12h23c.27 0 .52.11.71.29s.29.44.29.71zm-10-9h6v-2h-6z"/>',
};

export const storageAdapterIconName = 'storage-adapter';
export const storageAdapterIcon: IconShapeTuple = [storageAdapterIconName, renderIcon(icon)];
