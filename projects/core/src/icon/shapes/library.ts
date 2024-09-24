/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="m31.89 28.69-7.357-15.6c-.23-.5-.83-.71-1.33-.48l-3.219 1.52V8.01c0-.55-.45-1-1-1h-4.998V5c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v26c0 .55.45 1 1 1h13.995c.55 0 1-.45 1-1V18.49l6.097 12.93a1 1 0 0 0 1.34.47l3.998-1.88a1 1 0 0 0 .51-.57c.09-.25.08-.52-.04-.76zM11.997 8v22H6V6h5.998zm5.998 22h-3.999V9h4zm9.477-.33-6.498-13.79 2.19-1.03 6.497 13.79z"/>',
  solid:
    '<path d="M11.003 4H5c-.55 0-1 .45-1 1v26c0 .55.45 1 1 1h6.002c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1M31.91 29.09l-7.363-15.6c-.23-.5-.83-.71-1.33-.48l-3.221 1.52V8c0-.55-.45-1-1-1h-5.002v25h5.001c.55 0 1-.45 1-1V14.87L28.08 32l3.35-1.58c.241-.11.421-.32.511-.57s.08-.52-.04-.76z"/>',
};

export const libraryIconName = 'library';
export const libraryIcon: IconShapeTuple = [libraryIconName, renderIcon(icon)];
