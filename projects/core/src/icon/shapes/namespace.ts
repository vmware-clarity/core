/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M27 4.18a1 1 0 1 0-1 1.73l6 3.47v17.24l-6 3.47a1 1 0 0 0-.37 1.36 1 1 0 0 0 1.37.37l7-4.05V8.23ZM9.68 29.9 4 26.62V9.38L9.68 6.1a1 1 0 1 0-1-1.73L2 8.23v19.54l6.68 3.86a1 1 0 0 0 1.37-.37 1 1 0 0 0-.37-1.36"/><path d="M10 12v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2H12a2 2 0 0 0-2 2m7 0v5h-5v-5Zm-5 7h5v5h-5Zm7 5v-5h5v5Zm5-7h-5v-5h5Z"/>',

  outlineAlerted:
    '<path d="M9.68 29.9 4 26.62V9.38L9.68 6.1a1 1 0 1 0-.93-1.77h-.07L2 8.23v19.54l6.68 3.86a1 1 0 0 0 1.37-.36 1 1 0 0 0-.37-1.37"/><path d="M26 15.4h-2V17h-5v-3.54A3.69 3.69 0 0 1 19 10h-7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2ZM17 24h-5v-5h5Zm0-7h-5v-5h5Zm7 7h-5v-5h5Zm8-8.6v11.22l-6 3.47a1 1 0 1 0 1 1.73l7-4.05V15.38h-.32Z"/>',

  outlineBadged:
    '<path d="M9.68 29.9 4 26.62V9.38L9.68 6.1a1 1 0 1 0-.93-1.77h-.07L2 8.23v19.54l6.68 3.86a1 1 0 0 0 1.37-.36 1 1 0 0 0-.37-1.37"/><path d="M26 12.34A7.7 7.7 0 0 1 23.66 10H12a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2ZM17 24h-5v-5h5Zm0-7h-5v-5h5Zm7 7h-5v-5h5Zm0-7h-5v-5h5Zm8 9.62-6 3.47a1 1 0 1 0 1 1.73l7-4.05V12.34a7.7 7.7 0 0 1-2 .88Z"/>',
};

export const namespaceIconName = 'namespace';
export const namespaceIcon: IconShapeTuple = [namespaceIconName, renderIcon(icon)];
