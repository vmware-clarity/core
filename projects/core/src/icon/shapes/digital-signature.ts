/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M17 33.9c-3.9 0-7.9-1.5-10.5-4.5-.9.7-2 1.3-3.1 1.8-.5.2-1.1 0-1.3-.5s0-1.1.5-1.3q1.5-.6 2.7-1.5c-1.2-1.9-1.9-4.3-1.9-7.1 0-5.3 2.5-8.1 4.8-8.1 1.5 0 3.2 1.2 3.2 4.7 0 4.7-1.1 8.2-3.5 10.8 2.2 2.6 5.6 3.9 9 3.9.6 0 1 .4 1 1s-.3.8-.9.8M8.2 14.6c-1 0-2.8 1.8-2.8 6.1 0 2.2.5 4.1 1.4 5.6 1.8-2.1 2.7-5.1 2.7-9.1 0-1.5-.5-2.6-1.3-2.6m25.1-9.8c-.8-1.4-2.1-2.4-3.6-2.8-.5-.1-1.1.2-1.2.7l-.9 3.4L26 3.3c-.1-.2-.4-.4-.7-.5s-.6 0-.8.2c-1.1.8-1.8 1.9-2.2 3.2l-4.2 15.4c-.4 1.5-.2 3.2.6 4.6.6 1.1 1.6 1.9 2.7 2.5l-1.1 4c-.1.5.2 1.1.7 1.2h.3c.4 0 .8-.3 1-.7l1.1-3.9h.6c1 0 2-.3 3-.8 1.4-.8 2.4-2.1 2.8-3.6l1.6-5.8 1.6-5.8c.1-.4 0-.8-.4-1.1-.3-.2-.8-.3-1.1-.1l-4 2.3.6-2.1 5.7-3.2c.3-.2.5-.5.5-.8-.1-1.2-.4-2.4-1-3.5m-9.1 2c.1-.5.3-.9.6-1.3l1.9 3.4-1.4 5.1-2.1-3.7zm-3.8 18.4c-.5-.9-.7-2-.4-3l2.5-9.2 2.1 3.7-1.4 5.3-1.3 4.7q-.9-.45-1.5-1.5m7.3-.9c-.3 1-.9 1.9-1.9 2.4-.6.4-1.3.5-2 .5L25 23l3.7-2.1zm2.6-9.2-.8 3.1-3.7 2.1.8-3.1zm-1.7-5.5.1-.4c.1-.1.1-.3.1-.4L30 4.3c.6.3 1.1.9 1.5 1.5.3.6.5 1.2.5 1.8z"/>',
};

export const digitalSignatureIconName = 'digital-signature';
export const digitalSignatureIcon: IconShapeTuple = [digitalSignatureIconName, renderIcon(icon)];
