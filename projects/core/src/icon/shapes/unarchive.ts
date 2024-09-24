/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="m13 9.717 4-3.923v12.315a1 1 0 0 0 2 0V5.794l4 3.923c.25.248.62.348.97.258.34-.09.61-.357.7-.705a.99.99 0 0 0-.26-.963L18 2l-6.39 6.307a.995.995 0 0 0 .06 1.32c.36.358.93.398 1.33.09m17.5 2.433H21v1.987h9v3.972h-9c0 .735-.28 1.44-.78 1.987H32V13.64c0-.824-.67-1.49-1.5-1.49M6 18.11h9c0 .734.28 1.44.78 1.986H4V13.64c0-.824.67-1.49 1.5-1.49H15v1.987H6zm8 5.958a1 1 0 0 0 1 .993h6a1 1 0 0 0 1-.993 1 1 0 0 0-1-.993h-6a1 1 0 0 0-1 .993m-8 7.946h24v-9.932h2v9.932A2 2 0 0 1 30 34H6a2 2 0 0 1-2-1.986v-9.932h2z" clip-rule="evenodd"/>',
  solid:
    '<path fill-rule="evenodd" d="m13 9.717 4-3.923v12.315a1 1 0 0 0 2 0V5.794l4 3.923c.25.248.62.348.97.258.34-.09.61-.357.7-.705a.99.99 0 0 0-.26-.963L18 2l-6.39 6.307a.995.995 0 0 0 .06 1.32c.36.358.93.398 1.33.09m17.5 2.433H21v5.96h11v-4.47c0-.824-.67-1.49-1.5-1.49m-25 0H15v5.96H4v-4.47c0-.824.67-1.49 1.5-1.49M18 21.09c-.85 0-1.65-.368-2.22-.993H4v11.918A2 2 0 0 0 6 34h24a2 2 0 0 0 2-1.986V20.096H20.21a3.02 3.02 0 0 1-2.21.993m3 3.973a1 1 0 0 0 1-.994 1 1 0 0 0-1-.993h-6a1 1 0 0 0-1 .993 1 1 0 0 0 1 .993z" clip-rule="evenodd"/>',
};

export const unarchiveIconName = 'unarchive';
export const unarchiveIcon: IconShapeTuple = [unarchiveIconName, renderIcon(icon)];
