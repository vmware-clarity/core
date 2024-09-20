/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M3.47 28a1 1 0 0 0-1.39 1.43l4.41 4.3a1 1 0 0 0 1.4-1.46ZM17.29 3.32a1 1 0 0 0-1.41 0 .9.9 0 0 0-.19.25L4.19 25.91l1.5 1.47L16.85 5.7l13.33 13.23L8.46 30.11 10 31.59l3.62-1.86a5.48 5.48 0 0 0 4.54 2.42 5.43 5.43 0 0 0 5.08-7.37l9.11-4.7a1 1 0 0 0 .53-.73 1 1 0 0 0-.28-.87Zm4.06 24.6a3.45 3.45 0 0 1-4.43 2 3.5 3.5 0 0 1-1.57-1.17l6-3.1a3.53 3.53 0 0 1 0 2.27m6.19-18.53a1 1 0 0 0 .71-.29l4.17-4.17A1 1 0 0 0 31 3.51l-4.17 4.18a1 1 0 0 0 0 1.41 1 1 0 0 0 .71.29m6.32 3.13a1 1 0 0 0-1.18-.77l-1.8.36a1 1 0 0 0-.77 1.19 1 1 0 0 0 1 .79h.21l1.79-.37a1 1 0 0 0 .75-1.2M22.42 5.64h.24a1 1 0 0 0 1-.8L24 3.08a1 1 0 0 0-2-.4l-.37 1.79a1 1 0 0 0 .79 1.17"/>',
  solid:
    '<path d="M3.47 28a1 1 0 0 0-1.39 1.43l4.41 4.3a1 1 0 0 0 1.4-1.46ZM27.54 9.39a1 1 0 0 0 .71-.29l4.17-4.17A1 1 0 0 0 31 3.51l-4.17 4.18a1 1 0 0 0 0 1.41 1 1 0 0 0 .71.29m6.32 3.13a1 1 0 0 0-1.18-.77l-1.8.36a1 1 0 0 0-.77 1.19 1 1 0 0 0 1 .79h.21l1.79-.37a1 1 0 0 0 .75-1.2M22.42 5.64h.24a1 1 0 0 0 1-.8L24 3.08a1 1 0 0 0-2-.4l-.37 1.79a1 1 0 0 0 .79 1.17m-5.13-2.32a1 1 0 0 0-1.41 0 .9.9 0 0 0-.19.25L4.19 25.91l1.5 1.47 2.79 2.72L10 31.59l3.62-1.86a5.48 5.48 0 0 0 4.54 2.42 5.43 5.43 0 0 0 5.08-7.37l9.11-4.7a1 1 0 0 0 .53-.73 1 1 0 0 0-.28-.87Zm4.06 24.6a3.45 3.45 0 0 1-4.43 2 3.5 3.5 0 0 1-1.57-1.17l6-3.1a3.53 3.53 0 0 1 0 2.27"/>',
};

export const announcementIconName = 'announcement';
export const announcementIcon: IconShapeTuple = [announcementIconName, renderIcon(icon)];
