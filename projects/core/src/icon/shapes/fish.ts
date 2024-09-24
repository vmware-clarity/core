/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M10.866 19.006c.854 0 1.546-.676 1.546-1.509s-.692-1.51-1.546-1.51-1.547.677-1.547 1.51.693 1.509 1.547 1.509"/><path d="M33.536 9.237a1.05 1.05 0 0 0-1.031 0c-3.475 2.012-6.093 5.845-7.114 7.495L24.64 18l-1.031 1.63c-1.815 2.505-5.258 6.398-9.062 6.398-4.794 0-9.02-6.187-10.144-7.988 1.124-1.8 5.34-7.988 10.144-7.988 3.65 0 6.98 3.602 8.845 6.107l.289-.483s.371-.513.959-1.258C22.443 11.603 18.794 8 14.484 8c-6.793 0-12.03 9.125-12.247 9.517L2 18l.278.483C2.495 18.875 7.732 28 14.525 28c5.217 0 9.506-5.372 11.34-8.048-.04.06 1.176-1.952 1.176-1.952l.072-.11a18 18 0 0 1 1.938-2.767 20.7 20.7 0 0 1 2.948-3.018v11.81a21.3 21.3 0 0 1-3.721-4.024l-.165.262-1.031 1.6a19.1 19.1 0 0 0 5.371 4.98c.156.09.334.138.515.14.18-.004.357-.049.516-.13.157-.09.288-.217.378-.37a1 1 0 0 0 .137-.506V10.113a1 1 0 0 0-.114-.497 1 1 0 0 0-.35-.379"/>',
};

export const fishIconName = 'fish';
export const fishIcon: IconShapeTuple = [fishIconName, renderIcon(icon)];
