/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M17.67 31.13a3.17 3.17 0 0 0 3.18 2.86h.13c1.66 0 3.02-1.34 3.02-2.99v-9.006h7c.85 0 1.7-.38 2.28-1.02.53-.58.78-1.32.71-2.09l-.97-8.707c-.03-.3-.11-.58-.22-.85L30.44 3.81a3.01 3.01 0 0 0-2.76-1.819H16.67c-.65 0-1.28.21-1.8.6L12 4.74v2.248c.22 0 .43-.07.6-.2l3.47-2.599c.17-.13.38-.2.6-.2h11.01c.4 0 .76.24.92.61l2.36 5.518c.04.09.06.18.07.28l.96 8.688c.02.2-.05.38-.2.54-.2.22-.52.37-.81.37h-8c-.55 0-1 .45-1 1V31c0 .56-.45.99-1.02.99h-.13c-.61 0-1.14-.46-1.19-1.05-.74-7.768-6.87-11.636-7.13-11.796a1 1 0 0 0-.53-.15v2.229c1.4 1.06 5.14 4.399 5.67 9.907zM9 22.045c.55 0 1-.45 1-1V5.049c0-.55-.45-1-1-1H2v17.995zM4 6.049h4v13.995H4z"/>',
  solid:
    '<path d="M17.67 31.13a3.17 3.17 0 0 0 3.18 2.86h.13c1.66 0 3.02-1.34 3.02-2.99v-9.006h7c.85 0 1.7-.38 2.28-1.02.53-.58.78-1.32.71-2.09l-.97-8.707c-.03-.3-.11-.58-.22-.85L30.44 3.81a3.01 3.01 0 0 0-2.76-1.819H16.67c-.65 0-1.28.21-1.8.6L12 4.74v16.474c1.4 1.06 5.14 4.399 5.67 9.907zM9 22.045c.55 0 1-.45 1-1V5.049c0-.55-.45-1-1-1H2v17.995z"/>',
};

export const thumbsDownIconName = 'thumbs-down';
export const thumbsDownIcon: IconShapeTuple = [thumbsDownIconName, renderIcon(icon)];
