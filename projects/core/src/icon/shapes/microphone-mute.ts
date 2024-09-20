/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M30 17h-2c0 1.8-.5 3.5-1.4 5l1.5 1.5c1.2-2 1.8-4.2 1.9-6.5M18 4c2.8 0 5 2.2 5 5v8c0 .4-.1.8-.2 1.2l1.6 1.6c.4-.9.6-1.8.6-2.8V9c0-3.9-3.2-7-7.1-6.9-2.9 0-5.6 1.9-6.5 4.7L13 8.3c.5-2.4 2.6-4.1 5-4.3m7.2 22.6 6.9 6.9 1.4-1.4L4 2.6 2.6 4l8.4 8.4V17c0 3.9 3.1 7 7 7 1.3 0 2.5-.3 3.6-1l2.2 2.2C22.1 26.4 20.1 27 18 27c-5.4.2-9.8-4.1-10-9.4V17H6c.1 6.2 4.8 11.4 11 12v3h-3c-.6 0-1 .4-1 1s.4 1 1 1h8c.6 0 1-.4 1-1s-.4-1-1-1h-3v-3c2.2-.2 4.4-1 6.2-2.4m-11.4-6.9c-.5-.8-.8-1.7-.8-2.7v-2.6l7.1 7.1c-2.2 1-4.9.3-6.3-1.8"/>',
  solid:
    '<path d="M30 17h-2c0 1.8-.5 3.5-1.4 5l1.5 1.5c1.2-2 1.8-4.2 1.9-6.5m-5 0V9c0-3.9-3.2-7-7.1-6.9-2.9 0-5.6 1.9-6.5 4.7l13 13c.4-.9.6-1.9.6-2.8m.2 9.6 6.9 6.9 1.4-1.4L4 2.6 2.6 4l8.4 8.4V17c0 3.9 3.1 7 7 7 1.3 0 2.5-.3 3.6-1l2.2 2.2C22.1 26.4 20.1 27 18 27c-5.4.2-9.8-4.1-10-9.4V17H6c.1 6.2 4.8 11.4 11 12v3h-3c-.6 0-1 .4-1 1s.4 1 1 1h8c.6 0 1-.4 1-1s-.4-1-1-1h-3v-3c2.2-.2 4.4-1 6.2-2.4"/>',
};

export const microphoneMuteIconName = 'microphone-mute';
export const microphoneMuteIcon: IconShapeTuple = [microphoneMuteIconName, renderIcon(icon)];
