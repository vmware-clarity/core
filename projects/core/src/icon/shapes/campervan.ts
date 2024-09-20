/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M9.5 24C7.6 24 6 25.6 6 27.5S7.6 31 9.5 31s3.5-1.6 3.5-3.5S11.4 24 9.5 24m0 5c-.8 0-1.5-.7-1.5-1.5S8.7 26 9.5 26s1.5.7 1.5 1.5-.7 1.5-1.5 1.5m14-25v20c-1.9 0-3.5 1.6-3.5 3.5s1.5 3.5 3.5 3.5c1.9 0 3.5-1.6 3.5-3.5S25.4 24 23.5 24zm0 25c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5"/><path d="M33 20.1V20h-.1l-3.5-5.5C31 13.6 32 12 32 10.3v-.6C32 7.1 29.9 5 27.3 5h-8.5c-1.9 0-3.7 1.2-4.4 3H5c-1.7 0-3 1.3-3 3v17h2V11c0-.6.4-1 1-1h10.9l.1-.8c.3-1.3 1.4-2.2 2.7-2.2h8.5C28.8 7 30 8.2 30 9.7v.5c0 1.5-1.2 2.7-2.7 2.7H24v9h7.8l.2.3V25c0 .6-.4 1-1 1h-2v2h2c1.7 0 3-1.3 3-3v-3.3zm-7-.1v-5h1.5l3.1 5z"/><path d="M19 9h8v2h-8zm1 13h2v-9h-7v15h2V15h3zM6 20h7v-7H6zm2-5h3v3H8z"/>',
  solid:
    '<path d="M9.5 24C7.6 24 6 25.6 6 27.5S7.6 31 9.5 31s3.5-1.6 3.5-3.5v-.1c0-1.9-1.6-3.4-3.5-3.4"/><circle cx="23.5" cy="27.5" r="3.5"/><path d="M29.5 14.5C31 13.6 32 12 32 10.2v-.6C32 7 29.9 5 27.3 5h-8.5c-1.9 0-3.7 1.2-4.4 3H5c-1.7 0-3 1.3-3 3v17h2V11c0-.6.4-1 1-1h10.9l.1-.8c.3-1.3 1.4-2.2 2.7-2.2h8.5C28.8 7 30 8.2 30 9.7v.5c0 1.5-1.2 2.7-2.7 2.7H24v9h7.8l.2.3V25c0 .6-.4 1-1 1h-2v2h2c1.7 0 3-1.3 3-3v-3.3z"/><path d="M19 9h7.9v2H19zm1 13h1.9v-9H15v15h1.9V15H20zM6 13h6.9v7H6z"/>',
};

export const campervanIconName = 'campervan';
export const campervanIcon: IconShapeTuple = [campervanIconName, renderIcon(icon)];
