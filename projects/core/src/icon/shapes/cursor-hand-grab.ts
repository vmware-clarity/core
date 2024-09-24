/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M28.621 11h-.25c-.49 0-.959.11-1.378.3-.04-1.83-1.59-3.3-3.488-3.3-.6 0-1.159.16-1.648.42-.42-1.39-1.69-2.42-3.218-2.42h-.25a3.376 3.376 0 0 0-3.367 3.3c-.42-.19-.89-.3-1.38-.3h-.25a3.38 3.38 0 0 0-3.376 3.38v1.68C3.44 17.1 3.41 20.73 4.59 24.13c.17.67 1.738 6.61 5.865 9.67.17.13.38.2.6.2h14.509c.22 0 .44-.08.62-.21 3.696-2.89 5.815-7.23 5.815-11.91v-7.85.34c0-1.86-1.51-3.38-3.378-3.38zm1.38 3.04v7.85c0 3.94-1.74 7.61-4.787 10.12h-13.82c-3.497-2.81-4.856-8.33-4.866-8.39 0-.03-.02-.07-.03-.1-1.259-3.58-.11-5.28 3.517-7.23v6.72c0 .55.45 1 1 1s.999-.45.999-1V12.38c0-.76.62-1.38 1.379-1.38h.25c.76 0 1.379.62 1.379 1.38V16h1.998V9.38c0-.76.62-1.38 1.38-1.38h.249c.76 0 1.379.62 1.379 1.38V16h1.998v-4.62c0-.76.67-1.38 1.5-1.38.829 0 1.498.62 1.498 1.38v3V14v2h1.999v-2 .38c0-.76.62-1.38 1.378-1.38h.25c.76 0 1.38.62 1.38 1.38v-.34z"/>',
};

export const cursorHandGrabIconName = 'cursor-hand-grab';
export const cursorHandGrabIcon: IconShapeTuple = [cursorHandGrabIconName, renderIcon(icon)];
