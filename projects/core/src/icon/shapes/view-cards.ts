/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M32 17H21a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2M15 30H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2m6 0h11a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2H21a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2m0-2v-7h11v7zM4 28v-7h11v7zm17-13V8h11v7zm-6 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2M4 15V8h11v7z" clip-rule="evenodd"/>',
};

export const viewCardsIconName = 'view-cards';
export const viewCardsIcon: IconShapeTuple = [viewCardsIconName, renderIcon(icon)];
