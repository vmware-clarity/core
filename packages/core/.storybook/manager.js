/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { addons } from '@web/storybook-prebuilt/addons';
import { create } from '@web/storybook-prebuilt/theming';

addons.setConfig({
  enableShortcuts: false,
  sidebar: {
    showRoots: true,
    collapsedRoots: [
      'internal-stories',
      'internal-documentation',
      'internal-api',
      'internal-preview',
      'internal-controllers',
    ],
  },
  theme: create({
    base: 'light',
    brandTitle: 'Clarity Design',
    brandUrl: 'https://clarity.design',
    brandImage: 'https://clarity.design/images/clarity-logo.svg',
  }),
});
