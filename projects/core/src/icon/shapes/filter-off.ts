/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M34 6.4c0-.8-.7-1.4-1.5-1.4H10.3l2 2H32v.6l-9.6 9.6 1.4 1.4L33.4 9c.4-.4.6-.9.6-1.4zM2.7 3l2 2h-1c-.8-.1-1.6.5-1.7 1.3v1.1c0 .5.2 1 .6 1.4L14 20.2v10.3l1.9.8V19.4L4 7.5V7h2.7L20 20.3v12.9l2 .8V22.3l10.1 10.1 1.4-1.4L4.1 1.6z"/>',
  solid:
    '<path d="M23.9 18.6 10.3 5.1h22.2c.8-.1 1.5.5 1.5 1.3v1.2c0 .5-.2 1-.6 1.4zM33.5 31 4.1 1.6 2.6 3l2.1 2.1H3.5C2.7 5 2 5.6 2 6.4v1.2c0 .5.2 1 .6 1.4L14 20.5v10.1l8 3.4V22.4l10.1 10.1z"/>',
};

export const filterOffIconName = 'filter-off';
export const filterOffIcon: IconShapeTuple = [filterOffIconName, renderIcon(icon)];
