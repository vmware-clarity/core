/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M8.5 29.65a6.51 6.51 0 0 1-6.5-6.5 6.39 6.39 0 0 1 6.5-6.36 6.39 6.39 0 0 1 6.5 6.36 6.51 6.51 0 0 1-6.5 6.5m0-11a4.5 4.5 0 1 0 4.5 4.5 4.51 4.51 0 0 0-4.5-4.5m19 11a6.51 6.51 0 0 1-6.5-6.5 6.5 6.5 0 0 1 13 0 6.51 6.51 0 0 1-6.5 6.5m0-11a4.5 4.5 0 1 0 4.5 4.5 4.51 4.51 0 0 0-4.5-4.5"/><path d="M19 24.66H8a1 1 0 0 1-.89-1.45l5-10 1.78.9-4.27 8.62H19Z"/><path d="M13 12.68h11v1.91H13z"/><path d="M28 24.66a1 1 0 0 1-.94-.66l-4.77-13.34H20a1 1 0 0 1-1-1 1 1 0 0 1 1-.93h3a.94.94 0 0 1 .94.6l5 14a1 1 0 0 1-.6 1.27 1 1 0 0 1-.34.06m-15-10a1 1 0 0 1-.71-.29l-1.7-1.71H8a1 1 0 0 1-1-1 .94.94 0 0 1 1-1h3a1.08 1.08 0 0 1 .75.27l2 2a1 1 0 0 1 0 1.41 1 1 0 0 1-.75.32"/>',
  solid:
    '<path d="M15 21.9c-.2-2-1.2-3.8-2.9-4.9l-2.5 4.9z"/><path d="M7.2 23.4c-.2-.3-.2-.7 0-1l3.2-6.3c-.6-.2-1.2-.2-1.8-.2C5 15.9 2 18.8 2 22.4s2.9 6.5 6.5 6.5c3 0 5.6-2.1 6.3-5H8c-.3 0-.7-.2-.8-.5M19 21.9h-4v.5c0 .5-.1 1-.2 1.5H19zm8.5-6c-.3 0-.6 0-.9.1l2.4 6.6c.2.5-.1 1.1-.6 1.3-.1 0-.2.1-.3.1-.4 0-.8-.3-.9-.7l-2.4-6.7c-3.2 1.6-4.5 5.5-3 8.7 1.6 3.2 5.5 4.5 8.7 3 3.2-1.6 4.5-5.5 3-8.7-1.3-2.3-3.5-3.7-6-3.7"/><path d="M24.7 16.7c.6-.3 1.3-.5 1.9-.6l-2.7-7.4c-.1-.5-.5-.7-.9-.8h-3c-.6 0-1 .5-1 1.1 0 .5.4.9 1 .9h2.3l.7 2h-9.6l-1.7-1.7c-.2-.1-.4-.2-.7-.2H8c-.6 0-1 .4-1 1s.4 1 1 1h2.6l1.2 1.2-1.5 3c.6.2 1.3.5 1.8.8l1.6-3.2h10z"/>',
};

export const bicycleIconName = 'bicycle';
export const bicycleIcon: IconShapeTuple = [bicycleIconName, renderIcon(icon)];
