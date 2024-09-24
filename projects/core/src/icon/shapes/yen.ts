/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M29.818 4.563a.96.96 0 0 0 .074-1.006 1.05 1.05 0 0 0-.88-.556 1.06 1.06 0 0 0-.936.463L17.992 18.237 7.905 3.464a1.07 1.07 0 0 0-1.436-.272.975.975 0 0 0-.306 1.371l10.785 15.793v1.849h-5.216c-.46 0-.834.358-.834.8 0 .441.374.8.834.8h5.216v2.398h-5.216c-.46 0-.834.358-.834.8 0 .441.374.8.834.8h5.216V32c0 .552.466.999 1.043.999.576 0 1.043-.447 1.043-1v-4.198h5.215c.46 0 .834-.358.834-.8 0-.44-.373-.799-.834-.799h-5.215v-2.399h5.215c.46 0 .834-.358.834-.8 0-.441-.373-.799-.834-.799h-5.215v-1.85z"/>',
  solid:
    '<path fill-rule="evenodd" d="M2 18C2 9.163 9.163 2 18 2a16 16 0 0 1 16 16c0 8.837-7.163 16-16 16S2 26.837 2 18m17.74 2 6.33-10.09v.01a1.251 1.251 0 1 0-2.12-1.33L18 18.08l-5.95-9.5a1.251 1.251 0 0 0-2.12 1.33L16.26 20H14a1 1 0 1 0 0 2h2.75v2H14a1 1 0 1 0 0 2h2.75v2.75a1.25 1.25 0 1 0 2.5 0V26H22a1 1 0 1 0 0-2h-2.75v-2H22a1 1 0 1 0 0-2z" clip-rule="evenodd"/>',
};

export const yenIconName = 'yen';
export const yenIcon: IconShapeTuple = [yenIconName, renderIcon(icon)];
