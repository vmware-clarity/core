/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M6 18c0-5.87 4.2-10.85 9.98-11.83A11.96 11.96 0 0 1 26.92 10H21c-.55 0-1 .45-1 1s.45 1 1 1h9V3c0-.55-.45-1-1-1s-1 .45-1 1v5.24C25.39 5.56 21.82 4 18 4c-.79 0-1.58.07-2.36.2A13.955 13.955 0 0 0 4.05 19.15c.04.52.48.92 1 .92h.08c.55-.04.96-.53.92-1.08-.03-.33-.04-.65-.04-.99zm25.96-1.05a.997.997 0 1 0-1.99.15q.03.45.03.9c0 6.62-5.38 12-12 12-3.45 0-6.67-1.48-8.93-4H15c.55 0 1-.45 1-1s-.45-1-1-1H6v9c0 .55.45 1 1 1s1-.45 1-1v-5.24C10.61 30.44 14.18 32 18 32c7.72 0 14-6.28 14-14 0-.35-.01-.71-.04-1.05"/>',
};

export const syncIconName = 'sync';
export const syncIcon: IconShapeTuple = [syncIconName, renderIcon(icon)];
