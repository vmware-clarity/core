/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M31 13.2h-3.11A7 7 0 0 0 28 12a8 8 0 0 0-.1-1.19h2.93a.8.8 0 0 0 0-1.6h-3.37A8.44 8.44 0 0 0 19.57 4H11a1 1 0 0 0-1 1v4.2H7a.8.8 0 0 0 0 1.6h3v2.4H7a.8.8 0 0 0 0 1.6h3V31a1 1 0 0 0 2 0V20h7.57a8.45 8.45 0 0 0 7.89-5.2H31a.8.8 0 0 0 0-1.6M12 6h7.57a6.51 6.51 0 0 1 5.68 3.2H12Zm0 4.8h13.87a5.6 5.6 0 0 1 0 2.4H12Zm7.57 7.2H12v-3.2h13.25a6.51 6.51 0 0 1-5.68 3.2"/>',
  solid:
    '<path d="M14.18 13.8V16h9.45a5 5 0 0 0 .08-.89 4.7 4.7 0 0 0-.2-1.31Zm0 5.9h5.19a4.28 4.28 0 0 0 3.5-1.9h-8.69Zm5.19-9.19h-5.19V12h8.37a4.21 4.21 0 0 0-3.18-1.49"/><path d="M17.67 2a16 16 0 1 0 16 16 16 16 0 0 0-16-16m10.5 15.8H25.7a6.87 6.87 0 0 1-6.33 4.4h-5.19v6.54a1.25 1.25 0 1 1-2.5 0V17.8H8.76a.9.9 0 1 1 0-1.8h2.92v-2.2H8.76a.9.9 0 1 1 0-1.8h2.92V9.26A1.25 1.25 0 0 1 12.93 8h6.44a6.84 6.84 0 0 1 6.15 4h2.65a.9.9 0 0 1 0 1.8h-2.08a7 7 0 0 1 .12 1.3 7 7 0 0 1-.06.9h2a.9.9 0 0 1 0 1.8Z"/>',
};

export const pesoIconName = 'peso';
export const pesoIcon: IconShapeTuple = [pesoIconName, renderIcon(icon)];
