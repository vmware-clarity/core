/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M1 2.125h26c.27 0 .52-.11.71-.29s.29-.44.29-.71-.11-.52-.29-.71a.97.97 0 0 0-.71-.29H1c-.27 0-.52.11-.71.29s-.29.44-.29.71.11.52.29.71.44.29.71.29m26 16H1c-.27 0-.52.11-.71.29s-.29.44-.29.71.11.52.29.71.44.29.71.29h26c.27 0 .52-.11.71-.29s.29-.44.29-.71-.11-.52-.29-.71a.97.97 0 0 0-.71-.29M6.43 6.795c.04-.19.02-.4-.05-.58a.95.95 0 0 0-.37-.45 1 1 0 0 0-.55-.17c-.13 0-.26.03-.39.08s-.23.13-.32.22L.5 10.135l4.24 4.24c.19.19.44.29.71.29s.52-.1.7-.29c.19-.19.29-.44.29-.7s-.1-.52-.29-.71l-2.82-2.83 2.82-2.83c.14-.14.24-.32.28-.51M27 12.125H10c-.27 0-.52.11-.71.29s-.29.44-.29.71.11.52.29.71.44.29.71.29h17c.27 0 .52-.11.71-.29s.29-.44.29-.71-.11-.52-.29-.71a.97.97 0 0 0-.71-.29m0-6H10c-.27 0-.52.11-.71.29s-.29.44-.29.71.11.52.29.71.44.29.71.29h17c.27 0 .52-.11.71-.29s.29-.44.29-.71-.11-.52-.29-.71a.97.97 0 0 0-.71-.29"/>',
};

export const outdentIconName = 'outdent';
export const outdentIcon: IconShapeTuple = [outdentIconName, renderIcon(icon)];
