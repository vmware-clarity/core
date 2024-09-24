/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M18.104 31.967a2.02 2.02 0 0 1-1.43-.59l-7.488-7.4H4.013A2.005 2.005 0 0 1 2 21.979v-7.99c0-1.104.901-1.998 2.013-1.998h5.254l7.378-7.402a2.02 2.02 0 0 1 2.22-.473 2 2 0 0 1 1.252 1.882V29.97c0 .81-.493 1.54-1.248 1.847-.243.1-.503.15-.765.15M4.013 13.988v7.99h5.596a1 1 0 0 1 .715.28l7.78 7.712V5.997l-7.7 7.67a1 1 0 0 1-.714.3z" clip-rule="evenodd"/><path d="M22.57 24.366c.126.431.527.725.98.72.184.012.368-.026.533-.11a8.19 8.19 0 0 0 3.916-7.126 8.19 8.19 0 0 0-4.178-6.978 1.01 1.01 0 0 0-1.03-.03.998.998 0 0 0 .023 1.758 6.2 6.2 0 0 1 3.131 5.265 6.19 6.19 0 0 1-2.94 5.372.995.995 0 0 0-.435 1.13"/>',
  solid:
    '<path d="m9.045 12.11 9.401-7.87c.297-.25.719-.31 1.079-.154s.591.5.592.88v26.067c0 .38-.232.725-.592.881s-.782.096-1.079-.155l-9.572-8.034H3.006c-.555 0-1.006-.433-1.006-.968v-9.679c0-.534.45-.968 1.007-.968zM22.57 24.103c.126.418.527.703.98.697.184.012.368-.025.533-.107 2.48-1.475 3.97-4.1 3.916-6.905s-1.642-5.375-4.178-6.762a1.04 1.04 0 0 0-1.03-.028.96.96 0 0 0-.517.858c.005.355.213.68.54.845 1.904 1.053 3.092 2.99 3.131 5.102.04 2.111-1.076 4.088-2.94 5.206a.95.95 0 0 0-.435 1.094"/>',
};

export const volumeDownIconName = 'volume-down';
export const volumeDownIcon: IconShapeTuple = [volumeDownIconName, renderIcon(icon)];
