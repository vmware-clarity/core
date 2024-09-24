/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M14.995 16c3.858 0 6.997-3.14 6.997-7s-3.139-7-6.997-7-6.998 3.14-6.998 7 3.14 7 6.998 7m0-12a5 5 0 0 1 0 10 5 5 0 0 1 0-10m18.702 16.88a.995.995 0 0 0-1.41 0L22.003 31.17l-5.288-5.29a.996.996 0 1 0-1.41 1.41L22.013 34l11.705-11.71a.996.996 0 0 0 0-1.41zm-8.176 2.58c.28.22.45.54.47.89l1.549-1.55a3.2 3.2 0 0 0-.8-.93c-1.87-1.44-5.888-3.85-11.735-3.85-5.848 0-9.866 2.42-11.736 3.85-.8.61-1.26 1.54-1.26 2.54v4.6c0 .55.45 1 1 1s1-.45 1-1v-4.6c0-.38.17-.73.48-.96 1.67-1.29 5.258-3.44 10.516-3.44s8.846 2.16 10.516 3.44z"/>',
  solid:
    '<path d="M14.99 16c3.858 0 6.996-3.14 6.996-7s-3.138-7-6.995-7-6.995 3.14-6.995 7 3.138 7 6.995 7m-1.998 10.59c0-.8.31-1.55.88-2.12a2.97 2.97 0 0 1 2.118-.88c.8 0 1.55.31 2.119.88l3.877 3.88 5.546-5.55c-.21-.35-.47-.68-.81-.94-1.868-1.44-5.885-3.85-11.731-3.85S5.129 20.43 3.26 21.86C2.46 22.47 2 23.4 2 24.4v4.62c0 .55.45 1 1 1 .04 0 .07-.02.11-.02h12.05l-1.288-1.29c-.57-.57-.88-1.32-.88-2.12m20.696-5.71a.995.995 0 0 0-1.41 0L21.997 31.17l-5.286-5.29a.996.996 0 1 0-1.41 1.41L22.007 34l11.702-11.71a.996.996 0 0 0 0-1.41z"/>',
};

export const assignUserIconName = 'assign-user';
export const assignUserIcon: IconShapeTuple = [assignUserIconName, renderIcon(icon)];
