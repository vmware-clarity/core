/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M18 2C9.163 2 2 9.163 2 18s7.163 16 16 16 16-7.163 16-16A16 16 0 0 0 18 2m0 30c-7.732 0-14-6.268-14-14S10.268 4 18 4s14 6.268 14 14a14 14 0 0 1-14 14m-1-5.14-2-1v-5.18L8.42 14A1.46 1.46 0 0 1 8 13v-1a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v1a1.46 1.46 0 0 1-.42 1L21 20.68V29l-2-1 .03-7.73a1 1 0 0 1 .29-.7L25.79 13H10.23l6.48 6.57a1 1 0 0 1 .29.7z" clip-rule="evenodd"/>',
  solid:
    '<path fill-rule="evenodd" d="M18 2C9.163 2 2 9.163 2 18s7.163 16 16 16 16-7.163 16-16A16 16 0 0 0 18 2m0 30c-7.732 0-14-6.268-14-14S10.268 4 18 4s14 6.268 14 14a14 14 0 0 1-14 14M8 12.12V11h19.98v1.14a.5.5 0 0 1-.15.35l-7.12 7.25a.54.54 0 0 0-.18.35v8.39a.5.5 0 0 1-.72.45l-3.95-1.41a.5.5 0 0 1-.28-.45v-6.89a.5.5 0 0 0-.15-.35l-7.28-7.36a.5.5 0 0 1-.15-.35" clip-rule="evenodd"/>',
};

export const filterGridCircleIconName = 'filter-grid-circle';
export const filterGridCircleIcon: IconShapeTuple = [filterGridCircleIconName, renderIcon(icon)];
