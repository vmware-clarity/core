/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="m17.99 6-10.23.08 2.44-2.4a.97.97 0 0 0 0-1.39c-.39-.38-1.02-.38-1.41 0L4 7l4.79 4.71c.2.19.45.29.71.29s.51-.1.71-.29a.97.97 0 0 0 0-1.39L7.93 8.08 18 8c6.62 0 12 5.38 12 12s-5.38 12-12 12S6 26.62 6 20c0-.55-.45-1-1-1s-1 .45-1 1c0 7.72 6.28 14 14 14s14-6.28 14-14S25.72 6 17.99 6M15 26c.19 0 .38-.05.54-.16l8.46-5.5a.998.998 0 0 0 0-1.68l-8.46-5.5c-.31-.2-.7-.21-1.02-.04s-.52.51-.52.88v11c0 .37.2.7.52.88q.225.12.48.12m1-10.16 5.63 3.66L16 23.16z"/>',
};

export const replayAllIconName = 'replay-all';
export const replayAllIcon: IconShapeTuple = [replayAllIconName, renderIcon(icon)];
