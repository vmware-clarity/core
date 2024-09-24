/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M30 30.2V12l-8.1-7.9H7.8C6.8 4.1 6 4.9 6 6v24.2c0 1 .7 1.8 1.7 1.8h20.4c1 0 1.8-.7 1.8-1.7.1 0 .1-.1.1-.1M22 6.6l5.6 5.4H22zM28 30H7.9L8 6h12v8h8z"/><path d="M12 24c0 1.7 1.3 3 3 3s3-1.3 3-3v-4h-6zm1.4 0v-2.6h3.2V24c.1.9-.6 1.7-1.5 1.7-.9.1-1.7-.6-1.7-1.5zm4.8-15c0-.6-.4-1-1-1H15v2h2.2c.6 0 1-.4 1-1m-5.5 1c-.6 0-1 .4-1 1s.4 1 1 1H15v-2zm4.5 4c.6 0 1-.4 1-1s-.4-1-1-1H15v2zm-5.5 1c0 .6.4 1 1 1H15v-2h-2.3c-.5 0-1 .4-1 1m5.5 3c.6 0 1-.4 1-1s-.4-1-1-1H15v2z"/>',
  solid:
    '<path d="M15 25.6c.9 0 1.6-.7 1.6-1.6v-2.6h-3.2V24c0 .9.7 1.6 1.6 1.6"/><path d="M21.9 4H7.8C6.8 4 6 4.9 6 5.9v24.2c0 1 .8 1.9 1.8 1.9h20.3c1 0 1.8-.9 1.8-1.9V11.9zM18 24c0 1.7-1.3 3-3 3s-3-1.3-3-3v-4h6zm-.8-12c.6 0 1 .4 1 1s-.4 1-1 1H15v2h2.2c.6 0 1 .4 1 1s-.4 1-1 1H15v-2h-2.2c-.6 0-1-.4-1-1s.4-1 1-1H15v-2h-2.2c-.6 0-1-.4-1-1s.4-1 1-1H15V8h2.2c.6 0 1 .4 1 1s-.4 1-1 1H15v2zm4.7 0V6.5l5.7 5.5z"/>',
};

export const fileZipIconName = 'file-zip';
export const fileZipIcon: IconShapeTuple = [fileZipIconName, renderIcon(icon)];
