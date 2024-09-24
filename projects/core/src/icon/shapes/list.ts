/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M15 8h9v2h-9zm0 4h9v2h-9zm0 4h9v2h-9zm0 4h9v2h-9zm0 4h9v2h-9zM11 8h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2z"/><path d="M28 2H8a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m0 30H8V4h20Z"/>',

  outlineBadged:
    '<path d="M15 12h9v2h-9zm0 4h9v2h-9zm0 4h9v2h-9zm0 4h9v2h-9zM11 8h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2zm4-16v2h8.66a7.5 7.5 0 0 1-.89-2Z"/><path d="M28 13.22V32H8V4h14.78a7.5 7.5 0 0 1 .88-2H8a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V13.5a7.5 7.5 0 0 1-2-.28"/>',

  solid:
    '<path d="M28 2H8a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2M13 26h-2v-2h2Zm0-4h-2v-2h2Zm0-4h-2v-2h2Zm0-4h-2v-2h2Zm0-4h-2V8h2Zm12 16H15v-2h10Zm0-4H15v-2h10Zm0-4H15v-2h10Zm0-4H15v-2h10Zm0-4H15V8h10Z"/>',

  solidBadged:
    '<path d="M23.66 10H15V8h7.78a7.42 7.42 0 0 1 .89-6H8a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V13.5a7.49 7.49 0 0 1-6.34-3.5M13 26h-2v-2h2Zm0-4h-2v-2h2Zm0-4h-2v-2h2Zm0-4h-2v-2h2Zm0-4h-2V8h2Zm12 16H15v-2h10Zm0-4H15v-2h10Zm0-4H15v-2h10Zm0-4H15v-2h10Z"/>',
};

export const listIconName = 'list';
export const listIcon: IconShapeTuple = [listIconName, renderIcon(icon)];
