/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M33.238 15.305a.997.997 0 0 0 1.625-.325 1 1 0 0 0-.208-1.086L22.077 1.3a.997.997 0 0 0-1.355.053 1 1 0 0 0-.053 1.358zm-5.171-2.151 1.407 1.41-6.778 6.782A11.02 11.02 0 0 1 19.86 31.59a.997.997 0 0 1-1.418.01l-6.319-6.333-7.427 7.443a.997.997 0 0 1-1.729-.417c-.088-.365.037-.75.321-.994l7.437-7.432-6.319-6.332a1 1 0 0 1 0-1.42 10.9 10.9 0 0 1 10.223-2.841l6.778-6.792 1.427 1.41-7.187 7.202a1 1 0 0 1-.998.25 8.97 8.97 0 0 0-8.076 1.53L19.102 29.45a9.02 9.02 0 0 0 1.527-8.093 1 1 0 0 1 .25-1z"/>',

  solid:
    '<path d="M33.228 15.42a1 1 0 0 0 .709.29 1.002 1.002 0 0 0 .709-1.71L22.07 1.41a.996.996 0 0 0-1.355.052c-.369.37-.391.961-.052 1.358zm-18.602-2.04 6.776-6.79 8.064 8.08-6.776 6.79a11.02 11.02 0 0 1-2.835 10.24.997.997 0 0 1-1.417.01l-6.317-6.33-7.425 7.44a.997.997 0 0 1-1.728-.417 1 1 0 0 1 .321-.993L10.714 24l-6.307-6.36a1 1 0 0 1 0-1.42 10.9 10.9 0 0 1 10.22-2.84"/>',
};

export const pinIconName = 'pin';
export const pinIcon: IconShapeTuple = [pinIconName, renderIcon(icon)];
