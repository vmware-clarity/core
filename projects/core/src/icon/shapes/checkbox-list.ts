/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M15.755 14.497h15.212c.55 0 1-.45 1-1s-.45-1-1-1H17.754zm15.232 5.997h-20.97v2h20.97c.55 0 1-.45 1-1s-.45-1-1-1M19.333 7.62c0-.3-.12-.59-.34-.8-.21-.21-.49-.33-.78-.33s-.57.12-.78.33l-8.115 8.147-3.409-3.679c-.42-.45-1.12-.47-1.57-.06a1.12 1.12 0 0 0-.06 1.57l4.979 5.347 9.745-9.726c.22-.21.34-.5.34-.8zm11.654 20.87h-20.97v2h20.97c.55 0 1-.45 1-1s-.45-1-1-1"/>',
};

export const checkboxListIconName = 'checkbox-list';
export const checkboxListIcon: IconShapeTuple = [checkboxListIconName, renderIcon(icon)];
