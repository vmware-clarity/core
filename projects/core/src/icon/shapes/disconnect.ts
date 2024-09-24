/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M6.025 11c.587-2.936 3.199-5.038 6.211-5h4.862v12h-4.821c-3.025.05-5.655-2.054-6.252-5H2.13v-2zm6.211 5h2.95V8h-2.95C9.93 7.921 7.99 9.708 7.898 12c.109 2.284 2.037 4.063 4.338 4m21.894 7h-3.805c-.604-2.942-3.229-5.041-6.251-5H19.11v2h-5.033c-.556 0-1.006.448-1.006 1s.45 1 1.006 1h5.033v4h-5.033c-.556 0-1.006.448-1.006 1s.45 1 1.006 1h5.033v2h4.973c3.029.054 5.663-2.05 6.261-5h3.785zm-13.006 5h2.96c2.307.079 4.246-1.708 4.338-4-.092-2.292-2.03-4.079-4.338-4h-2.96z" clip-rule="evenodd"/>',
  solid:
    '<path d="M5.814 11c.59-2.95 3.222-5.057 6.249-5h5.031v12h-5.031c-3.009.03-5.615-2.068-6.209-5H2v-2zm24.503 12h3.673l.01 2h-3.663c-.597 2.95-3.231 5.054-6.259 5h-4.971v-2h-5.031a1.003 1.003 0 0 1-1.007-1c0-.552.45-1 1.006-1h5.032v-4h-5.031a1.003 1.003 0 0 1-1.007-1c0-.552.45-1 1.006-1h5.032v-2h4.96c3.022-.041 5.646 2.058 6.25 5"/>',
};

export const disconnectIconName = 'disconnect';
export const disconnectIcon: IconShapeTuple = [disconnectIconName, renderIcon(icon)];
