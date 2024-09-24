/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M33.59 6.19A1 1 0 0 0 32.7 6l-9.61 3-9.63-4.89a1 1 0 0 0-.84 0l-10 4.09a1 1 0 0 0-.62.93v20.48a1 1 0 0 0 1.38.92L13 26.58l9.59 4.92a1 1 0 0 0 .46.11 1 1 0 0 0 .3 0l10-3.12a1 1 0 0 0 .7-1V7a1 1 0 0 0-.46-.81M32 26.75l-8.32 2.6v-2.29h-1.6v2l-8.4-4.31v-1.69h-1.6v1.72L4 28.11V9.79l8.08-3.33v2.35h1.6V6.47l8.4 4.3v2.1h1.6V11L32 8.36Z"/><path d="M22.08 15.06h1.6v3.81h-1.6zm0 6h1.6v3.81h-1.6zm-10-10h1.6v3.81h-1.6zm0 6.07h1.6v3.75h-1.6z"/>',

  outlineAlerted:
    '<path d="M22.08 15.06h1.6v3.81h-1.6zm0 6h1.6v3.81h-1.6zm-10-10h1.6v3.81h-1.6zm0 6.07h1.6v3.75h-1.6z"/><path d="M33.68 15.4H32v11.35l-8.32 2.6v-2.29h-1.6v2l-8.4-4.31v-1.69h-1.6v1.72L4 28.11V9.79l8.08-3.33v2.35h1.6V6.47l5.67 2.9 1-1.76-6.9-3.5a1 1 0 0 0-.84 0L2.62 8.2a1 1 0 0 0-.62.93v20.48a1 1 0 0 0 1.38.92l9.62-4 9.59 4.92a1 1 0 0 0 .46.11.8.8 0 0 0 .3 0l10-3.12a1 1 0 0 0 .7-1V15.38Z"/>',

  outlineBadged:
    '<path d="M22.08 21.06h1.6v3.81h-1.6zm-10-10h1.6v3.81h-1.6zm0 6.07h1.6v3.75h-1.6z"/><path d="M32 13.22v13.53l-8.32 2.6v-2.29h-1.6v2l-8.4-4.31v-1.69h-1.6v1.72L4 28.11V9.79l8.08-3.33v2.35h1.6V6.47l8.4 4.3v2.1h1.6V11l.58-.18A7.7 7.7 0 0 1 23.12 9l-9.66-4.89a1 1 0 0 0-.84 0l-10 4.09a1 1 0 0 0-.62.93v20.48a1 1 0 0 0 1.38.92l9.62-4 9.59 4.92a1 1 0 0 0 .46.11.8.8 0 0 0 .3 0l10-3.12a1 1 0 0 0 .7-1V12.31a7.6 7.6 0 0 1-2.05.91"/>',

  solid:
    '<path d="M33.31 7.35 25 9.94V14h-2v-3.71l-9-4.61V9h-2V5.27l-9.67 4a.53.53 0 0 0-.33.48v20.7a.53.53 0 0 0 .74.49L12 27.12V23h2v4.53l9 4.61V28h2v3.79l8.63-2.7a.53.53 0 0 0 .37-.51V7.86a.53.53 0 0 0-.69-.51M14 21h-2v-4h2Zm0-6h-2v-4h2Zm11 11h-2v-4h2Zm0-6h-2v-4h2Z"/>',

  solidAlerted:
    '<path d="M33.68 15.4H22.23a3.68 3.68 0 0 1-3.18-5.51l.72-1.25L14 5.68V9h-2V5.27l-9.67 4a.52.52 0 0 0-.33.48v20.7a.54.54 0 0 0 .74.49L12 27.12V23h2v4.53l9 4.61V28h2v3.79l8.63-2.7a.54.54 0 0 0 .37-.51v-13.2ZM14 21h-2v-4h2Zm0-6h-2v-4h2Zm11 11h-2v-4h2Zm0-6h-2v-4h2Z"/>',

  solidBadged:
    '<path d="M30 13.5a7.48 7.48 0 0 1-5-1.92V14h-2v-3.71l-9-4.61V9h-2V5.27l-9.67 4a.52.52 0 0 0-.33.48v20.7a.54.54 0 0 0 .74.49L12 27.12V23h2v4.53l9 4.61V28h2v3.79l8.63-2.7a.54.54 0 0 0 .37-.51V12.34a7.5 7.5 0 0 1-4 1.16M14 21h-2v-4h2Zm0-6h-2v-4h2Zm11 11h-2v-4h2Zm0-6h-2v-4h2Z"/>',
};

export const mapIconName = 'map';
export const mapIcon: IconShapeTuple = [mapIconName, renderIcon(icon)];
