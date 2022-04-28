import { CdsMenu as Menu, CdsMenuItem as MenuItem } from '@cds/core/menu';
import '@cds/core/menu/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils/index.js';

export const CdsMenu = createComponent(React, 'cds-menu', Menu, {}, 'CdsMenu');
export const CdsMenuItem = createComponent(React, 'cds-menu-item', MenuItem, {}, 'CdsMenuItem');

logReactVersion(React);
