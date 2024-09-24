/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M33 18h-4.25l.5-2H33a1 1 0 0 0 0-2h-3.26l2.17-8.76A1 1 0 0 0 30 4.76L27.68 14h-6.37L19 4.76a1 1 0 0 0-1.94 0L14.79 14H8.42L6.13 4.76a1 1 0 0 0-1.94.48L6.36 14H3a1 1 0 0 0 0 2h3.85l.5 2H3a1 1 0 0 0 0 2h4.84l2.79 11.24a1 1 0 0 0 1.94 0L15.36 20h5.38l2.79 11.24a1 1 0 0 0 1.94 0L28.25 20H33a1 1 0 0 0 0-2m-5.82-2-.5 2H22.3l-.5-2ZM18 9.16 19.25 14h-2.4ZM8.91 16h5.38l-.5 2H9.41Zm2.69 10.84L9.91 20h3.39ZM15.85 18l.5-2h3.39l.5 2Zm8.64 8.84L22.8 20h3.39Z"/>',
  solid:
    '<path d="m17.74 16-.52 2h1.63l-.53-2zm-5.8 2h2.69l.53-2h-3.75zm1.35 5.1.81-3.1h-1.63zm8.15-5.1h2.69l.53-2h-3.75zm1.34 5.1.82-3.1h-1.63z"/><path d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2m11 18h-2.81L24 28.32a1.25 1.25 0 0 1-2.42 0L19.38 20h-2.69l-2.19 8.32a1.25 1.25 0 0 1-2.42 0L9.88 20H7a1 1 0 0 1 0-2h2.35l-.53-2H7a1 1 0 0 1 0-2h1.3l-1-3.68a1.25 1.25 0 0 1 2.42-.64L10.88 14h4.8l1.14-4.32a1.25 1.25 0 0 1 2.42 0L20.38 14h4.8l1.14-4.32a1.25 1.25 0 0 1 2.42.64l-1 3.68H29a1 1 0 0 1 0 2h-1.76l-.53 2H29a1 1 0 0 1 0 2"/>',
};

export const wonIconName = 'won';
export const wonIcon: IconShapeTuple = [wonIconName, renderIcon(icon)];
