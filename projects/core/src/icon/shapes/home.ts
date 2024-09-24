/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="m18.772 2.29 15.056 15-.01.01a.997.997 0 0 1-.052 1.358 1.007 1.007 0 0 1-1.363.052L18.06 4.41 3.716 18.7c-.398.34-.992.317-1.362-.052A.997.997 0 0 1 2.3 17.29l15.056-15a1.006 1.006 0 0 1 1.415 0"/><path d="M23.078 32h5.019V17.76l2.007 2V32c0 1.105-.898 2-2.007 2h-7.026V24h-6.023v10H8.022a2.004 2.004 0 0 1-2.007-2V20l2.007-2v14h5.019V22h10.037z"/>',
  solid:
    '<path d="M32.35 19.715a1.003 1.003 0 0 0 1.423-1.41L18.743 3.3a1.003 1.003 0 0 0-1.413 0L2.3 18.304a1 1 0 0 0 .053 1.358c.37.37.963.393 1.36.053L18.032 5.41z"/><path d="M6.008 20.835 18.032 8.792l12.024 11.973V33.01c0 1.105-.897 2-2.004 2h-7.014V25.006h-6.012V35.01H8.012a2 2 0 0 1-2.004-2z"/>',
};

export const homeIconName = 'home';
export const homeIcon: IconShapeTuple = [homeIconName, renderIcon(icon)];
