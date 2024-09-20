/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M32 12h-6.66l1.55-7.74a1 1 0 0 0-2-.39L23.3 12h-8.19l1.55-7.74a1 1 0 0 0-2-.39L13.07 12H6a1 1 0 0 0 0 2h6.67l-1.6 8H4a1 1 0 0 0 0 2h6.66l-1.55 7.74a1 1 0 0 0 .79 1.17.7.7 0 0 0 .2 0 1 1 0 0 0 1-.8L12.7 24h8.19l-1.55 7.74a1 1 0 0 0 .79 1.17.6.6 0 0 0 .19 0 1 1 0 0 0 1-.8L22.93 24H30a1 1 0 0 0 0-2h-6.67l1.61-8H32a1 1 0 0 0 0-2M21.29 22H13.1l1.61-8h8.19Z"/>',
  solid:
    '<path d="M31.87 10h-5.55l1-4.83A1 1 0 0 0 26.35 4h-2a1 1 0 0 0-1 .78L22.33 10h-5.4l1-4.83A1 1 0 0 0 17 4h-2a1 1 0 0 0-1 .78L13 10H7a1 1 0 0 0-1 .8l-.41 2a1 1 0 0 0 1 1.2h5.55l-1.64 8h-6a1 1 0 0 0-1 .8l-.41 2a1 1 0 0 0 1 1.2h5.59l-1 4.83a1 1 0 0 0 1 1.17h2a1 1 0 0 0 .95-.78L13.67 26h5.4l-1 4.83A1 1 0 0 0 19 32h2a1 1 0 0 0 1-.78L23.05 26h6a1 1 0 0 0 1-.8l.4-2a1 1 0 0 0-1-1.2h-5.58l1.63-8h6a1 1 0 0 0 1-.8l.41-2a1 1 0 0 0-1.04-1.2m-12 12h-5.4l1.64-8h5.4Z"/>',
};

export const hashtagIconName = 'hashtag';
export const hashtagIcon: IconShapeTuple = [hashtagIconName, renderIcon(icon)];
