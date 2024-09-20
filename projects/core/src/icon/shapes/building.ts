/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M31 8h-8v2h8v21h-8v2h10V10a2 2 0 0 0-2-2M19.88 3H6.12A2.12 2.12 0 0 0 4 5.12V33h18V5.12A2.12 2.12 0 0 0 19.88 3M20 31h-3v-3H9v3H6V5.12A.12.12 0 0 1 6.12 5h13.76a.12.12 0 0 1 .12.12Z"/><path d="M8 8h2v2H8zm4 0h2v2h-2zm4 0h2v2h-2zm-8 5h2v2H8zm4 0h2v2h-2zm4 0h2v2h-2zm-8 5h2v2H8zm4 0h2v2h-2zm4 0h2v2h-2zm-8 5h2v2H8zm4 0h2v2h-2zm4 0h2v2h-2zm7-10h2v2h-2zm4 0h2v2h-2zm-4 5h2v2h-2zm4 0h2v2h-2zm-4 5h2v2h-2zm4 0h2v2h-2z"/>',

  outlineAlerted:
    '<path d="M8 8h2v2H8zm4 0h2v2h-2zm4 0h2v2h-2zm-8 5h2v2H8zm4 0h2v2h-2zm4 0h2v2h-2zm-8 5h2v2H8zm4 0h2v2h-2zm4 0h2v2h-2zm-8 5h2v2H8zm4 0h2v2h-2zm4 0h2v2h-2zm7-5h2v2h-2zm4 0h2v2h-2zm-4 5h2v2h-2zm4 0h2v2h-2z"/><path d="M20 31h-3v-3H9v3H6V5.12A.12.12 0 0 1 6.12 5h13.76a.12.12 0 0 1 .12.12v3.12l2-3.41A2.12 2.12 0 0 0 19.88 3H6.12A2.12 2.12 0 0 0 4 5.12V33h18V15.38a3.7 3.7 0 0 1-2-.74Zm11-15.6V31h-8v2h10V15.4z"/>',

  outlineBadged:
    '<path d="M19.88 3H6.12A2.12 2.12 0 0 0 4 5.12V33h18V5.12A2.12 2.12 0 0 0 19.88 3M20 31h-3v-3H9v3H6V5.12A.12.12 0 0 1 6.12 5h13.76a.12.12 0 0 1 .12.12Z"/><path d="M8 8h2v2H8zm4 0h2v2h-2zm4 0h2v2h-2zm-8 5h2v2H8zm4 0h2v2h-2zm4 0h2v2h-2zm-8 5h2v2H8zm4 0h2v2h-2zm4 0h2v2h-2zm-8 5h2v2H8zm4 0h2v2h-2zm4 0h2v2h-2zm7-10h2v2h-2zm4 0h2v2h-2zm-4 5h2v2h-2zm4 0h2v2h-2zm-4 5h2v2h-2zm4 0h2v2h-2z"/><path d="M31 13.43V31h-8v2h10V12.87a7.5 7.5 0 0 1-2 .56"/>',

  solid:
    '<path d="M31 8h-9v25h11V10a2 2 0 0 0-2-2m-5 17h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2v-2h2Zm4 10h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2v-2h2ZM17.88 3H6.12A2.12 2.12 0 0 0 4 5.12V33h5v-3h6v3h5V5.12A2.12 2.12 0 0 0 17.88 3M9 25H7v-2h2Zm0-5H7v-2h2Zm0-5H7v-2h2Zm0-5H7V8h2Zm4 15h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2V8h2Zm4 15h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2V8h2Z"/>',

  solidAlerted:
    '<path d="M17.88 3H6.12A2.12 2.12 0 0 0 4 5.12V33h5v-3h6v3h5V14.64a3.67 3.67 0 0 1-1-4.76l1-1.65V5.12A2.12 2.12 0 0 0 17.88 3M9 25H7v-2h2Zm0-5H7v-2h2Zm0-5H7v-2h2Zm0-5H7V8h2Zm4 15h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2V8h2Zm4 15h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2V8h2Zm5.23 5.4H22V33h11V15.4ZM26 25h-2v-2h2Zm0-5h-2v-2h2Zm4 5h-2v-2h2Zm0-5h-2v-2h2Z"/>',

  solidBadged:
    '<path d="M17.88 3H6.12A2.12 2.12 0 0 0 4 5.12V33h5v-3h6v3h5V5.12A2.12 2.12 0 0 0 17.88 3M9 25H7v-2h2Zm0-5H7v-2h2Zm0-5H7v-2h2Zm0-5H7V8h2Zm4 15h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2V8h2Zm4 15h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2V8h2Zm13 3.5V15h-2v-1.78A7.5 7.5 0 0 1 22.78 8H22v25h11V12.87a7.5 7.5 0 0 1-3 .63M26 25h-2v-2h2Zm0-5h-2v-2h2Zm0-5h-2v-2h2Zm4 10h-2v-2h2Zm0-5h-2v-2h2Z"/>',
};

export const buildingIconName = 'building';
export const buildingIcon: IconShapeTuple = [buildingIconName, renderIcon(icon)];
