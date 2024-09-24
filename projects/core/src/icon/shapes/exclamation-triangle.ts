/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M17.994 20.8c.55 0 1-.45 1-1V14c0-.55-.45-1-1-1s-1 .45-1 1v5.8c0 .55.45 1 1 1m.85 2.15a1.4 1.4 0 0 0-.39-.26 1.22 1.22 0 0 0-.92 0 1.4 1.4 0 0 0-.39.26c-.22.23-.35.53-.35.85s.13.62.35.85c.12.11.25.2.39.26a1.2 1.2 0 0 0 .92 0c.14-.06.27-.15.39-.26.22-.23.35-.53.35-.85 0-.16-.03-.31-.09-.46a1.3 1.3 0 0 0-.26-.39m11.755 2.48L20.663 7.57A3.02 3.02 0 0 0 17.994 6a3.02 3.02 0 0 0-2.669 1.57L5.39 25.43c-.54.96-.52 2.1.03 3.05S6.96 30 8.059 30h19.87c1.1 0 2.08-.57 2.64-1.52s.57-2.09.03-3.05m-1.75 2.04c-.09.16-.37.53-.91.53H8.06c-.55 0-.82-.37-.91-.53s-.28-.58 0-1.06l9.916-17.86c.27-.49.74-.55.92-.55s.649.05.919.55l9.935 17.86c.27.48.08.9-.01 1.06z"/>',
  solid:
    '<path d="M30.599 25.43 20.663 7.57A3.02 3.02 0 0 0 17.994 6a3.02 3.02 0 0 0-2.669 1.57L5.39 25.43c-.54.96-.52 2.1.03 3.05S6.96 30 8.059 30h19.87c1.1 0 2.08-.57 2.64-1.52s.57-2.09.03-3.05M16.795 13.5c0-.66.54-1.2 1.2-1.2s1.199.54 1.199 1.2v5.8c0 .66-.54 1.2-1.2 1.2s-1.2-.54-1.2-1.2zM18.974 25q-.21.195-.45.3c-.18.07-.35.11-.53.11s-.36-.03-.54-.11c-.15-.07-.3-.17-.46-.31-.26-.27-.41-.62-.41-.99s.14-.71.41-1q.21-.195.45-.3c.17-.07.35-.11.54-.11s.37.04.54.11q.225.105.45.3c.12.12.23.28.3.46s.11.35.11.53c0 .36-.14.71-.42 1z"/>',
};

export const exclamationTriangleIconName = 'exclamation-triangle';
export const exclamationTriangleIcon: IconShapeTuple = [exclamationTriangleIconName, renderIcon(icon)];
