/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="m31.49 8.922-12-6.792a.99.99 0 0 0-1.06.05l-14 9.623c-.27.19-.43.5-.43.82v13.585c0 .36.19.69.51.87l12 6.792a.99.99 0 0 0 1.06-.05l14-9.633c.27-.19.43-.5.43-.82V9.792c0-.36-.19-.69-.51-.87M19.05 4.181l9.73 5.511-4.68 3.221-9.73-5.511zM16 31.299 6 25.637V13.934l10 5.661zm.95-13.464-9.73-5.512 5.32-3.661 9.73 5.512zM30 22.857l-12 8.252V19.535l12-8.252z"/>',
  solid:
    '<path d="m31.49 8.922-12-6.792a.99.99 0 0 0-1.06.05L4.94 11.463l-.5.34c-.27.19-.43.5-.43.82v13.585c0 .36.19.69.51.87l11.5 6.512.5.28a.99.99 0 0 0 1.06-.05l14-9.633c.27-.19.43-.5.43-.82V9.792c0-.36-.19-.69-.51-.87zM19.05 4.181l9.73 5.511-4.68 3.221-9.73-5.511zm-1.94 13.534-9.72-5.512 5.15-3.54 9.73 5.51-5.15 3.542zm12.88 5.142-12 8.252V19.535l12-8.252z"/>',
};

export const bundleIconName = 'bundle';
export const bundleIcon: IconShapeTuple = [bundleIconName, renderIcon(icon)];
