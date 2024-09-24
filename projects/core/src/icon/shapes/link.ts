/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M19.829 8.332a5.98 5.98 0 0 1 8.447 0l-.02.04A5.98 5.98 0 0 1 30 12.599a5.98 5.98 0 0 1-1.744 4.225l-4.694 4.683a5.98 5.98 0 0 1-8.447 0 6 6 0 0 1-1.151-1.632l1.29-1.289q.13-.128.281-.231c.18.652.524 1.245 1 1.722a3.985 3.985 0 0 0 5.626 0l4.694-4.683a3.96 3.96 0 0 0 1.152-2.795 3.96 3.96 0 0 0-1.152-2.795 3.986 3.986 0 0 0-5.625 0l-2.462 2.457a8 8 0 0 0-2.102-.282h-.49z"/><path d="m14.794 27.408 2.462-2.458a8 8 0 0 0 2.092.242h.5l-3.652 3.646A5.971 5.971 0 0 1 6 24.613c0-1.587.63-3.107 1.749-4.225l4.704-4.724a5.98 5.98 0 0 1 8.447 0 5.9 5.9 0 0 1 1.15 1.632l-1.29 1.29q-.123.148-.27.271a3.9 3.9 0 0 0-1.002-1.722 3.985 3.985 0 0 0-5.624 0L9.17 21.818a3.96 3.96 0 0 0-1.153 2.795 3.96 3.96 0 0 0 1.153 2.795 3.985 3.985 0 0 0 5.624 0"/>',
};

export const linkIconName = 'link';
export const linkIcon: IconShapeTuple = [linkIconName, renderIcon(icon)];
