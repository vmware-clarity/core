/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M32 6H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2M4 28V8h28v20Z"/><path d="M13.33 13.35a4.52 4.52 0 1 0 4.53 4.52 4.53 4.53 0 0 0-4.53-4.52m0 7.44a2.92 2.92 0 1 1 2.93-2.92 2.92 2.92 0 0 1-2.93 2.92m10.29-7.44a4.52 4.52 0 1 0 4.52 4.52 4.53 4.53 0 0 0-4.52-4.52m0 7.44a2.92 2.92 0 1 1 2.92-2.92 2.92 2.92 0 0 1-2.92 2.92"/><path d="M6 11v12.55h2V12h21.34v-2H7a1 1 0 0 0-1 1"/>',

  outlineAlerted:
    '<path d="M8.81 17.87a4.53 4.53 0 1 0 4.52-4.52 4.53 4.53 0 0 0-4.52 4.52m7.45 0A2.93 2.93 0 1 1 13.33 15a2.93 2.93 0 0 1 2.93 2.87"/><path d="M7 10a1 1 0 0 0-1 1v12.55h2V12h10.57a3.7 3.7 0 0 1 .43-2Z"/><path d="M33.68 15.4H32V28H4V8h16.14l1.15-2H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V15.38Z"/><path d="M22.09 15.39a3.65 3.65 0 0 1-1.8-.55 4.51 4.51 0 1 0 7.11.56h-2.23a2.92 2.92 0 1 1-3.08 0Z"/>',

  outlineBadged:
    '<path d="M8.81 17.87a4.53 4.53 0 1 0 4.52-4.52 4.53 4.53 0 0 0-4.52 4.52m7.45 0A2.93 2.93 0 1 1 13.33 15a2.93 2.93 0 0 1 2.93 2.87m2.84 0a4.52 4.52 0 1 0 4.52-4.52 4.53 4.53 0 0 0-4.52 4.52m7.44 0A2.92 2.92 0 1 1 23.62 15a2.92 2.92 0 0 1 2.92 2.87"/><path d="M32 13.22V28H4V8h18.78a7.4 7.4 0 0 1-.28-2H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V12.34a7.7 7.7 0 0 1-2 .88"/><path d="M6 11v12.55h2V12h17.51a7.7 7.7 0 0 1-1.85-2H7a1 1 0 0 0-1 1"/>',

  solid:
    '<path d="M32 6H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-2 18H6V12h24Z"/><path d="M12.21 23a5 5 0 1 0-5-5 5 5 0 0 0 5 5m0-7a2 2 0 1 1-2 2 2 2 0 0 1 2-2m11.58 7a5 5 0 1 0-5-5 5 5 0 0 0 5 5m0-7a2 2 0 1 1-2 2 2 2 0 0 1 2-2"/>',

  solidAlerted:
    '<path d="M7.2 18a5 5 0 1 0 5-5 5 5 0 0 0-5 5m7 0a2 2 0 1 1-2-2 2 2 0 0 1 2.02 2Zm4.58 0a5 5 0 1 0 9.27-2.6h-5.82a3.7 3.7 0 0 1-2.17-.71A5 5 0 0 0 18.78 18m5-2a2 2 0 1 1-2 2 2 2 0 0 1 2.01-2Z"/><path d="M33.68 15.4H30V24H6V12h12.57a3.65 3.65 0 0 1 .48-2.11L21.29 6H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V15.38Z"/>',

  solidBadged:
    '<path d="M12.21 23a5 5 0 1 0-5-5 5 5 0 0 0 5 5m0-7a2 2 0 1 1-2 2 2 2 0 0 1 2-2m11.58 7a5 5 0 1 0-5-5 5 5 0 0 0 5 5m0-7a2 2 0 1 1-2 2 2 2 0 0 1 2-2"/><path d="M30 13.5V24H6V12h19.51a7.49 7.49 0 0 1-3-6H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V12.34a7.5 7.5 0 0 1-4 1.16"/>',
};

export const tapeDriveIconName = 'tape-drive';
export const tapeDriveIcon: IconShapeTuple = [tapeDriveIconName, renderIcon(icon)];
