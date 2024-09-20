/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M15.82 26.06a1 1 0 0 1-.71-.29l-6.44-6.44a1 1 0 0 1-.29-.71 1 1 0 0 1 .29-.71L23 3.54a5.55 5.55 0 1 1 7.85 7.86L16.53 25.77a1 1 0 0 1-.71.29m-5-7.44 5 5L29.48 10a3.54 3.54 0 0 0 0-5 3.63 3.63 0 0 0-5 0Z"/><path d="M10.38 28.28a1 1 0 0 1-.71-.28l-3.22-3.23a1 1 0 0 1-.22-1.09l2.22-5.44a1 1 0 0 1 1.63-.33l6.45 6.44A1 1 0 0 1 16.2 26l-5.44 2.22a1.3 1.3 0 0 1-.38.06m-2.05-4.46 2.29 2.28 3.43-1.4-4.31-4.31Z"/><path d="M8.94 30h-5a1 1 0 0 1-.84-1.55l3.22-4.94a1 1 0 0 1 1.55-.16l3.21 3.22a1 1 0 0 1 .06 1.35L9.7 29.64a1 1 0 0 1-.76.36m-3.16-2h2.69l.53-.66-1.7-1.7Zm-2.72 3h30v3h-30z"/>',
};

export const highlighterIconName = 'highlighter';
export const highlighterIcon: IconShapeTuple = [highlighterIconName, renderIcon(icon)];
