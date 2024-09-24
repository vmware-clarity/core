/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path fill-rule="evenodd" d="M25.818 33.896q.457.102.926.104a4.34 4.34 0 0 0 3.121-1.307l3.612-3.656a1.92 1.92 0 0 0-.38-2.945l-6.992-4.622a1.49 1.49 0 0 0-1.723.113l-2.88 2.34a17.8 17.8 0 0 1-5.622-3.874 17.9 17.9 0 0 1-3.862-5.578l2.325-2.842a1.54 1.54 0 0 0 .102-1.8l-4.63-6.998a1.85 1.85 0 0 0-1.344-.824 1.83 1.83 0 0 0-1.426.511L3.34 6.164a4.4 4.4 0 0 0-1.25 4.054c1.266 5.846 4.161 11.192 8.335 15.39 4.266 4.19 9.601 7.063 15.393 8.288M4.618 7.528l3.705-3.646 4.501 6.753-2.5 3.059a.96.96 0 0 0-.223.9 18.5 18.5 0 0 0 4.51 6.819 18.5 18.5 0 0 0 6.817 4.499.91.91 0 0 0 .852-.161l3.093-2.52 6.752 4.461-3.612 3.656a2.51 2.51 0 0 1-2.315.7 29.34 29.34 0 0 1-14.485-7.794 29.27 29.27 0 0 1-7.79-14.453 2.44 2.44 0 0 1 .696-2.273" clip-rule="evenodd"/>',
  solid:
    '<path d="M15.302 20.687a19.1 19.1 0 0 0 6.953 4.596l3.542-2.879a.62.62 0 0 1 .715 0l6.577 4.328a1.945 1.945 0 0 1 .311 3.051l-3.083 3.109a3.7 3.7 0 0 1-3.41 1.027 32.75 32.75 0 0 1-16.116-8.636 32.64 32.64 0 0 1-8.71-16.149 3.68 3.68 0 0 1 1.033-3.406L6.31 2.58c.4-.42.967-.63 1.539-.571.571.06 1.084.383 1.393.878l4.379 6.63a.615.615 0 0 1 0 .72l-2.885 3.54a19 19 0 0 0 4.567 6.909"/>',
};

export const phoneHandsetIconName = 'phone-handset';
export const phoneHandsetIcon: IconShapeTuple = [phoneHandsetIconName, renderIcon(icon)];
