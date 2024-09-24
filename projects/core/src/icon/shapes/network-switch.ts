/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M8 26h2.01v-4H8zm11.98 0h2.01v-4h-2.01zm-5.99 0H16v-4h-2.01zm11.98 0h2.01v-4h-2.01zM6 20h24v-2H6zm27.95-.48-4-12.84A1 1 0 0 0 29 6H7c-.43 0-.81.28-.95.68l-4 12.84c-.03.1-.05.21-.05.32V28c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2v-8.16c0-.11-.02-.21-.05-.32M32 28H4v-8L7.72 8h20.56L32 20z"/>',

  outlineAlerted:
    '<path d="m26.904 1.646-5.682 9.47c-.27.382-.294.879-.063 1.284.23.406.677.652 1.156.637h11.373a1.28 1.28 0 0 0 1.156-.637c.23-.405.206-.902-.063-1.284l-5.682-9.47a1.28 1.28 0 0 0-1.098-.609c-.451 0-.87.232-1.097.61"/><path d="M21.96 6H7c-.43 0-.81.28-.95.68l-4 12.84c-.03.1-.05.21-.05.32V28c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2v-8.16c0-.11-.02-.21-.05-.32l-1.397-4.483h-2.092L32 20v8H4v-8L7.72 8h13.04z"/><path d="M10.01 26H8v-4h2.01zm11.98 0h-2.01v-4h2.01zM16 26h-2.01v-4H16zm11.98 0h-2.01v-4h2.01zM30 20H6v-2h24z"/>',

  outlineBadged:
    '<path d="M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10"/><path d="M31.843 12.755a7 7 0 0 1-2.014.243L32 20v8H4v-8L7.72 8h15.57A7 7 0 0 1 23 6H7c-.43 0-.81.28-.95.68l-4 12.84c-.03.1-.05.21-.05.32V28c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2v-8.16c0-.11-.02-.21-.05-.32z"/><path d="M10.01 26H8v-4h2.01zm11.98 0h-2.01v-4h2.01zM16 26h-2.01v-4H16zm11.98 0h-2.01v-4h2.01zM30 20H6v-2h24z"/>',

  solid:
    '<path d="m33.95 19.52-4-12.84A1 1 0 0 0 29 6H7c-.43 0-.81.28-.95.68l-4 12.84c-.03.1-.05.21-.05.32V28c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2v-8.16c0-.11-.02-.21-.05-.32M10.01 26H8v-4h2.01zM16 26h-2.01v-4H16zm5.99 0h-2.01v-4h2.01zm5.99 0h-2.01v-4h2.01zM30 20H6v-2h24z"/>',

  solidAlerted:
    '<path d="m26.904 1.646-5.682 9.47c-.27.382-.294.879-.063 1.284.23.406.677.652 1.156.637h11.373a1.28 1.28 0 0 0 1.156-.637c.23-.405.206-.902-.063-1.284l-5.682-9.47a1.28 1.28 0 0 0-1.098-.609c-.451 0-.87.232-1.097.61"/><path fill-rule="evenodd" d="m21.96 6-2.424 4.039a3.19 3.19 0 0 0-.115 3.35 3.28 3.28 0 0 0 2.919 1.648h10.213l1.397 4.483c.03.11.05.21.05.32V28c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-8.16c0-.11.02-.22.05-.32l4-12.84c.14-.4.52-.68.95-.68zM8 26h2.01v-4H8zm5.99 0H16v-4h-2.01zm5.99 0h2.01v-4h-2.01zm5.99 0h2.01v-4h-2.01zM6 20h24v-2H6z" clip-rule="evenodd"/>',

  solidBadged:
    '<path d="M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10"/><path fill-rule="evenodd" d="M31.843 12.755A7 7 0 0 1 23 6H7c-.43 0-.81.28-.95.68l-4 12.84c-.03.1-.05.21-.05.32V28c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2v-8.16c0-.11-.02-.21-.05-.32zM8 26h2.01v-4H8zm5.99 0H16v-4h-2.01zm5.99 0h2.01v-4h-2.01zm5.99 0h2.01v-4h-2.01zM6 20h24v-2H6z" clip-rule="evenodd"/>',
};

export const networkSwitchIconName = 'network-switch';
export const networkSwitchIcon: IconShapeTuple = [networkSwitchIconName, renderIcon(icon)];
