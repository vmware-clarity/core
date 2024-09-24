/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M27.029 13.2h3.159c.448 0 .812.358.812.8s-.364.8-.812.8h-3.596c-1.345 3.18-4.515 5.237-8.013 5.2H10.89v11c0 .552-.455 1-1.016 1s-1.016-.448-1.016-1V14.8H5.813A.806.806 0 0 1 5 14c0-.442.364-.8.813-.8h3.046v-2.4H5.813A.806.806 0 0 1 5 10c0-.442.364-.8.813-.8h3.046V5c0-.552.455-1 1.016-1h8.704c3.501-.037 6.673 2.025 8.013 5.21h3.423c.449 0 .812.358.812.8s-.363.8-.812.8h-2.976q.097.592.102 1.19a6.7 6.7 0 0 1-.112 1.2M18.579 6H10.89v3.2h13.457c-1.203-2.006-3.403-3.226-5.77-3.2m-7.688 4.8h14.086a5.5 5.5 0 0 1 0 2.4H10.891zm0 7.2h7.688a6.63 6.63 0 0 0 5.769-3.2H10.89z" clip-rule="evenodd"/>',
  solid:
    '<path fill-rule="evenodd" d="M2 18C2 9.163 9.163 2 18 2a16 16 0 0 1 16 16c0 8.837-7.163 16-16 16S2 26.837 2 18m26.48-.2h-2.45a6.87 6.87 0 0 1-6.33 4.4h-5.19v6.54a1.25 1.25 0 1 1-2.5 0V17.8H9.09a.9.9 0 1 1 0-1.8h2.92v-2.2H9.09a.9.9 0 1 1 0-1.8h2.92V9.26A1.25 1.25 0 0 1 13.26 8h6.44a6.84 6.84 0 0 1 6.15 4h2.65a.9.9 0 1 1 0 1.8h-2.08a6.9 6.9 0 0 1 .06 2.2h2a.9.9 0 1 1 0 1.8m-13.97 1.9h5.19a4.28 4.28 0 0 0 3.5-1.9h-8.69zm0-9.19h5.19A4.21 4.21 0 0 1 22.88 12h-8.37zm0 3.29V16h9.45a5 5 0 0 0 .08-.89 4.7 4.7 0 0 0-.2-1.31z" clip-rule="evenodd"/>',
};

export const pesoIconName = 'peso';
export const pesoIcon: IconShapeTuple = [pesoIconName, renderIcon(icon)];
