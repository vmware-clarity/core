/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M22.125 2.5H33.04c.553 0 1.001.449 1.001 1.002v10.926a1.002 1.002 0 1 1-2.002 0v-8.46l-8.771 8.962a1.001 1.001 0 1 1-1.432-1.404l8.83-9.021h-8.54a1.002 1.002 0 0 1 0-2.005"/><path fill-rule="evenodd" d="M11.552 11.25 2.54 16.434c-.311.18-.502.513-.501.872v11.026c-.001.36.19.693.5.872l9.012 5.163a1 1 0 0 0 1.001 0l9.011-5.163c.311-.18.503-.512.501-.872V17.305c.002-.36-.19-.692-.5-.872l-9.012-5.182a1 1 0 0 0-1.001 0m-.54 20.4-7.01-4.01v-8.66l7.01 4.009zM4.813 17.404l7.198 4.14 7.22-4.11-7.22-4.13zm15.21 10.246-7.01 4.01v-8.671l7.01-4.01z" clip-rule="evenodd"/>',
  solid:
    '<path d="M22.1 2.5H33c.552 0 1 .455 1 1.017v11.087c0 .562-.448 1.017-1 1.017s-1-.455-1-1.017V6.02l-8.76 9.094a.99.99 0 0 1-.964.274 1.01 1.01 0 0 1-.715-.712 1.03 1.03 0 0 1 .249-.986l8.82-9.155H22.1c-.552 0-1-.455-1-1.017s.448-1.017 1-1.017m-9.64 8.879a.99.99 0 0 0-1 0l-8.68 5.086 9.22 5.36 9.19-5.35zM2.5 29.557a1.02 1.02 0 0 1-.5-.885v-10.63l9 5.27V34.5zm19 0L13 34.5V23.29l9-5.238v10.62a1.02 1.02 0 0 1-.5.885"/>',
};

export const deployIconName = 'deploy';
export const deployIcon: IconShapeTuple = [deployIconName, renderIcon(icon)];
