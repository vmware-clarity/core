/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M15 17h3v2h-3z"/><path d="M26.45 14.17A22.1 22.1 0 0 0 19.38 7a9.64 9.64 0 0 0-9-.7 8.6 8.6 0 0 0-4.82 6.4c-.08.47-.14.92-.2 1.36A4 4 0 0 0 2 18v6.13a2 2 0 0 0 2 2V18a2 2 0 0 1 2-2h18.73A7.28 7.28 0 0 1 32 23.27V24h-2a4.53 4.53 0 1 0 .33 2H32a2 2 0 0 0 2-2v-.73a9.28 9.28 0 0 0-7.55-9.1M11 14H6.93c0-.31.09-.63.15-1A6.52 6.52 0 0 1 11 8Zm2 0V7.58a8.17 8.17 0 0 1 5.36 1.16A19 19 0 0 1 23.9 14Zm12.8 14.38a2.5 2.5 0 1 1 2.5-2.5 2.5 2.5 0 0 1-2.5 2.5"/><path d="M14.17 24a4.53 4.53 0 1 0 .33 2h5.3v-.25A6 6 0 0 1 20 24ZM10 28.38a2.5 2.5 0 1 1 2.5-2.5 2.5 2.5 0 0 1-2.5 2.5"/>',
  solid:
    '<path d="M26.87 14.28a22.36 22.36 0 0 0-7.22-7.38 9.64 9.64 0 0 0-9-.7 8.6 8.6 0 0 0-4.82 6.4c-.08.49-.15 1-.21 1.4h-1A2.59 2.59 0 0 0 2 16.59v8.55a.86.86 0 0 0 .86.86h1.73v-.39a5.77 5.77 0 0 1 7.71-5.45l-1 1a4.56 4.56 0 0 0-4.34 1.58 3 3 0 0 0-.63.93A4.5 4.5 0 1 0 14.82 26h5.48v-.39a5.77 5.77 0 0 1 7.7-5.45l-1 1a4.56 4.56 0 0 0-4.34 1.58 3 3 0 0 0-.63.93 4.5 4.5 0 1 0 8.5 2.33h2.61a.86.86 0 0 0 .86-.86v-1.78a9.39 9.39 0 0 0-7.13-9.08M12 14H8c0-.35.1-.71.16-1.07a6.52 6.52 0 0 1 3.87-5Zm-1.64 14.36a2.5 2.5 0 1 1 2.5-2.5 2.5 2.5 0 0 1-2.5 2.5M19 19h-3v-2h3Zm-6-5V7.47a8.16 8.16 0 0 1 5.4 1.15A19.15 19.15 0 0 1 24 14Zm13.06 14.36a2.5 2.5 0 1 1 2.5-2.5 2.5 2.5 0 0 1-2.5 2.5"/>',
};

export const carIconName = 'car';
export const carIcon: IconShapeTuple = [carIconName, renderIcon(icon)];
