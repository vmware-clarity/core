/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="m29.71 10.49-8.2-8.2A1 1 0 0 0 20.8 2H7c-.55 0-1 .45-1 1v30c0 .55.45 1 1 1h22c.55 0 1-.45 1-1V11.19c0-.27-.11-.52-.29-.71zM20.8 4.41l6.79 6.79H20.8zM28 32H8V4h11.2v8.8H28z"/>',

  outlineAlerted:
    '<path d="m26.904 1.646-5.682 9.47c-.27.382-.294.879-.063 1.284.23.406.677.652 1.156.636h11.373a1.28 1.28 0 0 0 1.156-.636c.23-.405.206-.902-.063-1.284l-5.682-9.47a1.28 1.28 0 0 0-1.098-.609c-.451 0-.87.232-1.097.609"/><path d="M23.182 3.962 21.51 2.29A1 1 0 0 0 20.8 2H7c-.55 0-1 .45-1 1v30c0 .55.45 1 1 1h22c.55 0 1-.45 1-1V15.037h-2V32H8V4h11.2v6.7a3.2 3.2 0 0 1 .336-.661L20.8 7.932V4.41l1.32 1.32z"/>',

  outlineBadged:
    '<path d="M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10"/><path fill-rule="evenodd" d="M23.274 4.054 21.51 2.29A1 1 0 0 0 20.8 2H7c-.55 0-1 .45-1 1v30c0 .55.45 1 1 1h22c.55 0 1-.45 1-1V13a6.97 6.97 0 0 1-4.686-1.8H20.8V4.41l2.229 2.229a7.1 7.1 0 0 1 .245-2.585M8 32h20V12.8h-8.8V4H8z" clip-rule="evenodd"/>',

  solid:
    '<path d="m29.71 10.49-8.2-8.2A1 1 0 0 0 20.8 2H7c-.55 0-1 .45-1 1v30c0 .55.45 1 1 1h22c.55 0 1-.45 1-1V11.19c0-.27-.11-.52-.29-.71zm-8.91.71V3.8l7.4 7.4z"/>',

  solidAlerted:
    '<path d="m26.904 1.646-5.682 9.47c-.27.382-.294.879-.063 1.284.23.406.677.652 1.156.636h11.373a1.28 1.28 0 0 0 1.156-.636c.23-.405.206-.902-.063-1.284l-5.682-9.47a1.28 1.28 0 0 0-1.098-.609c-.451 0-.87.232-1.097.609"/><path d="M23.182 3.962 21.51 2.29A1 1 0 0 0 20.8 2H7c-.55 0-1 .45-1 1v30c0 .55.45 1 1 1h22c.55 0 1-.45 1-1V15.037h-7.66a3.28 3.28 0 0 1-2.92-1.648 3.19 3.19 0 0 1 .116-3.35L20.8 7.932V3.8l1.55 1.55z"/>',

  solidBadged:
    '<path d="M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10"/><path d="M23.274 4.054 21.51 2.29A1 1 0 0 0 20.8 2H7c-.55 0-1 .45-1 1v30c0 .55.45 1 1 1h22c.55 0 1-.45 1-1V13a6.97 6.97 0 0 1-4.686-1.8H20.8V3.8L23 6c0-.675.096-1.328.274-1.946"/>',
};

export const fileIconName = 'file';
export const fileIcon: IconShapeTuple = [fileIconName, renderIcon(icon)];
