/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M18 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8M6.06 11h24a1 1 0 0 1 0 2H22v9.68l3.77 9.97a1 1 0 0 1-.58 1.29 1.1 1.1 0 0 1-.36.06 1 1 0 0 1-.93-.65L20.38 24h-4.76l-3.5 9.35a1 1 0 0 1-.93.65 1.1 1.1 0 0 1-.36-.06 1 1 0 0 1-.58-1.29l3.75-10V13H6.06a1 1 0 1 1 0-2M20 22v-9h-4v9zm0-16a2 2 0 1 0-4 0 2 2 0 0 0 4 0" clip-rule="evenodd"/>',
  solid:
    '<path d="M20.96 4.957c0 1.633-1.343 2.957-3 2.957s-3-1.324-3-2.957S16.303 2 17.96 2s3 1.324 3 2.957M6 9.885h24c.552 0 1 .441 1 .986a.993.993 0 0 1-1 .985h-8v8.28l3.95 12.625a.983.983 0 0 1-.66 1.232 1.6 1.6 0 0 1-.29 0 1 1 0 0 1-1-.7L20.73 22.57h-5.38l-3.29 10.684a1 1 0 0 1-1 .7 1.6 1.6 0 0 1-.29 0 .983.983 0 0 1-.66-1.232L14 20.096v-8.24H6c-.552 0-1-.441-1-.985a.993.993 0 0 1 1-.986"/>',
};

export const accessibility2IconName = 'accessibility-2';
export const accessibility2Icon: IconShapeTuple = [accessibility2IconName, renderIcon(icon)];
