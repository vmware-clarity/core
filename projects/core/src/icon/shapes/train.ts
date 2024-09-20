/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M29 28H7c-.55 0-1-.45-1-1V5.09C6 3.38 7.39 2 9.09 2h17.82C28.62 2 30 3.39 30 5.09V27c0 .55-.45 1-1 1M8 26h20V5.09c0-.6-.49-1.09-1.09-1.09H9.09C8.49 4 8 4.49 8 5.09z"/><path d="M25 16H11c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h14c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1m-13-2h12V8H12zm1 10c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3m0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1m10 4c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3m0-4c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1M9.67 30l-2.93 2.2c-.44.33-.53.96-.2 1.4.2.26.5.4.8.4.21 0 .42-.07.6-.2l5.07-3.8zm19.93 2.2L26.67 30h-3.33l5.07 3.8c.18.13.39.2.6.2.3 0 .6-.14.8-.4.33-.44.24-1.07-.2-1.4z"/>',
  solid:
    '<path d="m9.67 30-2.93 2.2c-.44.33-.53.96-.2 1.4.2.26.5.4.8.4.21 0 .42-.07.6-.2l5.07-3.8zm19.93 2.2L26.67 30h-3.33l5.07 3.8c.18.13.39.2.6.2.3 0 .6-.14.8-.4.33-.44.24-1.07-.2-1.4zM24 8H12v6h12zM13 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/><path d="M26.91 2H9.09C7.38 2 6 3.39 6 5.09V27c0 .55.45 1 1 1h22c.55 0 1-.45 1-1V5.09C30 3.38 28.61 2 26.91 2M13 24c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3m10 0c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3m3-9c0 .55-.45 1-1 1H11c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h14c.55 0 1 .45 1 1z"/><path d="M23 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>',
};

export const trainIconName = 'train';
export const trainIcon: IconShapeTuple = [trainIconName, renderIcon(icon)];
