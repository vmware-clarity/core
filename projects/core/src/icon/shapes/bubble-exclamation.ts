/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M2 16.452C2 8.482 9.191 2 18.025 2S34.05 8.483 34 16.452c-.03 3.616-1.475 7.067-4.006 9.57v6.947a1.04 1.04 0 0 1-.522.905.98.98 0 0 1-1.02-.038l-5.54-3.633c-1.59.464-3.234.7-4.887.702C9.19 30.905 2 24.422 2 16.452m17.027 3.231c0 .57-.449 1.033-1.002 1.033a1 1 0 0 1-.715-.31 1.05 1.05 0 0 1-.287-.743V8.173c0-.57.449-1.032 1.002-1.032s1.002.462 1.002 1.032zm9.304 5.142a1.04 1.04 0 0 0-.32.753v5.513l-4.387-2.88a.98.98 0 0 0-.832-.114 15.6 15.6 0 0 1-4.767.743c-7.732 0-14.022-5.554-14.022-12.388s6.29-12.387 14.022-12.387 14.022 5.553 14.022 12.387c-.046 3.204-1.394 6.241-3.716 8.372m-8.974-.589c0 .758-.596 1.373-1.332 1.373s-1.332-.615-1.332-1.373.596-1.373 1.332-1.373 1.332.615 1.332 1.373" clip-rule="evenodd"/>',
  solid:
    '<path fill-rule="evenodd" d="M18.025 2.5C9.19 2.5 2 8.983 2 16.952s7.191 14.453 16.025 14.453a17.5 17.5 0 0 0 4.888-.702l5.538 3.634c.308.203.7.218 1.02.037.322-.18.522-.527.523-.905v-6.947c2.531-2.503 3.976-5.954 4.006-9.57C34.05 8.982 26.859 2.5 18.025 2.5m-1.072 6.844a1.47 1.47 0 0 1 .667-1.362 1.38 1.38 0 0 1 1.48 0c.454.288.712.815.668 1.362V19.43a1.47 1.47 0 0 1-.667 1.362 1.38 1.38 0 0 1-1.48 0 1.47 1.47 0 0 1-.668-1.362zm-.46 15.98c0 1.067.838 1.93 1.872 1.93v-.01c1.03 0 1.868-.857 1.873-1.92 0-1.066-.838-1.93-1.873-1.93-1.034 0-1.872.864-1.872 1.93" clip-rule="evenodd"/>',
};

export const bubbleExclamationIconName = 'bubble-exclamation';
export const bubbleExclamationIcon: IconShapeTuple = [bubbleExclamationIconName, renderIcon(icon)];
