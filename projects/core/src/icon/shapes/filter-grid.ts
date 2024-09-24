/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="m15 25.86 2 1v-6.59a1 1 0 0 0-.29-.7L10.23 13h15.56l-6.47 6.57a1 1 0 0 0-.29.7L19 28l2 1v-8.32L27.58 14a1.46 1.46 0 0 0 .42-1v-1a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v1a1.46 1.46 0 0 0 .42 1L15 20.68Z"/>',
  solid:
    '<path d="M8 11v1.12a.5.5 0 0 0 .15.35l7.28 7.36a.5.5 0 0 1 .15.35v6.89a.5.5 0 0 0 .28.45l3.95 1.41a.5.5 0 0 0 .72-.45v-8.39a.54.54 0 0 1 .18-.35l7.12-7.25a.5.5 0 0 0 .15-.35V11Z"/>',
};

export const filterGridIconName = 'filter-grid';
export const filterGridIcon: IconShapeTuple = [filterGridIconName, renderIcon(icon)];
