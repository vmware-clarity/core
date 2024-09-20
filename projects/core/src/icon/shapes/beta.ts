/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M7.21 14.07h3a1.61 1.61 0 0 1 1.81 1.5 1.44 1.44 0 0 1-.84 1.34 1.67 1.67 0 0 1 1.1 1.53 1.75 1.75 0 0 1-2 1.63H7.21Zm2.71 2.42c.48 0 .82-.28.82-.67s-.34-.65-.82-.65H8.49v1.32Zm.2 2.48a.75.75 0 1 0 0-1.47H8.49V19Zm4.43-3.74v1.2h3v1.16h-3v1.32h3.33v1.16h-4.62v-6h4.62v1.16Zm5.86 0h-1.87v-1.16h5v1.16H21.7v4.84h-1.29ZM28 19.12h-2.68l-.38.95H23.5l2.44-6h1.44l2.45 6h-1.45ZM27.55 18l-.89-2.19-.89 2.19Z"/><path d="M8.06 30a.84.84 0 0 1-.38-.08 1 1 0 0 1-.62-.92v-4h-4a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h30a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H13.48l-4.71 4.71a1 1 0 0 1-.71.29m-4-7h4a1 1 0 0 1 1 1v2.59l3.3-3.3a1 1 0 0 1 .7-.29h19V11h-28Z"/>',
  solid:
    '<path d="M25.8 18h1.7l-.8-2.2zm-15.4-.5H8.5V19h1.6c.4.1.8-.2.9-.6s-.2-.8-.6-.9m.3-1.7c0-.4-.3-.7-.8-.7H8.5v1.3h1.4c.5.1.8-.2.8-.6"/><path d="M33.1 9h-30c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h4v4c0 .4.2.8.6.9.1.1.2.1.4.1.3 0 .5-.1.7-.3l4.7-4.7h19.6c.6 0 1-.4 1-1V10c0-.6-.5-1-1-1M10.4 20.1H7.2v-6h3c.9-.1 1.7.5 1.8 1.4v.1c0 .6-.3 1.1-.8 1.3.6.2 1.1.8 1.1 1.5-.1 1-.9 1.7-1.9 1.7m7.5-4.9h-3.3v1.2h3v1.2h-3v1.3h3.3v1.2h-4.6v-6h4.6zm3.8 4.9h-1.3v-4.8h-1.9v-1.2h5v1.2h-1.8zm6.7 0-.4-1h-2.7l-.4 1h-1.4l2.4-6h1.4l2.5 6z"/>',
};

export const betaIconName = 'beta';
export const betaIcon: IconShapeTuple = [betaIconName, renderIcon(icon)];
