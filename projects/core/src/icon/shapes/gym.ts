/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M9.938 26c-1.65 0-3-1.35-3-3v-.172c-.314.111-.65.172-1 .172-1.65 0-3-1.35-3-3v-4c0-1.65 1.35-3 3-3q.527.002 1 .172V13c0-1.65 1.35-3 3-3s3 1.35 3 3v4h12v-4c0-1.65 1.35-3 3-3s3 1.35 3 3v.172c.313-.111.65-.172 1-.172 1.65 0 3 1.35 3 3v4c0 1.65-1.35 3-3 3-.35 0-.687-.06-1-.172V23c0 1.65-1.35 3-3 3s-3-1.35-3-3v-4h-12v4c0 1.65-1.35 3-3 3m-3-10v4c0 .55-.45 1-1 1s-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1m2 7V13c0-.55.45-1 1-1s1 .45 1 1v10c0 .55-.45 1-1 1s-1-.45-1-1m20 0c0 .55-.45 1-1 1s-1-.45-1-1V13c0-.55.45-1 1-1s1 .45 1 1zm3-2c-.55 0-1-.45-1-1v-4c0-.55.45-1 1-1s1 .45 1 1v4c0 .55-.45 1-1 1" clip-rule="evenodd"/>',
  solid:
    '<path d="M9.938 26c-1.65 0-3-1.35-3-3v-.172c-.314.111-.65.172-1 .172-1.65 0-3-1.35-3-3v-4c0-1.65 1.35-3 3-3q.527.002 1 .172V13c0-1.65 1.35-3 3-3s3 1.35 3 3v4h12v-4c0-1.65 1.35-3 3-3s3 1.35 3 3v.172c.313-.111.65-.172 1-.172 1.65 0 3 1.35 3 3v4c0 1.65-1.35 3-3 3-.35 0-.687-.06-1-.172V23c0 1.65-1.35 3-3 3s-3-1.35-3-3v-4h-12v4c0 1.65-1.35 3-3 3"/>',
};

export const gymIconName = 'gym';
export const gymIcon: IconShapeTuple = [gymIconName, renderIcon(icon)];
