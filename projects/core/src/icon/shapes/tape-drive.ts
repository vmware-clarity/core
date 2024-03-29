/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M32,6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V8A2,2,0,0,0,32,6ZM4,28V8H32V28Z"/><path d="M13.33,13.35a4.52,4.52,0,1,0,4.53,4.52A4.53,4.53,0,0,0,13.33,13.35Zm0,7.44a2.92,2.92,0,1,1,2.93-2.92A2.92,2.92,0,0,1,13.33,20.79Z"/><path d="M23.62,13.35a4.52,4.52,0,1,0,4.52,4.52A4.53,4.53,0,0,0,23.62,13.35Zm0,7.44a2.92,2.92,0,1,1,2.92-2.92A2.92,2.92,0,0,1,23.62,20.79Z"/><path d="M6,11V23.55H8V12H29.34V10H7A1,1,0,0,0,6,11Z"/>',

  outlineAlerted:
    '<path d="M8.81,17.87a4.53,4.53,0,1,0,4.52-4.52A4.53,4.53,0,0,0,8.81,17.87Zm7.45,0A2.93,2.93,0,1,1,13.33,15,2.93,2.93,0,0,1,16.26,17.87Z"/><path d="M7,10a1,1,0,0,0-1,1V23.55H8V12H18.57A3.7,3.7,0,0,1,19,10Z"/><path d="M33.68,15.4H32V28H4V8H20.14l1.15-2H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V15.38Z"/><path d="M22.09,15.39a3.65,3.65,0,0,1-1.8-.55,4.51,4.51,0,1,0,7.11.56H25.17a2.92,2.92,0,1,1-3.08,0Z"/>',

  outlineBadged:
    '<path d="M8.81,17.87a4.53,4.53,0,1,0,4.52-4.52A4.53,4.53,0,0,0,8.81,17.87Zm7.45,0A2.93,2.93,0,1,1,13.33,15,2.93,2.93,0,0,1,16.26,17.87Z"/><path d="M19.1,17.87a4.52,4.52,0,1,0,4.52-4.52A4.53,4.53,0,0,0,19.1,17.87Zm7.44,0A2.92,2.92,0,1,1,23.62,15,2.92,2.92,0,0,1,26.54,17.87Z"/><path d="M32,13.22V28H4V8H22.78a7.37,7.37,0,0,1-.28-2H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V12.34A7.65,7.65,0,0,1,32,13.22Z"/><path d="M6,11V23.55H8V12H25.51a7.66,7.66,0,0,1-1.85-2H7A1,1,0,0,0,6,11Z"/>',

  solid:
    '<path d="M32,6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V8A2,2,0,0,0,32,6ZM30,24H6V12H30Z"/><path d="M12.21,23a5,5,0,1,0-5-5A5,5,0,0,0,12.21,23Zm0-7a2,2,0,1,1-2,2A2,2,0,0,1,12.21,16Z"/><path d="M23.79,23a5,5,0,1,0-5-5A5,5,0,0,0,23.79,23Zm0-7a2,2,0,1,1-2,2A2,2,0,0,1,23.79,16Z"/>',

  solidAlerted:
    '<path d="M7.2,18a5,5,0,1,0,5-5A5,5,0,0,0,7.2,18Zm7,0a2,2,0,1,1-2-2A2,2,0,0,1,14.22,18Z"/><path d="M18.78,18a5,5,0,1,0,9.27-2.6H22.23a3.71,3.71,0,0,1-2.17-.71A5,5,0,0,0,18.78,18Zm5-2a2,2,0,1,1-2,2A2,2,0,0,1,23.79,16Z"/><path d="M33.68,15.4H30V24H6V12H18.57a3.65,3.65,0,0,1,.48-2.11L21.29,6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V15.38Z"/>',

  solidBadged:
    '<path d="M12.21,23a5,5,0,1,0-5-5A5,5,0,0,0,12.21,23Zm0-7a2,2,0,1,1-2,2A2,2,0,0,1,12.21,16Z"/><path d="M23.79,23a5,5,0,1,0-5-5A5,5,0,0,0,23.79,23Zm0-7a2,2,0,1,1-2,2A2,2,0,0,1,23.79,16Z"/><path d="M30,13.5V24H6V12H25.51a7.49,7.49,0,0,1-3-6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V12.34A7.49,7.49,0,0,1,30,13.5Z"/>',
};

export const tapeDriveIconName = 'tape-drive';
export const tapeDriveIcon: IconShapeTuple = [tapeDriveIconName, renderIcon(icon)];
