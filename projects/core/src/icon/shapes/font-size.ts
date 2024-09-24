/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M20.76 10.7h.06c.4.01.78-.18.989-.52.12-.18.17-.39.17-.59v-.02c0-.14-.04-.27-.1-.4-.02-.05-.03-.09-.06-.14-.21-.33-.58-.52-.98-.51H5.23c-.42-.05-.83.14-1.059.5-.23.36-.23.81 0 1.16.23.36.64.56 1.06.52h6.525v16.82c.05.56.54.99 1.11.99s1.059-.43 1.109-.99V10.7zm11.063 6.34c-.22-.34-.62-.53-1.04-.49l-.04-.04H21.21c-.42-.04-.82.15-1.039.49-.22.34-.22.77 0 1.11s.62.53 1.04.49h3.857v8.94c.05.54.52.95 1.09.95.569 0 1.029-.41 1.088-.95v-8.91h3.548c.42.04.82-.15 1.04-.49s.22-.77 0-1.11z"/>',
};

export const fontSizeIconName = 'font-size';
export const fontSizeIcon: IconShapeTuple = [fontSizeIconName, renderIcon(icon)];
