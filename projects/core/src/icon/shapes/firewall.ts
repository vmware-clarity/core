/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M31 6H5C3.35 6 2 7.35 2 9v18c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3V9c0-1.65-1.35-3-3-3m1 21c0 .55-.45 1-1 1h-7v-4h-2v4h-8v-4h-2v4H5c-.55 0-1-.45-1-1v-4h28zm0-6h-3v-5h-2v5h-8v-5h-2v5H9v-5H7v5H4v-6h28zm0-8h-8V9h-2v4h-8V9h-2v4H4V9c0-.55.45-1 1-1h26c.55 0 1 .45 1 1z"/>',

  outlineAlerted:
    '<path d="m26.904 1.646-5.682 9.47c-.27.382-.294.879-.063 1.284.23.406.677.652 1.156.636h11.373a1.28 1.28 0 0 0 1.156-.636c.23-.405.206-.902-.063-1.284l-5.682-9.47a1.28 1.28 0 0 0-1.098-.609c-.451 0-.87.232-1.097.609"/><path fill-rule="evenodd" d="M21.96 6H5C3.35 6 2 7.35 2 9v18c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3V15.026q-.167.015-.336.01H32V21h-3v-5h-2v5h-8v-5h-2v5H9v-5H7v5H4v-6h17.778a3.27 3.27 0 0 1-2.545-2H14V9h-2v4H4V9c0-.55.45-1 1-1h15.76zM31 28c.55 0 1-.45 1-1v-4H4v4c0 .55.45 1 1 1h7v-4h2v4h8v-4h2v4z" clip-rule="evenodd"/>',

  outlineBadged:
    '<path d="M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10"/><path fill-rule="evenodd" d="M24 9.608V13h8v-.29a7 7 0 0 0 2-.965V27c0 1.65-1.35 3-3 3H5c-1.65 0-3-1.35-3-3V9c0-1.65 1.35-3 3-3h18c0 .695.101 1.366.29 2H5c-.55 0-1 .45-1 1v4h8V9h2v4h8V9h1.674q.149.312.326.608M31 28c.55 0 1-.45 1-1v-4H4v4c0 .55.45 1 1 1h7v-4h2v4h8v-4h2v4zm-2-7h3v-6H4v6h3v-5h2v5h8v-5h2v5h8v-5h2z" clip-rule="evenodd"/>',

  solid:
    '<path d="M31 6H5C3.35 6 2 7.35 2 9v18c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3V9c0-1.65-1.35-3-3-3M14 28h-2v-3h2zm10 0h-2v-3h2zm8-5H4v-2h3v-4h2v4h8v-4h2v4h8v-4h2v4h3zm0-8H4v-2h8V9h2v4h8V9h2v4h8z"/>',

  solidAlerted:
    '<path d="m26.904 1.646-5.682 9.47c-.27.382-.294.879-.063 1.284.23.406.677.652 1.156.636h11.373a1.28 1.28 0 0 0 1.156-.636c.23-.405.206-.902-.063-1.284l-5.682-9.47a1.28 1.28 0 0 0-1.098-.609c-.451 0-.87.232-1.097.609"/><path fill-rule="evenodd" d="M21.96 6H5C3.35 6 2 7.35 2 9v18c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3V15.026q-.167.015-.336.01H22.34a3.3 3.3 0 0 1-.562-.036H4v-2h8V9h2v4h5.233a3.2 3.2 0 0 1 .303-2.961zM12 28h2v-3h-2zm10 0h2v-3h-2zM4 23h28v-2h-3v-4h-2v4h-8v-4h-2v4H9v-4H7v4H4z" clip-rule="evenodd"/>',

  solidBadged:
    '<path d="M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10"/><path fill-rule="evenodd" d="M34 11.745A6.97 6.97 0 0 1 30 13a7 7 0 0 1-6-3.392V13h8v2H4v-2h8V9h2v4h8V9h1.674A7 7 0 0 1 23 6H5C3.35 6 2 7.35 2 9v18c0 1.65 1.35 3 3 3h26c1.65 0 3-1.35 3-3zM12 28h2v-3h-2zm10-3v3h2v-3zM4 23h28v-2h-3v-4h-2v4h-8v-4h-2v4H9v-4H7v4H4z" clip-rule="evenodd"/>',
};

export const firewallIconName = 'firewall';
export const firewallIcon: IconShapeTuple = [firewallIconName, renderIcon(icon)];
