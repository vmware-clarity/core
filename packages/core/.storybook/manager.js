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
      'internal-preview-grid',
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
