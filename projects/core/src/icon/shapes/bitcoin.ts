/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M23.939 16.88c1.974-1.397 2.799-3.82 2.058-6.041-.74-2.223-2.886-3.762-5.35-3.839V4c0-.552-.475-1-1.06-1-.584 0-1.058.448-1.058 1v3h-3.177V4c0-.552-.473-1-1.058-1s-1.059.448-1.059 1v3h-3.176C9.474 7 9 7.448 9 8v20c0 .552.474 1 1.059 1h3.176v3c0 .552.474 1 1.059 1s1.058-.448 1.058-1v-3h3.177v3c0 .552.474 1 1.058 1s1.06-.448 1.06-1v-3h.084c3.537-.082 6.339-2.849 6.268-6.19v-.62c.014-2.15-1.141-4.155-3.06-5.31M11.118 9h9.2c1.62-.024 3.077.923 3.631 2.36a3.35 3.35 0 0 1-.499 3.177c-.7.92-1.826 1.465-3.026 1.463h-9.306zm9.592 18c2.373-.076 4.237-1.948 4.171-4.19v-.62c.066-2.242-1.798-4.114-4.171-4.19h-9.593v9z" clip-rule="evenodd"/>',
  solid:
    '<path d="M23 13.75a2.24 2.24 0 0 0-2.23-2.25H14.5V16h6.3a2.22 2.22 0 0 0 2.2-2.25m-8.5 4.72h6.68a2.71 2.71 0 0 1 2.63 2.75v.48a2.7 2.7 0 0 1-2.63 2.77H14.5z"/><path fill-rule="evenodd" d="M2 18C2 9.163 9.163 2 18 2a16 16 0 0 1 16 16c0 8.837-7.163 16-16 16S2 26.837 2 18m19.18 9a5.22 5.22 0 0 0 5.13-5.27v-.49A5.31 5.31 0 0 0 24.2 17 4.72 4.72 0 0 0 21 9V7.07a1 1 0 1 0-2 0V9h-2V7.07a1 1 0 1 0-2 0V9h-1.75A1.25 1.25 0 0 0 12 10.23v15.52c0 .69.56 1.25 1.25 1.25H15v1.9a1 1 0 1 0 2 0V27h2v1.9a1 1 0 1 0 2 0V27z" clip-rule="evenodd"/>',
};

export const bitcoinIconName = 'bitcoin';
export const bitcoinIcon: IconShapeTuple = [bitcoinIconName, renderIcon(icon)];
