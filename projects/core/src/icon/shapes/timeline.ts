/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M10 18c0-1.3-.8-2.4-2-2.8v-3.4c1.2-.4 2-1.5 2-2.8 0-1.7-1.3-3-3-3S4 7.3 4 9c0 1.3.8 2.4 2 2.8v3.4c-1.2.4-2 1.5-2 2.8s.8 2.4 2 2.8v3.4c-1.2.4-2 1.5-2 2.8 0 1.7 1.3 3 3 3s3-1.3 3-3c0-1.3-.8-2.4-2-2.8v-3.4c1.2-.4 2-1.5 2-2.8m21-8H15c-.6 0-1-.4-1-1s.4-1 1-1h16c.6 0 1 .4 1 1s-.4 1-1 1m0 9H15c-.6 0-1-.4-1-1s.4-1 1-1h16c.6 0 1 .4 1 1s-.4 1-1 1m0 9H15c-.6 0-1-.4-1-1s.4-1 1-1h16c.6 0 1 .4 1 1s-.4 1-1 1"/>',
};

export const timelineIconName = 'timeline';
export const timelineIcon: IconShapeTuple = [timelineIconName, renderIcon(icon)];
