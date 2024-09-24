/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="m18 28 9.71-9.71a.996.996 0 1 0-1.41-1.41l-7.29 7.29V5c0-.55-.45-1-1-1s-1 .45-1 1v19.17l-7.29-7.29a.996.996 0 1 0-1.41 1.41L18.02 28zm13 2H5c-.55 0-1 .45-1 1s.45 1 1 1h26c.55 0 1-.45 1-1s-.45-1-1-1"/>',
  outlineAlerted:
    '<path d="m18 28 9.71-9.71a.996.996 0 1 0-1.41-1.41l-7.29 7.29V5c0-.55-.45-1-1-1s-1 .45-1 1v19.17l-7.29-7.29a.996.996 0 1 0-1.41 1.41L18.02 28zm13 2H5c-.55 0-1 .45-1 1s.45 1 1 1h26c.55 0 1-.45 1-1s-.45-1-1-1"/><path d="m26.904 1.646-5.682 9.47c-.27.382-.294.879-.063 1.284.23.406.677.652 1.156.637h11.373a1.28 1.28 0 0 0 1.156-.637c.23-.405.206-.902-.063-1.284l-5.682-9.47a1.28 1.28 0 0 0-1.098-.609c-.451 0-.87.232-1.097.61"/>',
  outlineBadged:
    '<path d="M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10M18 28l9.71-9.71a.996.996 0 1 0-1.41-1.41l-7.29 7.29V5c0-.55-.45-1-1-1s-1 .45-1 1v19.17l-7.29-7.29a.996.996 0 1 0-1.41 1.41L18.02 28zm13 2H5c-.55 0-1 .45-1 1s.45 1 1 1h26c.55 0 1-.45 1-1s-.45-1-1-1"/>',
};

export const downloadIconName = 'download';
export const downloadIcon: IconShapeTuple = [downloadIconName, renderIcon(icon)];
