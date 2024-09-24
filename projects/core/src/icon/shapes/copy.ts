/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M26 4h2c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v24c0 1.1.9 2 2 2V4zm4 2H10c-1.1 0-2 .9-2 2v24c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2M10 32V8h20v24z"/>',

  solid:
    '<path d="M31 6H9c-.55 0-1 .45-1 1v26c0 .55.45 1 1 1h22c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1m-5-2h2c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v24c0 1.1.9 2 2 2V4z"/>',
};

export const copyIconName = 'copy';
export const copyIcon: IconShapeTuple = [copyIconName, renderIcon(icon)];
