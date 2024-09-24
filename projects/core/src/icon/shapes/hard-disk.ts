/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="m30.847 7.43 3.139 12.65a1 1 0 0 1 0 .23V28a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.68a1 1 0 0 1 0-.24L5.13 7.47A2 2 0 0 1 7.058 6h21.87a2 2 0 0 1 1.92 1.43M4 20.44V28h27.988v-7.56L28.918 8H7.058zM6 19h23.989v2H5.998zm23.989 4H25.99v2h3.998z" clip-rule="evenodd"/>',

  outlineAlerted:
    '<path d="m26.904 1.646-5.682 9.47c-.27.382-.294.879-.063 1.284.23.406.677.652 1.156.637h11.373a1.28 1.28 0 0 0 1.156-.637c.23-.405.206-.902-.063-1.284l-5.682-9.47a1.28 1.28 0 0 0-1.098-.609c-.451 0-.87.232-1.097.61"/><path d="M21.96 6H7.057a2 2 0 0 0-1.93 1.47L2 20.08a1 1 0 0 0 0 .24V28a2 2 0 0 0 1.999 2h27.988a2 2 0 0 0 1.999-2v-7.69a1 1 0 0 0 0-.23l-1.251-5.043h-2.081l1.333 5.403V28H3.999v-7.56L7.058 8h13.701z"/><path d="M29.988 19H5.998v2h23.99zm-3.998 4h3.998v2H25.99z"/>',

  outlineBadged:
    '<path d="M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10"/><path d="m30.151 12.998 1.836 7.442V28H3.999v-7.56L7.058 8H23.29A7 7 0 0 1 23 6H7.058a2 2 0 0 0-1.93 1.47L2 20.08a1 1 0 0 0 0 .24V28a2 2 0 0 0 1.999 2h27.988a2 2 0 0 0 1.999-2v-7.69a1 1 0 0 0 0-.23l-1.84-7.415c-.63.203-1.3.319-1.995.333"/><path d="M29.988 19H5.998v2h23.99zm-3.998 4h3.998v2H25.99z"/>',

  solid:
    '<path d="M28.94 6a2 2 0 0 1 1.92 1.43L33.71 19H2.29L5.13 7.47A2 2 0 0 1 7.06 6z"/><path fill-rule="evenodd" d="M2 21v7a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2v-7zm28 5h-4v-2h4z" clip-rule="evenodd"/>',

  solidAlerted:
    '<path d="m26.904 1.646-5.682 9.47c-.27.382-.294.879-.063 1.284.23.406.677.652 1.156.637h11.373a1.28 1.28 0 0 0 1.156-.637c.23-.405.206-.902-.063-1.284l-5.682-9.47a1.28 1.28 0 0 0-1.098-.609c-.451 0-.87.232-1.097.61"/><path d="m21.96 6-2.424 4.039a3.19 3.19 0 0 0-.115 3.35 3.28 3.28 0 0 0 2.919 1.648h10.394L33.71 19H2.29L5.13 7.47A2 2 0 0 1 7.06 6z"/><path fill-rule="evenodd" d="M2 28v-7h32v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2m24-2h4v-2h-4z" clip-rule="evenodd"/>',

  solidBadged:
    '<path d="M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10"/><path d="M32.15 12.664A7 7 0 0 1 23 6H7.06a2 2 0 0 0-1.93 1.47L2.29 19h31.42z"/><path fill-rule="evenodd" d="M2 28v-7h32v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2m24-2h4v-2h-4z" clip-rule="evenodd"/>',
};

export const hardDiskIconName = 'hard-disk';
export const hardDiskIcon: IconShapeTuple = [hardDiskIconName, renderIcon(icon)];
