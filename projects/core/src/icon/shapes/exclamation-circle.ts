/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18 19.8c.55 0 1-.45 1-1V13c0-.55-.45-1-1-1s-1 .45-1 1v5.8c0 .55.45 1 1 1m.85 2.15a1.4 1.4 0 0 0-.39-.26 1.22 1.22 0 0 0-.92 0 1.4 1.4 0 0 0-.39.26c-.22.23-.35.53-.35.85s.13.62.35.85c.12.11.25.2.39.26a1.22 1.22 0 0 0 .92 0c.14-.06.27-.15.39-.26.22-.23.35-.53.35-.85 0-.16-.03-.31-.09-.46-.06-.14-.15-.28-.26-.39M18 6C11.38 6 6 11.38 6 18s5.38 12 12 12 12-5.38 12-12S24.62 6 18 6m0 22c-5.51 0-10-4.49-10-10S12.49 8 18 8s10 4.49 10 10-4.49 10-10 10"/>',
  solid:
    '<path d="M18 6C11.38 6 6 11.38 6 18s5.38 12 12 12 12-5.38 12-12S24.62 6 18 6m-1.2 6.65c0-.66.54-1.2 1.2-1.2s1.2.54 1.2 1.2v5.8c0 .66-.54 1.2-1.2 1.2s-1.2-.54-1.2-1.2zm2.18 11.5q-.21.195-.45.3c-.18.07-.35.11-.53.11s-.36-.03-.54-.11c-.15-.07-.3-.16-.46-.31-.26-.27-.41-.62-.41-.99s.14-.71.41-1q.21-.195.45-.3c.17-.07.35-.11.54-.11s.37.04.54.11q.225.105.45.3c.12.12.23.28.3.46s.11.35.11.53c0 .36-.14.71-.42 1z"/>',
};

export const exclamationCircleIconName = 'exclamation-circle';
export const exclamationCircleIcon: IconShapeTuple = [exclamationCircleIconName, renderIcon(icon)];
