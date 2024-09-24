/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M32 6H4c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2M4 8h28v2.2H4zm0 3.8V28h28V11.8zm3 3.88 6.79 3.12L7 21.91v2.2l9.6-4.41v-1.81L7 13.48zM23 24h-6v2h6z" clip-rule="evenodd"/>',

  outlineAlerted:
    '<path d="m26.904 1.646-5.682 9.47c-.27.382-.294.879-.063 1.284.23.406.677.652 1.156.637h11.373a1.28 1.28 0 0 0 1.156-.637c.23-.405.206-.902-.063-1.284l-5.682-9.47a1.28 1.28 0 0 0-1.098-.609c-.451 0-.87.232-1.097.61"/><path d="M21.96 6H4c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2V15.026q-.167.015-.336.01H32V28H4V11.8h15.002a3.2 3.2 0 0 1 .434-1.6H4V8h16.76z"/><path d="M13.79 18.8 7 15.68v-2.2l9.6 4.41v1.81L7 24.11v-2.2zM17 24h6v2h-6z"/>',

  outlineBadged:
    '<path d="M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10"/><path d="M32 12.71V28H4V11.8h22.08a7 7 0 0 1-1.68-1.6H4V8h19.29A7 7 0 0 1 23 6H4c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2V11.745a7 7 0 0 1-2 .965"/><path d="M13.79 18.8 7 15.68v-2.2l9.6 4.41v1.81L7 24.11v-2.2zM17 24h6v2h-6z"/>',

  solid:
    '<path fill-rule="evenodd" d="M32 6H4c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2M16.6 19.7 7 24.11v-2.2l6.79-3.11L7 15.68v-2.2l9.6 4.41zM23 26h-6v-2h6zm9-16H4V8h28z" clip-rule="evenodd"/>',

  solidAlerted:
    '<path d="m26.904 1.646-5.682 9.47c-.27.382-.294.879-.063 1.284.23.406.677.652 1.156.637h11.373a1.28 1.28 0 0 0 1.156-.637c.23-.405.206-.902-.063-1.284l-5.682-9.47a1.28 1.28 0 0 0-1.098-.609c-.451 0-.87.232-1.097.61"/><path fill-rule="evenodd" d="M21.96 6H4c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2V15.026q-.167.015-.336.01H22.34a3.28 3.28 0 0 1-2.92-1.647 3.19 3.19 0 0 1 .116-3.35L19.56 10H4V8h16.76zM7 24.11l9.6-4.41v-1.81L7 13.48v2.2l6.79 3.12L7 21.91zM17 26h6v-2h-6z" clip-rule="evenodd"/>',

  solidBadged:
    '<path d="M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10"/><path fill-rule="evenodd" d="M34 11.745A6.97 6.97 0 0 1 30 13a6.99 6.99 0 0 1-5.745-3H4V8h19.29A7 7 0 0 1 23 6H4c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2zM7 24.11l9.6-4.41v-1.81L7 13.48v2.2l6.79 3.12L7 21.91zM17 26h6v-2h-6z" clip-rule="evenodd"/>',
};

export const terminalIconName = 'terminal';
export const terminalIcon: IconShapeTuple = [terminalIconName, renderIcon(icon)];
