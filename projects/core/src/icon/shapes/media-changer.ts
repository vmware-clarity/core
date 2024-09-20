/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M30 4H6a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h1.88v1.57a1 1 0 0 0 2 0V32h16v1.57a1 1 0 0 0 2 0V32H30a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M6 30V6h24v24Z"/><path d="M20 18h2v2h-2zm4 0h2v2h-2zm-4 4h2v2h-2zm4 0h2v2h-2zm3.22-12H20v4a.8.8 0 1 0 1.59 0v-2.4h5.63a.8.8 0 1 0 0-1.6M8.81 10h8.14v2H8.81zm0 4h8.14v2H8.81zm0 4h8.14v2H8.81zm0 4h8.14v2H8.81zm0 4h8.14v2H8.81z"/>',

  outlineAlerted:
    '<path d="M20 18h2v2h-2zm4 0h2v2h-2zm-4 4h2v2h-2zm4 0h2v2h-2zM8.81 10h8.14v2H8.81zm0 4h8.14v2H8.81zm0 4h8.14v2H8.81zm0 4h8.14v2H8.81zm0 4h8.14v2H8.81z"/><path d="M30 15.4V30H6V6h15.27l1.18-2H6a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h1.88v1.57a1 1 0 0 0 2 0V32h16v1.57a1 1 0 0 0 2 0V32H30a2 2 0 0 0 2-2V15.4Z"/>',

  outlineBadged:
    '<path d="M20 18h2v2h-2zm4 0h2v2h-2zm-4 4h2v2h-2zm4 0h2v2h-2zM8.81 10h8.14v2H8.81zm0 4h8.14v2H8.81zm0 4h8.14v2H8.81zm0 4h8.14v2H8.81zm0 4h8.14v2H8.81zM20 14a.8.8 0 1 0 1.59 0v-2.4H25a7.7 7.7 0 0 1-1.34-1.6H20Z"/><path d="M30 13.5V30H6V6h16.5a7.4 7.4 0 0 1 .28-2H6a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h1.88v1.57a1 1 0 0 0 2 0V32h16v1.57a1 1 0 0 0 2 0V32H30a2 2 0 0 0 2-2V13.22a7.4 7.4 0 0 1-2 .28"/>',

  solid:
    '<path d="M30 4H6a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h1.88v1.57a1 1 0 0 0 2 0V32h16v1.57a1 1 0 0 0 2 0V32H30a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M17 28H8.81v-2H17Zm0-4H8.81v-2H17Zm0-4H8.81v-2H17Zm0-4H8.81v-2H17Zm0-4H8.81v-2H17Zm5 12h-2v-2h2Zm0-4h-2v-2h2Zm4 4h-2v-2h2Zm0-4h-2v-2h2Zm0-6h-6v-4h6Z"/>',

  solidAlerted:
    '<path d="M22.23 15.4a3.68 3.68 0 0 1-3.18-5.51L22.45 4H6a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h1.88v1.57a1 1 0 0 0 2 0V32h16v1.57a1 1 0 0 0 2 0V32H30a2 2 0 0 0 2-2V15.4ZM17 28H8.81v-2H17Zm0-4H8.81v-2H17Zm0-4H8.81v-2H17Zm0-4H8.81v-2H17Zm0-4H8.81v-2H17Zm5 12h-2v-2h2Zm0-4h-2v-2h2Zm4 4h-2v-2h2Zm0-4h-2v-2h2Z"/>',

  solidBadged:
    '<path d="M30 13.5a7.5 7.5 0 0 1-4-1.16V14h-6v-4h3.66a7.5 7.5 0 0 1-1.16-4 7.4 7.4 0 0 1 .28-2H6a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h1.88v1.57a1 1 0 0 0 2 0V32h16v1.57a1 1 0 0 0 2 0V32H30a2 2 0 0 0 2-2V13.22a7.4 7.4 0 0 1-2 .28M17 28H8.81v-2H17Zm0-4H8.81v-2H17Zm0-4H8.81v-2H17Zm0-4H8.81v-2H17Zm0-4H8.81v-2H17Zm5 12h-2v-2h2Zm0-4h-2v-2h2Zm4 4h-2v-2h2Zm0-4h-2v-2h2Z"/>',
};

export const mediaChangerIconName = 'media-changer';
export const mediaChangerIcon: IconShapeTuple = [mediaChangerIconName, renderIcon(icon)];
