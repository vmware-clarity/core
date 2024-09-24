/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="m17.99 6-10.23.08 2.44-2.4a.97.97 0 0 0 0-1.39c-.39-.38-1.02-.38-1.41 0L4 7l4.79 4.71c.2.19.45.29.71.29s.51-.1.71-.29a.97.97 0 0 0 0-1.39L7.93 8.08 18 8c6.62 0 12 5.38 12 12s-5.38 12-12 12S6 26.62 6 20c0-.55-.45-1-1-1s-1 .45-1 1c0 7.72 6.28 14 14 14s14-6.28 14-14S25.72 6 17.99 6m0 22c.55 0 1-.45 1-1V13c0-.35-.18-.67-.47-.85a.99.99 0 0 0-.97-.04l-4 2c-.49.25-.69.85-.45 1.34.25.49.85.69 1.34.45l2.55-1.28V27c0 .55.45 1 1 1"/>',
};

export const replayOneIconName = 'replay-one';
export const replayOneIcon: IconShapeTuple = [replayOneIconName, renderIcon(icon)];
