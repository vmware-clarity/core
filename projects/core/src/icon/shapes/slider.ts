/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M11.98 12.37a4 4 0 0 0-2.992-3.89V5a.999.999 0 1 0-1.995 0v3.48a4 4 0 0 0-3.061 3.89c0 1.85 1.266 3.46 3.06 3.89V31a.999.999 0 1 0 1.996 0V16.26c1.768-.458 3-2.06 2.992-3.89m16.959-.43a4 4 0 0 1 2.993 3.89 4 4 0 0 1-2.993 3.89V31a.999.999 0 1 1-1.995 0V19.72a4 4 0 0 1-3.061-3.89c0-1.85 1.266-3.46 3.06-3.89V5a.999.999 0 1 1 1.996 0zm-2.993 3.89c0 1.105.893 2 1.995 2v.04a2 2 0 0 0 1.995-2.04c0-1.104-.893-2-1.995-2a2 2 0 0 0-1.995 2M5.995 12.37c0 1.105.893 2 1.995 2v.03a1.997 1.997 0 0 0 1.995-2.03c0-1.104-.893-2-1.995-2a2 2 0 0 0-1.995 2M21.956 24.5a4 4 0 0 0-2.993-3.89V5a.999.999 0 1 0-1.995 0v15.61a4 4 0 0 0-3.06 3.89c0 1.85 1.265 3.46 3.06 3.89V31a.999.999 0 1 0 1.995 0v-2.61a4 4 0 0 0 2.993-3.89m-5.985 0c0 1.105.893 2 1.995 2v.03a1.995 1.995 0 0 0 1.995-2.03c0-1.105-.893-2-1.995-2a2 2 0 0 0-1.995 2" clip-rule="evenodd"/>',

  solid:
    '<path fill-rule="evenodd" d="M12.05 12.37c0-1.83-1.22-3.43-2.99-3.89V5c0-.55-.45-1-1-1s-1 .45-1 1v3.48C5.26 8.91 4 10.52 4 12.37s1.27 3.46 3.06 3.89V31c0 .55.45 1 1 1s1-.45 1-1V16.26c1.77-.46 3-2.06 2.99-3.89m16.96-.43c1.77.46 3 2.06 2.99 3.89 0 1.83-1.22 3.43-2.99 3.89V31c0 .55-.45 1-1 1s-1-.45-1-1V19.72a3.99 3.99 0 0 1-3.06-3.89c0-1.85 1.27-3.46 3.06-3.89V5c0-.55.45-1 1-1s1 .45 1 1zM22.03 24.5c0-1.83-1.22-3.43-2.99-3.89V5c0-.55-.45-1-1-1s-1 .45-1 1v15.61c-1.8.43-3.06 2.04-3.06 3.89s1.27 3.46 3.06 3.89V31c0 .55.45 1 1 1s1-.45 1-1v-2.61c1.77-.46 3-2.06 2.99-3.89" clip-rule="evenodd"/>',
};

export const sliderIconName = 'slider';
export const sliderIcon: IconShapeTuple = [sliderIconName, renderIcon(icon)];
