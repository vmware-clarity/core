/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M34 8a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2Zm-2 20H4V8h28z"/><circle cx="6.21" cy="10.25" r="1.25"/><circle cx="29.81" cy="10.25" r="1.25"/><circle cx="6.21" cy="25.42" r="1.25"/><circle cx="29.81" cy="25.42" r="1.25"/><path d="M11.88 18.08a3.59 3.59 0 1 0 3.59-3.59 3.8 3.8 0 0 0-.91.13l.44 1.54a2 2 0 0 1 .5-.07 2 2 0 1 1-2 2 1.6 1.6 0 0 1 .08-.5L12 17.16a3.5 3.5 0 0 0-.12.92"/><path d="M15.47 25.73a7.66 7.66 0 0 1-7.65-7.65 7.6 7.6 0 0 1 .27-2l-1.55-.38a9.24 9.24 0 0 0 17.8 4.95h-1.68a7.64 7.64 0 0 1-7.19 5.08m12.75-7.9a.8.8 0 0 0-.8-.8h-2.76a9.26 9.26 0 0 0-9.19-8.2 9.4 9.4 0 0 0-2.38.32l.42 1.54a8 8 0 0 1 2-.26A7.66 7.66 0 0 1 23 17h-2.08a.8.8 0 0 0 0 1.6h6.5a.8.8 0 0 0 .8-.77"/>',
  solid:
    '<path d="M32 6H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2M12 17.16l1.54.42a1.6 1.6 0 0 0-.08.5 2 2 0 1 0 2-2 2 2 0 0 0-.5.07l-.41-1.54a3.8 3.8 0 0 1 .91-.13 3.59 3.59 0 1 1-3.59 3.59 3.5 3.5 0 0 1 .13-.91M5.31 8a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 5.31 8m0 20.06a1.25 1.25 0 1 1 1.25-1.25 1.25 1.25 0 0 1-1.25 1.25m10.16-.73A9.22 9.22 0 0 1 6.54 15.7l1.55.41a7.6 7.6 0 0 0-.27 2 7.64 7.64 0 0 0 14.84 2.57h1.68a9.25 9.25 0 0 1-8.87 6.65m12-8.7h-6.5a.8.8 0 0 1 0-1.6H23a7.66 7.66 0 0 0-7.57-6.6 8 8 0 0 0-2 .26l-.42-1.54a9.4 9.4 0 0 1 2.38-.32A9.26 9.26 0 0 1 24.66 17h2.76a.8.8 0 0 1 0 1.6Zm3.39 9.43a1.25 1.25 0 1 1 1.25-1.25 1.25 1.25 0 0 1-1.3 1.25Zm0-17.56a1.25 1.25 0 1 1 1.25-1.25 1.25 1.25 0 0 1-1.3 1.25Z"/>',
};

export const hardDriveIconName = 'hard-drive';
export const hardDriveIcon: IconShapeTuple = [hardDriveIconName, renderIcon(icon)];
