/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M23.41 25.25a1 1 0 0 1-.54-1.85 6.21 6.21 0 0 0-.19-10.65 1 1 0 1 1 1-1.73 8.21 8.21 0 0 1 .24 14.06 1 1 0 0 1-.51.17"/><path d="M25.62 31.18a1 1 0 0 1-.45-1.89A12.44 12.44 0 0 0 25 6.89a1 1 0 1 1 .87-1.8 14.44 14.44 0 0 1 .24 26 1 1 0 0 1-.49.09m-7.62.88a2 2 0 0 1-1.42-.59L9.14 24H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h5.22l7.33-7.39A2 2 0 0 1 20 6v24a2 2 0 0 1-1.24 1.85 2 2 0 0 1-.76.21M4 14v8h5.56a1 1 0 0 1 .71.3L18 30.06V6l-7.65 7.7a1 1 0 0 1-.71.3Zm14-8"/>',
  solid:
    '<path d="M23.41 25.25a1 1 0 0 1-.54-1.85 6.21 6.21 0 0 0-.19-10.65 1 1 0 1 1 1-1.73 8.21 8.21 0 0 1 .24 14.06 1 1 0 0 1-.51.17"/><path d="M25.62 31.18a1 1 0 0 1-.45-1.89A12.44 12.44 0 0 0 25 6.89a1 1 0 1 1 .87-1.8 14.44 14.44 0 0 1 .24 26 1 1 0 0 1-.49.09M18.33 4l-9.26 8h-6a1 1 0 0 0-1 1v9.92a1 1 0 0 0 1 1h5.81l9.46 8.24a1 1 0 0 0 1.66-.73V4.72A1 1 0 0 0 18.33 4"/>',
};

export const volumeUpIconName = 'volume-up';
export const volumeUpIcon: IconShapeTuple = [volumeUpIconName, renderIcon(icon)];
