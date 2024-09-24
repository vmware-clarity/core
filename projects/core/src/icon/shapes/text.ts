/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M12.964 9.49c-.19-.6-.75-.99-1.37-.99h-.12c-.63-.01-1.19.38-1.39.98L2.14 26.93c-.09.18-.14.38-.14.59 0 .54.44.98.98.98.48 0 .91-.3 1.06-.76l2.042-4.58h10.784l2.04 4.52c.16.47.6.8 1.101.82.58 0 1.06-.48 1.06-1.06-.01-.19-.06-.38-.14-.56zM6.972 21.18l4.502-10.07 4.511 10.06H6.982zm25.64-5.84a6.22 6.22 0 0 0-4.552-1.56c-1.59 0-3.161.33-4.602.98-.34.16-.56.5-.57.88.04.49.43.88.92.91.13 0 .26-.03.38-.08a8.7 8.7 0 0 1 3.642-.8c2.641 0 4.192 1.31 4.192 3.86v.49a15.2 15.2 0 0 0-4.332-.6c-3.571 0-6.012 1.59-6.012 4.57v.05c0 2.9 2.64 4.41 5.262 4.41 1.99.06 3.881-.85 5.082-2.44v1.26c0 .54.44.98.98.98.27 0 .53-.11.71-.31.19-.2.28-.46.27-.73v-7.72c.12-1.52-.38-3.02-1.38-4.16zm-.55 7.58c0 2.25-2.131 3.83-4.712 3.83-1.9 0-3.542-1.04-3.542-2.82v-.06c0-1.77 1.471-2.95 4.112-2.95 1.4 0 2.791.21 4.132.6v1.4z" clip-rule="evenodd"/>',
};

export const textIconName = 'text';
export const textIcon: IconShapeTuple = [textIconName, renderIcon(icon)];
