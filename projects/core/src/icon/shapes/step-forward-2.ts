/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M7.089 6.52a1.68 1.68 0 0 0-.513 1.2 1.66 1.66 0 0 0 .513 1.2L16.687 18 7.13 27.08c-.3.32-.464.739-.46 1.173.006.434.18.85.487 1.162s.725.497 1.166.517a1.75 1.75 0 0 0 1.209-.412L21.665 18 9.532 6.47A1.72 1.72 0 0 0 8.3 5.995a1.75 1.75 0 0 0-1.211.525M26.845 5c-.459 0-.899.18-1.223.498a1.7 1.7 0 0 0-.507 1.202v22.6c0 .45.182.883.507 1.202a1.75 1.75 0 0 0 2.447 0c.324-.319.507-.751.507-1.202V6.7c0-.45-.183-.883-.507-1.202A1.75 1.75 0 0 0 26.845 5"/>',
};

export const stepForward2IconName = 'step-forward-2';
export const stepForward2Icon: IconShapeTuple = [stepForward2IconName, renderIcon(icon)];
