/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M21.54 18.157a4.1 4.1 0 0 1 2.056-.564v-.02c1.523-.076 2.963.719 3.747 2.068a4.38 4.38 0 0 1 0 4.384c-.784 1.35-2.224 2.144-3.747 2.068a4.15 4.15 0 0 1-1.881-.443c-1.772-.82-2.916-2.633-2.925-4.637 0-2.806 1.735-7.332 5.635-10.601.293-.28.711-.368 1.087-.23a1.1 1.1 0 0 1 .702.886 1.12 1.12 0 0 1-.434 1.054 14.6 14.6 0 0 0-4.24 6.035m-10.86-.001a4.1 4.1 0 0 1 2.056-.563h.02c1.523-.076 2.963.718 3.746 2.068a4.38 4.38 0 0 1 0 4.384c-.783 1.349-2.223 2.144-3.746 2.067a4.2 4.2 0 0 1-1.833-.442c-1.805-.802-2.98-2.63-2.993-4.657 0-2.806 1.735-7.333 5.635-10.602a1.05 1.05 0 0 1 1.51.151c.378.473.312 1.17-.145 1.56a14.5 14.5 0 0 0-4.25 6.034"/>',
};

export const blockQuoteIconName = 'block-quote';
export const blockQuoteIcon: IconShapeTuple = [blockQuoteIconName, renderIcon(icon)];
