/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M22.186 17.72c1.698-.77 2.781-2.529 2.745-4.454v-.06a4.6 4.6 0 0 0-1.284-3.313 6.8 6.8 0 0 0-5.03-1.763h-6.862a1.64 1.64 0 0 0-1.244.488 1.78 1.78 0 0 0-.51 1.275v16.448a1.8 1.8 0 0 0 .493 1.26 1.65 1.65 0 0 0 1.212.513h7.186c4.285 0 7.108-1.916 7.108-5.482v-.062c0-2.71-1.559-4.055-3.814-4.85m-8.578-6.257h4.45c1.962 0 3.09.907 3.09 2.374v.061c0 1.712-1.334 2.538-3.315 2.538h-4.225zm5.127 13.278c2.108 0 3.393-.856 3.393-2.476v-.01c0-1.519-1.177-2.416-3.618-2.416h-4.902v4.902z" clip-rule="evenodd"/>',
};

export const boldIconName = 'bold';
export const boldIcon: IconShapeTuple = [boldIconName, renderIcon(icon)];
