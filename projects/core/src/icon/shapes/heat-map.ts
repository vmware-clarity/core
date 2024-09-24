/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M32 5H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M4 29V7h28v22zm24-19H8v16h20zM9.6 24h4.5v-5.2H9.6zm0-12.4h4.5v5.6H9.6zM26 24v-5.2h-4.1V24zm-4.1-12.4H26v5.6h-4.1zm-6.2 0v5.6h4.6v-5.6zM20.3 24h-4.6v-5.2h4.6z" clip-rule="evenodd"/>',

  outlineAlerted:
    '<path d="m26.896 1.611-5.681 9.47c-.27.382-.294.879-.064 1.284.23.406.678.652 1.156.636h11.374a1.28 1.28 0 0 0 1.155-.636 1.19 1.19 0 0 0-.063-1.284l-5.682-9.47a1.28 1.28 0 0 0-1.097-.609c-.452 0-.87.232-1.098.61"/><path d="M22.53 5H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V14.99q-.171.015-.344.011H32V29H4V7h17.33z"/><path fill-rule="evenodd" d="M19.53 10H8v16h20V15.002h-2V17.2h-4.1v-2.218a3.3 3.3 0 0 1-1.6-.627V17.2h-4.6v-5.6h3.299a3.2 3.2 0 0 1 .53-1.596zM14.1 24H9.6v-5.2h4.5zm0-12.4H9.6v5.6h4.5zM26 18.8V24h-4.1v-5.2zM15.7 24h4.6v-5.2h-4.6z" clip-rule="evenodd"/>',

  outlineBadged:
    '<path d="M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10"/><path fill-rule="evenodd" d="M24.255 10H8v16h20V12.71a7 7 0 0 1-2-.965V17.2h-4.1v-5.6h3.9a7 7 0 0 1-1.545-1.6M14.1 24H9.6v-5.2h4.5zm0-12.4H9.6v5.6h4.5zM26 18.8V24h-4.1v-5.2zm-10.3-1.6v-5.6h4.6v5.6zm0 6.8h4.6v-5.2h-4.6z" clip-rule="evenodd"/><path d="M32 12.71V29H4V7h19.07a7 7 0 0 1 0-2H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V11.745a7 7 0 0 1-2 .965"/>',

  solid:
    '<path fill-rule="evenodd" d="M34 29V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2m-6-3H8V10h20zm-18-7h4v5h-4zm12 0v5h4v-5zm-2 0v5h-4v-5zm2-2h4v-5h-4zm-2-5v5h-4v-5zm-6 5v-5h-4v5z" clip-rule="evenodd"/>',

  solidAlerted:
    '<path d="m26.896 1.611-5.681 9.47c-.27.382-.294.879-.064 1.284.23.406.678.652 1.156.636h11.374a1.28 1.28 0 0 0 1.155-.636 1.19 1.19 0 0 0-.063-1.284l-5.682-9.47a1.28 1.28 0 0 0-1.097-.609c-.452 0-.87.232-1.098.61"/><path d="M22.53 5H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V14.99q-.171.015-.344.011H28V26H8V10h11.53z"/><path d="M19.002 12H16v5h4v-2.896a3.2 3.2 0 0 1-.587-.75A3.2 3.2 0 0 1 19.002 12M22 14.992V17h4v-1.998h-3.668a3 3 0 0 1-.332-.01M14 19h-4v5h4zm8 5v-5h4v5zm-2 0v-5h-4v5zm-6-12v5h-4v-5z"/>',

  solidBadged:
    '<path d="M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10"/><path d="M34 11.745A6.97 6.97 0 0 1 30 13a7 7 0 0 1-2-.29V26H8V10h16.255A6.97 6.97 0 0 1 23 6q0-.51.07-1H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2z"/><path d="M14 19h-4v5h4zm8 5v-5h4v5zm-2 0v-5h-4v5zm6-7h-4v-5h4zm-6 0v-5h-4v5zm-6-5v5h-4v-5z"/>',
};

export const heatMapIconName = 'heat-map';
export const heatMapIcon: IconShapeTuple = [heatMapIconName, renderIcon(icon)];
