/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M4 6h28c1.1 0 2 .9 2 2v6h-2V8H4v6H2V8c0-1.1.9-2 2-2m16 22h12V18h2v10c0 1.1-.9 2-2 2H20zm-4 0H4V18H2v10c0 1.1.9 2 2 2h14v-4h2v-2h-4zm12-16h-4v8h4zm-12 0h4v8h-4zm-4 0H8v8h4z" clip-rule="evenodd"/>',
  outlineAlerted:
    '<path d="m26.904 1.646-5.682 9.47c-.27.382-.294.879-.063 1.284.23.406.677.652 1.156.637h11.373a1.28 1.28 0 0 0 1.156-.637c.23-.405.206-.902-.063-1.284l-5.682-9.47a1.28 1.28 0 0 0-1.098-.609c-.451 0-.87.232-1.097.61M24 15.037h4V20h-4zM19.007 12A3.23 3.23 0 0 0 20 14.131V20h-4v-8zm2.953-6-1.2 2H4v6H2V8c0-1.1.9-2 2-2zM32 28H20v2h12c1.1 0 2-.9 2-2V18h-2zM4 28h12v-4h4v2h-2v4H4c-1.1 0-2-.9-2-2V18h2z"/><path d="M8 12h4v8H8z"/>',

  outlineBadged:
    '<path d="M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10m-3.608 1c.5.3 1.038.54 1.608.71V20h-4v-8zm5.608.71V14h2v-2.255a7 7 0 0 1-2 .965M23.29 8A7 7 0 0 1 23 6H4c-1.1 0-2 .9-2 2v6h2V8zM32 28H20v2h12c1.1 0 2-.9 2-2V18h-2zM4 28h12v-4h4v2h-2v4H4c-1.1 0-2-.9-2-2V18h2zm16-16h-4v8h4z"/><path d="M8 12h4v8H8z"/>',

  solid:
    '<path fill-rule="evenodd" d="M34 14V8c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v6h2v4H2v10c0 1.1.9 2 2 2h14v-4h2v4h12c1.1 0 2-.9 2-2V18h-2v-4zm-21.9 6.1H7.9v-8.2h4.2zm8 0h-4.2v-8.2h4.2zm8 0h-4.2v-8.2h4.2z" clip-rule="evenodd"/>',

  solidAlerted:
    '<path d="m26.904 1.646-5.682 9.47c-.27.382-.294.879-.063 1.284.23.406.677.652 1.156.637h11.373a1.28 1.28 0 0 0 1.156-.637c.23-.405.206-.902-.063-1.284l-5.682-9.47a1.28 1.28 0 0 0-1.098-.609c-.451 0-.87.232-1.097.61"/><path fill-rule="evenodd" d="M21.96 6H4c-1.1 0-2 .9-2 2v6h2v4H2v10c0 1.1.9 2 2 2h14v-4h2v4h12c1.1 0 2-.9 2-2V18h-2v-2.963h-3.9V20.1h-4.2v-5.063h-1.56a3.3 3.3 0 0 1-2.24-.814V20.1h-4.2v-8.2h3.103c-.019-.65.161-1.3.533-1.861zM7.9 20.1h4.2v-8.2H7.9z" clip-rule="evenodd"/>',

  solidBadged:
    '<path d="M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10"/><path fill-rule="evenodd" d="M34 11.745A6.97 6.97 0 0 1 30 13c-.659 0-1.296-.09-1.9-.26v7.36h-4.2v-8.2h2.331A7 7 0 0 1 23 6H4c-1.1 0-2 .9-2 2v6h2v4H2v10c0 1.1.9 2 2 2h14v-4h2v4h12c1.1 0 2-.9 2-2V18h-2v-4h2zM7.9 20.1h4.2v-8.2H7.9zm8 0h4.2v-8.2h-4.2z" clip-rule="evenodd"/>',
};

export const memoryIconName = 'memory';
export const memoryIcon: IconShapeTuple = [memoryIconName, renderIcon(icon)];
