/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M10 28H8v2h2zm16 0H12v2h14zm0-10H12v2h14zM10 8H8v2h2zm21-6H5c-.55 0-1 .45-1 1v30c0 .55.45 1 1 1h26c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1m-1 30H6v-8h24zm0-10H6v-8h24zm0-10H6V4h24zm-20 6H8v2h2zM26 8H12v2h14z"/>',

  outlineAlerted:
    '<path d="m26.904 1.646-5.682 9.47c-.27.382-.294.879-.063 1.284.23.406.677.652 1.156.637h11.373a1.28 1.28 0 0 0 1.156-.637c.23-.405.206-.902-.063-1.284l-5.682-9.47a1.28 1.28 0 0 0-1.098-.609c-.451 0-.87.232-1.097.61M8 28h2v2H8zm4 0h14v2H12z"/><path fill-rule="evenodd" d="M24.36 2H5c-.55 0-1 .45-1 1v30c0 .55.45 1 1 1h26c.55 0 1-.45 1-1V15.037h-2V22H6v-8h13.87a3.23 3.23 0 0 1-.863-2H6V4h17.16zM6 32h24v-8H6z" clip-rule="evenodd"/><path d="M20.76 8H12v2h7.56zM12 18h14v2H12zM8 8h2v2H8zm0 10h2v2H8z"/>',

  outlineBadged:
    '<path d="M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10M8 28h2v2H8zm4 0h14v2H12zm0-10h14v2H12zm-4 0h2v2H8z"/><path fill-rule="evenodd" d="M32 12.71a7 7 0 0 1-2 .29 6.97 6.97 0 0 1-3.608-1H6V4h17.29a7 7 0 0 1 .965-2H5c-.55 0-1 .45-1 1v30c0 .55.45 1 1 1h26c.55 0 1-.45 1-1zM6 32h24v-8H6zm0-10h24v-8H6z" clip-rule="evenodd"/><path d="M23.29 8H12v2h12.255a7 7 0 0 1-.965-2M8 8h2v2H8z"/>',

  solid:
    '<path d="M4 33c0 .55.45 1 1 1h26c.55 0 1-.45 1-1v-9H4zm7.9-5.1h14.2v2.2H11.9zm-4 0h2.2v2.2H7.9zM31 2H5c-.55 0-1 .45-1 1v9h28V3c0-.55-.45-1-1-1m-20.9 8.1H7.9V7.9h2.2zm16 0H11.9V7.9h14.2zM4 22h28v-8H4zm7.9-4.1h14.2v2.2H11.9zm-4 0h2.2v2.2H7.9z"/>',

  solidAlerted:
    '<path d="m26.904 1.646-5.682 9.47c-.27.382-.294.879-.063 1.284.23.406.677.652 1.156.637h11.373a1.28 1.28 0 0 0 1.156-.637c.23-.405.206-.902-.063-1.284l-5.682-9.47a1.28 1.28 0 0 0-1.098-.609c-.451 0-.87.232-1.097.61"/><path fill-rule="evenodd" d="M19.87 14a3.3 3.3 0 0 0 2.47 1.037H32V22H4v-8zm6.23 3.9H11.9v2.2h14.2zm-16 0H7.9v2.2h2.2zM24.36 2H5c-.55 0-1 .45-1 1v9h15.007a3.2 3.2 0 0 1 .49-1.9H11.9V7.9h8.92zM7.9 10.1h2.2V7.9H7.9zM5 34c-.55 0-1-.45-1-1v-9h28v9c0 .55-.45 1-1 1zm21.1-6.1H11.9v2.2h14.2zm-16 0H7.9v2.2h2.2z" clip-rule="evenodd"/>',

  solidBadged:
    '<path d="M30 11a5 5 0 1 0 0-10 5 5 0 0 0 0 10"/><path fill-rule="evenodd" d="M24.255 2H5c-.55 0-1 .45-1 1v9h22.392a7 7 0 0 1-2.066-1.9H11.9V7.9h11.36A7 7 0 0 1 23 6c0-1.487.464-2.866 1.255-4M7.9 10.1h2.2V7.9H7.9zM5 34c-.55 0-1-.45-1-1v-9h28v9c0 .55-.45 1-1 1zm21.1-6.1H11.9v2.2h14.2zm-16 0H7.9v2.2h2.2zM32 22H4v-8h28zm-5.9-4.1H11.9v2.2h14.2zm-16 0H7.9v2.2h2.2z" clip-rule="evenodd"/>',
};

export const rackServerIconName = 'rack-server';
export const rackServerIcon: IconShapeTuple = [rackServerIconName, renderIcon(icon)];
