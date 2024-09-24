/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M32.65 10.352 25.63 3.33a1.002 1.002 0 0 0-1.413 1.414l7.019 7.021a1.002 1.002 0 1 0 1.414-1.414m-3.58 20.733H5.005V7.012h16.043V5.006H5.005A2.006 2.006 0 0 0 3 7.012v24.072c0 1.107.898 2.006 2.005 2.006H29.07a2.006 2.006 0 0 0 2.005-2.006V15.036H29.07z"/><path d="m21.85 12.719-.701-.502c-.953-.692-2.266-.33-3.34.412l5.535 5.536c.662-.963 1.174-2.337.412-3.34l-.492-.692 3.68-3.731 1.424 1.404-2.547 2.578c.872 2.016-.14 4.373-1.684 5.947l-.712.723-3.56-3.54-3.68 3.68-1.413-1.414 3.68-3.681-3.55-3.55.722-.713c1.574-1.544 3.93-2.557 5.936-1.685l2.496-2.578 1.464 1.445z"/>',
  solid:
    '<path d="m25.646 3.33 7.023 7.022h-.02a1.003 1.003 0 1 1-1.415 1.414l-1.384-1.384-4.014 4.012c.873 2.016-.14 4.363-1.685 5.937l-.713.723-3.531-3.55-3.683 3.68-1.414-1.414 3.682-3.681-3.552-3.55.722-.713c1.576-1.545 3.934-2.558 5.94-1.685l4.014-4.012-1.385-1.384a1.003 1.003 0 0 1 1.415-1.414"/><path d="M5.007 31.084h24.08V15.036h2.007v16.048a2.006 2.006 0 0 1-2.007 2.006H5.007A2.006 2.006 0 0 1 3 31.084V7.012c0-1.108.898-2.006 2.007-2.006H21.06v2.006H5.007z"/>',
};

export const pinboardIconName = 'pinboard';
export const pinboardIcon: IconShapeTuple = [pinboardIconName, renderIcon(icon)];
