/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M32 6H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2M4 8h28v5.08h-8.2v-4H22v4h-8v-4h-2v4H4Zm0 7h28v6.08h-3.08v-4.81H27v4.81h-8.08v-4.81H17v4.81H8.9v-4.81H7v4.81H4Zm19.8 13v-3.73h-1.6V28H14v-3.73h-1.6V28H4v-5h28v5Z"/>',

  outlineAlerted:
    '<path d="M33.68 15.4H32v5.68h-3.08v-4.81H27v4.81h-8.08v-4.81H17v4.81H8.9v-4.81H7v4.81H4V15h16.58a3.58 3.58 0 0 1-1.76-1.92H14v-4h-2v4H4V8h16.14l1.15-2H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V15.38ZM23.8 28v-3.73h-1.6V28H14v-3.73h-1.6V28H4v-5h28v5Z"/>',

  outlineBadged:
    '<path d="M30 13.5a7.5 7.5 0 0 1-2.45-.42H23.8v-2.86a7.5 7.5 0 0 1-.63-1.14H22v4h-8v-4h-2v4H4V8h18.78a7.5 7.5 0 0 1-.28-2H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V12.34a7.45 7.45 0 0 1-4 1.16M4 15h28v6.08h-3.08v-4.81H27v4.81h-8.08v-4.81H17v4.81H8.9v-4.81H7v4.81H4Zm19.8 13v-3.73h-1.6V28H14v-3.73h-1.6V28H4v-5h28v5Z"/>',

  solid:
    '<path d="M32 6H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2M14 28h-2v-4h2Zm10 0h-2v-4h2Zm8-6H4v-2h3v-4h2v4h8v-4h2v4h8v-4h2v4h3Zm0-8H4v-2h8V8h2v4h8V8h2v4h8Z"/>',

  solidAlerted:
    '<path d="M33.68 15.4H22.23a3.69 3.69 0 0 1-2.88-1.4H4v-2h8V8h2v4h4.57A3.67 3.67 0 0 1 19 9.89L21.29 6H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V15.38ZM14 28h-2v-4h2Zm10 0h-2v-4h2Zm8-6H4v-2h3v-4h2v4h8v-4h2v4h8v-4h2v4h3Z"/>',

  solidBadged:
    '<path d="M24 10.49V12h1.51A7.5 7.5 0 0 1 24 10.49"/><path d="M32 13.22V14H4v-2h8V8h2v4h8V8h.78a7.5 7.5 0 0 1-.28-2H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V12.34a7.5 7.5 0 0 1-2 .88M14 28h-2v-4h2Zm10 0h-2v-4h2Zm8-6H4v-2h3v-4h2v4h8v-4h2v4h8v-4h2v4h3Z"/>',
};

export const firewallIconName = 'firewall';
export const firewallIcon: IconShapeTuple = [firewallIconName, renderIcon(icon)];
