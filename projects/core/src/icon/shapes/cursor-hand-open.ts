/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M29.624 6.997h-.25c-.489 0-.958.11-1.377.3-.04-1.83-1.587-3.298-3.483-3.298a3.5 3.5 0 0 0-1.646.42C22.448 3.028 21.18 2 19.655 2h-.25a3.37 3.37 0 0 0-3.363 3.298 3.3 3.3 0 0 0-1.377-.3h-.25a3.38 3.38 0 0 0-3.372 3.378v9.054l-2.275-2.478a3.206 3.206 0 0 0-4.231-.81c-1.387.84-1.936 2.589-1.238 4.158l3.303 5.916c.26.99 1.856 6.626 5.838 9.584.17.13.38.2.599.2H26.57c.22 0 .439-.08.619-.21a15.02 15.02 0 0 0 5.807-11.902V10.385a3.38 3.38 0 0 0-3.373-3.378zM31 11.034v10.844c0 3.937-1.737 7.605-4.78 10.113H13.378c-3.493-2.808-4.85-8.324-4.86-8.384-.02-.09-.06-.18-.1-.26L5.087 17.4c-.25-.56-.04-1.229.489-1.549.538-.33 1.227-.19 1.666.38l4.061 4.437c.18.19.44.32.729.32.549 0 .998-.45.998-1V8.377c0-.76.618-1.38 1.377-1.38h.25c.758 0 1.376.62 1.376 1.38v7.615h1.996V5.378c0-.76.619-1.38 1.377-1.38h.25c.758 0 1.377.62 1.377 1.38V15.99h1.995V7.377c0-.76.67-1.38 1.497-1.38.829 0 1.497.62 1.497 1.38v8.614h1.996v-5.616c0-.76.619-1.38 1.377-1.38h.25c.758 0 1.377.62 1.377 1.38v.66z"/>',
};

export const cursorHandOpenIconName = 'cursor-hand-open';
export const cursorHandOpenIcon: IconShapeTuple = [cursorHandOpenIconName, renderIcon(icon)];
