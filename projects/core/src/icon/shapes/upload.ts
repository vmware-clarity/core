/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="m18 8-9.71 9.71a.996.996 0 1 0 1.41 1.41l7.29-7.29V31c0 .55.45 1 1 1s1-.45 1-1V11.83l7.29 7.29a.996.996 0 1 0 1.41-1.41L17.98 8zM5 6h26c.55 0 1-.45 1-1s-.45-1-1-1H5c-.55 0-1 .45-1 1s.45 1 1 1"/>',
  outlineAlerted:
    '<path d="m26.904 1.646-5.682 9.47c-.27.382-.294.879-.063 1.284.23.406.677.652 1.156.637h11.373a1.28 1.28 0 0 0 1.156-.637c.23-.405.206-.902-.063-1.284l-5.682-9.47a1.28 1.28 0 0 0-1.098-.609c-.451 0-.87.232-1.097.61M23.16 4l-1.2 2H5c-.55 0-1-.45-1-1s.45-1 1-1zm-3.443 5.737-.18.302a3.2 3.2 0 0 0-.535 1.803l-.012-.012V31c0 .55-.45 1-1 1s-1-.45-1-1V11.83L9.7 19.12a.996.996 0 1 1-1.41-1.41l9.7-9.7zM17.99 8.01 18 8h-.02zm4.207 7.027h2.82l2.673 2.673a.996.996 0 1 1-1.41 1.41z"/>',
  outlineBadged:
    '<path d="M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10m-6.71-7A7 7 0 0 0 23 6H5c-.55 0-1-.45-1-1s.45-1 1-1zm-5.3 4.01L18 8h-.02zm0 0-9.7 9.7a.996.996 0 1 0 1.41 1.41l7.29-7.29V31c0 .55.45 1 1 1s1-.45 1-1V11.83l7.29 7.29a.996.996 0 1 0 1.41-1.41z"/>',
};

export const uploadIconName = 'upload';
export const uploadIcon: IconShapeTuple = [uploadIconName, renderIcon(icon)];
