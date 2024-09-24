/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="m10.938 7.11 2-2.05-2.76-.42-1.24-2.63-1.23 2.63-2.76.42 2 2.05-.47 2.89 2.46-1.37 2.47 1.37zm2 18.89h4v-2h-4zm0-4h4v-2h-4zm13.53-12 2.46-1.37 2.47 1.37-.47-2.89 2-2.05-2.76-.42-1.24-2.63-1.23 2.63-2.76.42 2 2.05zm-23.53 9v15h2V20h2v-2h-3c-.55 0-1 .45-1 1m13.53-9 2.46-1.37 2.47 1.37-.47-2.89 2-2.05-2.76-.42-1.24-2.63-1.23 2.63-2.76.42 2 2.05zm11.47 2h-18c-.55 0-1 .45-1 1v21h2V14h16v20h2V13c0-.55-.45-1-1-1m6 6h-3v2h2v14h2V19c0-.55-.45-1-1-1m-21 0h4v-2h-4zm8 0h4v-2h-4zm0 4h4v-2h-4zm0 4h4v-2h-4z"/>',
  solid:
    '<path d="m26.468 10 2.46-1.37 2.47 1.37-.47-2.89 2-2.05-2.76-.42-1.24-2.63-1.23 2.63-2.76.42 2 2.05zm-23.53 9v15h2V20h2v-2h-3c-.55 0-1 .45-1 1m13.53-9 2.46-1.37 2.47 1.37-.47-2.89 2-2.05-2.76-.42-1.24-2.63-1.23 2.63-2.76.42 2 2.05zm11.47 2h-18c-.55 0-1 .45-1 1v21h20V13c0-.55-.45-1-1-1m-10.9 14.1h-4.2v-2.2h4.2zm0-4h-4.2v-2.2h4.2zm0-4h-4.2v-2.2h4.2zm8 8h-4.2v-2.2h4.2zm0-4h-4.2v-2.2h4.2zm0-4h-4.2v-2.2h4.2zm8.9-.1h-3v2h2v14h2V19c0-.55-.45-1-1-1m-23-10.89 2-2.05-2.76-.42-1.24-2.63-1.23 2.63-2.76.42 2 2.05-.47 2.89 2.46-1.37 2.47 1.37z"/>',
};

export const hotelIconName = 'hotel';
export const hotelIcon: IconShapeTuple = [hotelIconName, renderIcon(icon)];
