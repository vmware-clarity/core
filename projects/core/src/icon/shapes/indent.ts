/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M5 10.75h26c.27 0 .52-.11.71-.29s.29-.44.29-.71-.11-.52-.29-.71a.97.97 0 0 0-.71-.29H5c-.27 0-.52.11-.71.29S4 9.48 4 9.75s.11.52.29.71.44.29.71.29m26 16H5c-.27 0-.52.11-.71.29s-.29.44-.29.71.11.52.29.71.44.29.71.29h26c.27 0 .52-.11.71-.29s.29-.44.29-.71-.11-.52-.29-.71a.97.97 0 0 0-.71-.29M4.52 22.09c-.04.19-.02.4.05.58s.2.34.37.45c.16.11.36.17.55.17.13 0 .26-.03.39-.08s.23-.13.32-.22l4.24-4.24-4.23-4.24a1 1 0 0 0-.71-.29c-.27 0-.52.1-.7.29-.19.19-.29.44-.29.7s.1.52.29.71l2.82 2.83-2.82 2.83c-.14.14-.24.32-.28.51M31 20.75H14c-.27 0-.52.11-.71.29s-.29.44-.29.71.11.52.29.71.44.29.71.29h17c.27 0 .52-.11.71-.29s.29-.44.29-.71-.11-.52-.29-.71a.97.97 0 0 0-.71-.29m0-6H14c-.27 0-.52.11-.71.29s-.29.44-.29.71.11.52.29.71.44.29.71.29h17c.27 0 .52-.11.71-.29s.29-.44.29-.71-.11-.52-.29-.71a.97.97 0 0 0-.71-.29"/>',
};

export const indentIconName = 'indent';
export const indentIcon: IconShapeTuple = [indentIconName, renderIcon(icon)];
