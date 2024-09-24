/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M7.508 34h2.985a1 1 0 0 0 .737-.34l16.55-18c.255-.292.32-.707.163-1.063a1 1 0 0 0-.89-.597H21.7l9.017-10.31c.281-.295.355-.733.186-1.106A.995.995 0 0 0 29.95 2H16.585a1 1 0 0 0-.806.46l-10.629 17c-.197.31-.21.702-.033 1.023.176.322.514.52.88.517h6.518L6.632 32.56c-.15.307-.133.67.045.962a1 1 0 0 0 .83.478m2.558-2H9.16l5.871-11.56c.15-.307.134-.67-.044-.962a1 1 0 0 0-.831-.478h-6.4l9.375-15H27.77l-9.016 10.31a1 1 0 0 0-.187 1.106.995.995 0 0 0 .953.584h5.245z" clip-rule="evenodd"/>',
  solid:
    '<path d="M25.955.29a.5.5 0 0 0-.456-.29H11.374a.51.51 0 0 0-.426.23L.09 17.23a.48.48 0 0 0-.03.51c.087.163.26.263.446.26h7.777L1.417 31.25c-.08.16-.07.35.024.502a.53.53 0 0 0 .443.248h3.042a.5.5 0 0 0 .375-.16l17.815-18.99a.495.495 0 0 0 .103-.55.51.51 0 0 0-.478-.3h-6.834L25.874.82a.49.49 0 0 0 .081-.53"/>',
};

export const boltIconName = 'bolt';
export const boltIcon: IconShapeTuple = [boltIconName, renderIcon(icon)];
