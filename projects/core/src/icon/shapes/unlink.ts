/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="m17.38 13.136 2.47-2.46h-.01l1.39-1.389a3.98 3.98 0 0 1 5.62 0c.74.74 1.15 1.75 1.15 2.79 0 1.039-.41 2.048-1.15 2.788l-.63.67-3.23 3.209 1.4 1.399 3.17-3.159.69-.69a5.97 5.97 0 0 0 1.74-4.228c0-1.59-.63-3.109-1.74-4.218l.02-.04a5.983 5.983 0 0 0-8.45 0l-3.65 3.648-.24.24 1.44 1.44zm16.33 19.142L3.71 2.29c-.39-.39-1.03-.39-1.42 0s-.39 1.03 0 1.42l10.82 10.815-5.37 5.348a5.98 5.98 0 0 0-1.75 4.228c0 1.59.63 3.11 1.75 4.229a5.983 5.983 0 0 0 8.45 0l5.37-5.348 10.73 10.726c.2.2.45.29.71.29s.51-.1.71-.29a.995.995 0 0 0 0-1.41zM14.8 26.88a3.98 3.98 0 0 1-5.62 0 3.95 3.95 0 0 1-1.15-2.789c0-1.04.41-2.049 1.15-2.789l5.38-5.347 5.61 5.607-5.36 5.318z"/>',
};

export const unlinkIconName = 'unlink';
export const unlinkIcon: IconShapeTuple = [unlinkIconName, renderIcon(icon)];
