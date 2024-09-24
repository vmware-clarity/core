/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M27.961 30.051H12.9a8.26 8.26 0 0 0 1.662-5.36v-3.657h4.477c.573 0 1.038-.45 1.038-1.002 0-.554-.465-1.002-1.038-1.002h-4.477v-7.706a5.15 5.15 0 0 1 1.557-3.747 5.54 5.54 0 0 1 3.855-1.573 5.48 5.48 0 0 1 3.936 1.733c.387.41 1.046.439 1.47.065a.98.98 0 0 0 .068-1.417c-2.092-2.193-5.367-2.917-8.24-1.822-2.872 1.095-4.75 3.782-4.724 6.761v7.706H8.04c-.574 0-1.039.448-1.039 1.002 0 .553.465 1.002 1.039 1.002h4.445v3.657c0 4.74-2.991 5.36-3.116 5.36-.573.047-.999.534-.95 1.088.049.553.553.963 1.127.916H27.96c.574 0 1.039-.448 1.039-1.002 0-.553-.465-1.002-1.039-1.002"/>',
  solid:
    '<path fill-rule="evenodd" d="M2 18C2 9.163 9.163 2 18 2a16 16 0 0 1 16 16c0 8.837-7.163 16-16 16S2 26.837 2 18m9.74 9.92H24.5a1.25 1.25 0 1 0 0-2.5H15a7.65 7.65 0 0 0 .78-3.52V19h3a1 1 0 1 0 0-2h-3v-5.12A3.35 3.35 0 0 1 19 8.42a3.08 3.08 0 0 1 2.3 1.09 1.26 1.26 0 0 0 1.87-1.69 5.63 5.63 0 0 0-4.21-1.94 5.85 5.85 0 0 0-5.72 6V17h-2.5a1 1 0 1 0 0 2h2.5v2.9c0 3.05-1.57 3.54-1.72 3.54a1.25 1.25 0 0 0 .22 2.48" clip-rule="evenodd"/>',
};

export const poundIconName = 'pound';
export const poundIcon: IconShapeTuple = [poundIconName, renderIcon(icon)];
