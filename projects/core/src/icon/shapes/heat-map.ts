/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M32 5H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M4 29V7h28v22Z"/><path d="M8 10h20v16H8Zm1.6 14h4.5v-5.2H9.6Zm4.5-12.4H9.6v5.6h4.5ZM26 24v-5.2h-4.1V24Zm0-12.4h-4.1v5.6H26Zm-10.3 0v5.6h4.6v-5.6Zm0 12.4h4.6v-5.2h-4.6Z"/>',

  outlineAlerted:
    '<path d="M34 29a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h17.958l-1.172 2H4v22h28V15.357h2Z"/><path d="M8 10h11.028l-.937 1.6H15.7v5.6h4.6v-1.843h1.6V17.2H26v-1.843h2V26H8Zm1.6 14h4.5v-5.2H9.6Zm4.5-12.4H9.6v5.6h4.5ZM26 24v-5.2h-4.1V24Zm-10.3 0h4.6v-5.2h-4.6Z"/>',

  outlineBadged:
    '<path d="M32 13.22V29H4V7h18.57a7.5 7.5 0 0 1-.07-1q.001-.503.07-1H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V12.34c-.62.39-1.294.686-2 .88"/><path d="M8 10h15.728a7.5 7.5 0 0 0 1.362 1.6H21.9v5.6H26v-4.913a7.4 7.4 0 0 0 2 .895V26H8Zm1.6 14h4.5v-5.2H9.6Zm4.5-12.4H9.6v5.6h4.5ZM26 24v-5.2h-4.1V24ZM15.7 11.6v5.6h4.6v-5.6Zm0 12.4h4.6v-5.2h-4.6Z"/>',

  solid:
    '<path d="M34 7v22a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2M8 26h20V10H8Zm2-7h4v5h-4Zm12 5v-5h4v5Zm-2-5v5h-4v-5Zm6-2h-4v-5h4Zm-6-5v5h-4v-5Zm-6 0v5h-4v-5Z"/>',

  solidAlerted:
    '<path d="M34 29a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h17.958l-2.93 5H8v16h20V15.357h6ZM10 19h4v5h-4Zm12 5v-5h4v5Zm-2-5v5h-4v-5Zm6-2h-4v-1.643h4Zm-6 0h-4v-5h1.856l-.231.395c-.83 1.206-.031 2.85 1.439 2.956q.104.009.206.006H20Zm-6-5v5h-4v-5Z"/>',

  solidBadged:
    '<path d="M34 12.34V29a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h18.57a7.4 7.4 0 0 0 1.063 5H8v16h20V13.232q.633.17 1.31.228l1.01.02A7.45 7.45 0 0 0 34 12.34M10 19h4v5h-4Zm12 5v-5h4v5Zm-2-5v5h-4v-5Zm6-2h-4v-5h3.584q.203.15.416.287Zm-6-5v5h-4v-5Zm-6 0v5h-4v-5Z"/>',
};

export const heatMapIconName = 'heat-map';
export const heatMapIcon: IconShapeTuple = [heatMapIconName, renderIcon(icon)];
