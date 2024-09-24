/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M14 18H6v-4h4c-.43-.53-.67-1.19-.68-1.87V12H5.5c-.83 0-1.5.67-1.5 1.5V20h12zm4 1.18 6.38-6.35c.32-.23.47-.62.39-1.01a.99.99 0 0 0-.75-.77 1 1 0 0 0-1.02.36l-4 3.95V3c0-.55-.45-1-1-1s-1 .45-1 1v12.4l-4-3.95c-.39-.39-1.03-.39-1.42 0s-.39 1.03 0 1.42l6.41 6.31zM14 24c0 .55.45 1 1 1h6c.55 0 1-.45 1-1s-.45-1-1-1h-6c-.55 0-1 .45-1 1m16.5-12h-3.84v.13c0 .68-.23 1.34-.66 1.87h4v4h-8l-2 2h12v-6.5c0-.83-.67-1.5-1.5-1.5M30 32H6V22H4v10c0 1.1.9 2 2 2h24c1.1 0 2-.9 2-2V22h-2z"/>',
  solid:
    '<path d="m18 19.18 6.38-6.35c.32-.23.47-.62.39-1.01a.99.99 0 0 0-.75-.77 1 1 0 0 0-1.02.36l-4 3.95V3c0-.55-.45-1-1-1s-1 .45-1 1v12.4l-4-3.95c-.39-.39-1.03-.39-1.42 0s-.39 1.03 0 1.42l6.41 6.31zM30.5 12h-3.84v.13c0 .8-.32 1.56-.88 2.12L22 18h10v-4.5c0-.83-.67-1.5-1.5-1.5m-20.3 2.25c-.56-.56-.88-1.32-.88-2.12V12H5.5c-.83 0-1.5.67-1.5 1.5V18h10zm9.21 6.35L18 22l-1.41-1.4L16 20H4v12c0 1.1.9 2 2 2h24c1.1 0 2-.9 2-2V20H20zM22 24c0 .55-.45 1-1 1h-6c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1"/>',
};

export const archiveIconName = 'archive';
export const archiveIcon: IconShapeTuple = [archiveIconName, renderIcon(icon)];
