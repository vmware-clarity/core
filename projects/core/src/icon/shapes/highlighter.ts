/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M5 29.5h5c.27 0 .52-.11.71-.29l1-1.001s.02-.04.04-.06l5.63-1.67s.03-.01.04-.02c.03 0 .05-.02.08-.03.08-.04.16-.09.23-.15.01-.01.03-.01.04-.03l14.47-13.495A6 6 0 0 0 34 8.502c0-1.61-.62-3.111-1.76-4.251-2.34-2.341-6.14-2.341-8.46-.03L9.34 17.705c-.08.08-.15.18-.2.28-.01.02-.02.05-.03.08s-.03.05-.04.08l-1.65 5.562c-.08.06-.15.11-.21.19l-3 4.002c-.23.3-.26.71-.09 1.05a1 1 0 0 0 .89.55zM25.17 5.67a4.007 4.007 0 0 1 5.66 0c.76.76 1.17 1.76 1.17 2.831s-.42 2.08-1.15 2.811L17.11 24.118l-5.66-5.662zM10.5 20.326l4.7 4.702-3.85 1.14-1.99-1.99 1.14-3.862zm-2.28 5.542 1.5 1.5-.12.12H7.01zm24.79 4.622H3c-.55 0-1 .45-1 1v2c0 .551.45 1.001 1 1.001h30c.55 0 1-.45 1-1v-2c0-.551-.45-1.001-1-1.001z"/>',
};

export const highlighterIconName = 'highlighter';
export const highlighterIcon: IconShapeTuple = [highlighterIconName, renderIcon(icon)];
