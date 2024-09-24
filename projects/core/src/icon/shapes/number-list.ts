/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M6.203 16.206a.71.71 0 0 1 .563.195.78.78 0 0 1 .257.551c0 .388-.207.756-.86 1.297l-1.975 1.604v1.02h4.09V19.74H5.966l.988-.786c.988-.715 1.265-1.297 1.265-2.043a1.9 1.9 0 0 0-.613-1.338 1.78 1.78 0 0 0-1.363-.46c-.84 0-1.62.41-2.115 1.104l.751.745c.307-.45.79-.725 1.324-.756m.978 10.03c.573-.154.988-.685.988-1.298 0-.888-.77-1.542-1.976-1.542-.81-.01-1.58.368-2.074 1.021l.681.736a1.74 1.74 0 0 1 1.285-.654c.533 0 .909.266.909.674s-.356.634-.988.634h-.573v1.02h.632c.731 0 1.057.215 1.057.644s-.346.695-.988.695a1.93 1.93 0 0 1-1.442-.664L4 28.298c.553.634 1.354.98 2.183.95 1.275 0 2.105-.704 2.105-1.675 0-.664-.474-1.236-1.107-1.338M6.095 8.638v4.238H7.27V7.25h-.938l-1.63 1.134.464.857zM31.98 9.844c0-.562-.444-1.021-.988-1.021H10.264v2.042h20.728c.544 0 .988-.46.988-1.021m-.968 7.149H10.284v2.042h20.728c.543 0 .988-.46.988-1.02 0-.562-.445-1.022-.988-1.022m0 8.17H10.284v2.043h20.728c.543 0 .988-.46.988-1.022 0-.561-.445-1.02-.988-1.02"/>',
};

export const numberListIconName = 'number-list';
export const numberListIcon: IconShapeTuple = [numberListIconName, renderIcon(icon)];
