/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M6 22h24v2H6zm20 4h4v2h-4zM13 9.92 17 6v13a1 1 0 1 0 2 0V6l4 3.95a1 1 0 1 0 1.38-1.45L18 2.16 11.61 8.5A1 1 0 0 0 13 9.92"/><path d="M30.84 13.37A1.94 1.94 0 0 0 28.93 12H21v2h7.95c1.05 2.94 2.77 7.65 3.05 8.48V30H4v-7.52C4.28 21.65 7.05 14 7.05 14H15v-2H7.07a1.92 1.92 0 0 0-1.9 1.32C2 22 2 22.1 2 22.33V30a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2v-7.67c0-.23 0-.33-3.16-8.96"/>',

  outlineAlerted:
    '<path d="M6 22h24v2H6zm20 4h4v2h-4zM13 9.92 17 6v13a1 1 0 1 0 2 0V6l1.47 1.46 1-1.79L18 2.16 11.61 8.5A1 1 0 0 0 13 9.92"/><path d="M31.58 15.4h-2.12c1 2.85 2.31 6.37 2.54 7.08V30H4v-7.52C4.28 21.65 7.05 14 7.05 14H15v-2H7.07a1.92 1.92 0 0 0-1.9 1.32C2 22 2 22.1 2 22.33V30a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2v-7.67c0-.21 0-.33-2.42-6.93"/>',

  outlineBadged:
    '<path d="M6 22h24v2H6zm20 4h4v2h-4zM13 9.92 17 6v13a1 1 0 1 0 2 0V6l4 3.95a1 1 0 0 0 .71.29h.11a7.46 7.46 0 0 1-1.25-3.52L18 2.16 11.61 8.5A1 1 0 0 0 13 9.92"/><path d="M30.87 13.45a8 8 0 0 1-.87.05 7.46 7.46 0 0 1-4.49-1.5H21v2h7.95c1.05 2.94 2.77 7.65 3.05 8.48V30H4v-7.52C4.28 21.65 7.05 14 7.05 14H15v-2H7.07a1.92 1.92 0 0 0-1.9 1.32C2 22 2 22.1 2 22.33V30a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2v-7.67c0-.23 0-.33-3.13-8.88"/>',

  solid:
    '<path d="M2 24v6a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2v-6Zm28 5h-4v-2h4Zm.84-15.63A1.94 1.94 0 0 0 28.93 12H21v6a3 3 0 1 1-6 0v-6H7.07a1.92 1.92 0 0 0-1.9 1.32c-2.31 6.36-2.93 8.11-3.1 8.68h31.86c-.16-.57-.79-2.31-3.09-8.63"/><path d="M13 9.92 17 6v12a1 1 0 1 0 2 0V6l4 3.95a1 1 0 1 0 1.38-1.45L18 2.16 11.61 8.5A1 1 0 0 0 13 9.92"/>',

  solidAlerted:
    '<path d="M2 24v6a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2v-6Zm28 5h-4v-2h4ZM13 9.92 17 6v12a1 1 0 1 0 2 0V6l1.47 1.46 1-1.79L18 2.16 11.61 8.5A1 1 0 0 0 13 9.92"/><path d="M31.58 15.4h-9.35a3.6 3.6 0 0 1-1.23-.24V18a3 3 0 1 1-6 0v-6H7.07a1.92 1.92 0 0 0-1.9 1.32c-2.31 6.36-2.93 8.11-3.1 8.68h31.86c-.14-.51-.65-1.93-2.35-6.6"/>',

  solidBadged:
    '<path d="M2 24v6a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2v-6Zm28 5h-4v-2h4ZM13 9.92 17 6v12a1 1 0 1 0 2 0V6l4 3.95a1 1 0 0 0 .71.29h.11a7.46 7.46 0 0 1-1.25-3.52L18 2.16 11.61 8.5A1 1 0 0 0 13 9.92"/><path d="M30.87 13.45a8 8 0 0 1-.87.05 7.46 7.46 0 0 1-4.49-1.5H21v6a3 3 0 1 1-6 0v-6H7.07a1.92 1.92 0 0 0-1.9 1.32c-2.31 6.36-2.93 8.11-3.1 8.68h31.86c-.16-.57-.78-2.3-3.06-8.55"/>',
};

export const backupRestoreIconName = 'backup-restore';
export const backupRestoreIcon: IconShapeTuple = [backupRestoreIconName, renderIcon(icon)];
