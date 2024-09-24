/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M32 15h1c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1h-1v6c0 .55-.45 1-1 1H8.13c-1.09 0-2.13-.42-2.91-1.18-.77-.76-1.21-1.8-1.22-2.89V7c0-1.66 1.35-3 3-3h23.58c.55 0 1 .45 1 1s-.45 1-1 1H7c-.49 0-.91.34-1 .82v.36A1 1 0 0 0 7 8h24c.55 0 1 .45 1 1zm-6.49 5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5M30 30H8.13c-1.16.01-2.11-.91-2.13-2.07V9.88c.32.09.66.13 1 .12h23v5h-7c-2.76 0-5 2.24-5 5s2.24 5 5 5h7zm-7-7h9v-6h-9c-1.66 0-3 1.34-3 3s1.34 3 3 3" clip-rule="evenodd"/>',
  solid:
    '<path fill-rule="evenodd" d="M33.03 14h-1.88V9c0-.552-.435-1-.97-1H6.909c-.536 0-.97-.448-.97-1s.434-1 .97-1h22.883c.535 0 .97-.448.97-1s-.435-1-.97-1H6.909a2.8 2.8 0 0 0-2.033.819A2.98 2.98 0 0 0 4 6.88v21a4.2 4.2 0 0 0 1.183 2.921A3.94 3.94 0 0 0 8.023 32H30.18c.535 0 .97-.448.97-1v-5h1.88a.9.9 0 0 0 .675-.24.94.94 0 0 0 .295-.67v-10c.007-.57-.418-1.048-.97-1.09m-.911 10h-8.32c-2.068-.076-3.687-1.866-3.616-4-.071-2.134 1.547-3.924 3.617-4h8.319zm-6.264-4.08c0 .828-.651 1.5-1.454 1.5-.804 0-1.455-.672-1.455-1.5s.651-1.5 1.455-1.5c.803 0 1.454.672 1.454 1.5" clip-rule="evenodd"/>',
};

export const walletIconName = 'wallet';
export const walletIcon: IconShapeTuple = [walletIconName, renderIcon(icon)];
