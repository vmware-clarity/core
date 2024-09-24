/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18.33 4.86A3.17 3.17 0 0 0 15.15 2h-.13C13.36 2 12 3.34 12 4.99v9.006H5c-.85 0-1.7.38-2.28 1.02-.53.58-.78 1.31-.71 2.09l.97 8.707c.03.3.11.58.22.85l2.36 5.518A3.01 3.01 0 0 0 8.32 34h11.01c.65 0 1.28-.21 1.8-.6L24 31.25v-2.248c-.22 0-.43.07-.6.2L19.93 31.8c-.17.13-.38.2-.6.2H8.32c-.4 0-.76-.24-.92-.61l-2.36-5.518a.9.9 0 0 1-.07-.28l-.96-8.688a.67.67 0 0 1 .2-.54c.2-.22.52-.37.81-.37h8c.55 0 1-.45 1-1V4.99c0-.56.45-.99 1.02-.99h.13c.61 0 1.14.46 1.19 1.05.74 7.768 6.87 11.636 7.13 11.796.16.1.34.15.53.15v-2.229c-1.4-1.06-5.14-4.399-5.67-9.907zM27 13.945c-.55 0-1 .45-1 1V30.94c0 .55.45 1 1 1h7V13.946zm5 15.995h-4V15.946h4z"/>',
  solid:
    '<path d="M18.33 4.86A3.17 3.17 0 0 0 15.15 2h-.13C13.36 2 12 3.34 12 4.99v9.006H5c-.85 0-1.7.38-2.28 1.02-.53.58-.78 1.31-.71 2.09l.97 8.707c.03.3.11.58.22.85l2.36 5.518A3.01 3.01 0 0 0 8.32 34h11.01c.65 0 1.28-.21 1.8-.6L24 31.25V14.767c-1.4-1.06-5.14-4.399-5.67-9.907M27 13.945c-.55 0-1 .45-1 1V30.94c0 .55.45 1 1 1h7V13.946z"/>',
};

export const thumbsUpIconName = 'thumbs-up';
export const thumbsUpIcon: IconShapeTuple = [thumbsUpIconName, renderIcon(icon)];
