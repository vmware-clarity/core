/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M23.53 19.81a7.5 7.5 0 0 1-1.65-.18 10.5 10.5 0 0 1 .72 2.13h.93a9.5 9.5 0 0 0 3-.49l-.93-1.81a7.7 7.7 0 0 1-2.07.35m-5.17-1.94-.36-.38a7.4 7.4 0 0 1-2.2-5.92 7.3 7.3 0 0 1 1.54-4L17.26 9a1 1 0 0 0 .91 1h.09a1 1 0 0 0 1-.91L19.6 5a1 1 0 0 0-.29-.79 1 1 0 0 0-.79-.21l-4.09.35a1 1 0 0 0 .17 2l1.29-.11a9.45 9.45 0 0 0-2.05 5.32 9.28 9.28 0 0 0 2.67 7.26l.31.37a7.33 7.33 0 0 1 2.06 4.91 7.4 7.4 0 0 1-.26 2.47l1.8.91a8.8 8.8 0 0 0 .45-3.51 9.28 9.28 0 0 0-2.51-6.1m14.04.04-1.21.09a9.65 9.65 0 0 0-7.66-15.55 9.3 9.3 0 0 0-3 .49l.91 1.8a7.67 7.67 0 0 1 9.76 7.39 7.58 7.58 0 0 1-1.65 4.72l.1-1.54a1 1 0 1 0-2-.13l-.28 4.08a1 1 0 0 0 .31.78.94.94 0 0 0 .69.28h.1l4.08-.42a1 1 0 0 0 .9-1.1 1 1 0 0 0-1.05-.89M4.07 20.44h.08l4.09-.35a1 1 0 1 0-.17-2l-1.39.12a7.63 7.63 0 0 1 4.52-1.49 8 8 0 0 1 1.63.18 10.2 10.2 0 0 1-.71-2.13h-.92a9.66 9.66 0 0 0-5.9 2l.12-1.31a1 1 0 0 0-.92-1.08 1 1 0 0 0-1.08.91l-.35 4.08a1 1 0 0 0 1 1.08Zm14.35 7.79-4.09.27a1 1 0 0 0 .13 2l1.54-.11a7.71 7.71 0 0 1-12.54-6 7.6 7.6 0 0 1 .29-2L2 21.46a9.6 9.6 0 0 0-.47 2.95A9.7 9.7 0 0 0 17.19 32l-.12 1.18a1 1 0 0 0 .89 1.1h.11a1 1 0 0 0 1-.9l.42-4.06a1 1 0 0 0-1.06-1.1Z"/>',
};

export const ciCdIconName = 'ci-cd';
export const ciCdIcon: IconShapeTuple = [ciCdIconName, renderIcon(icon)];
