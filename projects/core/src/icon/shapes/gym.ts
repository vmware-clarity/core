/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M9 26c-1.65 0-3-1.35-3-3V13c0-1.65 1.35-3 3-3s3 1.35 3 3v10c0 1.65-1.35 3-3 3m0-14c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1s1-.45 1-1V13c0-.55-.45-1-1-1"/><path d="M5 23c-1.65 0-3-1.35-3-3v-4c0-1.65 1.35-3 3-3s3 1.35 3 3v4c0 1.65-1.35 3-3 3m0-8c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1v-4c0-.55-.45-1-1-1m22 11c-1.65 0-3-1.35-3-3V13c0-1.65 1.35-3 3-3s3 1.35 3 3v10c0 1.65-1.35 3-3 3m0-14c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1s1-.45 1-1V13c0-.55-.45-1-1-1"/><path d="M31 23c-1.65 0-3-1.35-3-3v-4c0-1.65 1.35-3 3-3s3 1.35 3 3v4c0 1.65-1.35 3-3 3m0-8c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1s1-.45 1-1v-4c0-.55-.45-1-1-1m-6 2H11v2h14z"/>',
  solid:
    '<path d="M9 26c-1.65 0-3-1.35-3-3V13c0-1.65 1.35-3 3-3s3 1.35 3 3v10c0 1.65-1.35 3-3 3"/><path d="M5 23c-1.65 0-3-1.35-3-3v-4c0-1.65 1.35-3 3-3s3 1.35 3 3v4c0 1.65-1.35 3-3 3m22 3c-1.65 0-3-1.35-3-3V13c0-1.65 1.35-3 3-3s3 1.35 3 3v10c0 1.65-1.35 3-3 3"/><path d="M31 23c-1.65 0-3-1.35-3-3v-4c0-1.65 1.35-3 3-3s3 1.35 3 3v4c0 1.65-1.35 3-3 3m-6-6H11v2h14z"/>',
};

export const gymIconName = 'gym';
export const gymIcon: IconShapeTuple = [gymIconName, renderIcon(icon)];
