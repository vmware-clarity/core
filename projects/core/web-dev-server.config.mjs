/**
 * Base Web Dev Server
 *
 * All dev hosting env in Core uses @web/dev-server including Storybook, Sandbox and Tests
 */

import { importMapsPlugin } from '@web/dev-server-import-maps';
import { hmrPlugin, presets } from '@open-wc/dev-server-hmr';
// import { fromRollup } from '@web/dev-server-rollup';
// import alias from '@rollup/plugin-alias';

/** Use Hot Module replacement by adding --hmr to the start command */
const hmr = process.argv.includes('--hmr');

// const rollupAlias = fromRollup(alias);

export default /** @type {import('@web/dev-server').DevServerConfig} */ ({
  open: './',
  watch: !hmr,
  nodeResolve: {
    exportConditions: ['development'],
  },
  plugins: [
    // rollupAlias({
    //   entries: [
    //     { find: '@cds/core/tokens/tokens.json', replacement: `${process.cwd()}/dist/lib/tokens/tokens.json` },
    //     { find: /^@cds\/core\/([^.]+)$/, replacement: `${process.cwd()}/dist/lib/$1/index.js` },
    //     { find: /^@cds\/core\/(.+)\.js$/, replacement: `${process.cwd()}/dist/lib/$1.js` },
    //     { find: /^@cds\/core\/(.+)\.css$/, replacement: `${process.cwd()}/dist/lib/$1.css` },
    //   ],
    // }),
    importMapsPlugin({
      inject: {
        importMap: {
          imports: {
            'lit/': '/node_modules/lit/',
            lit: '/node_modules/lit/index.js',
            'ramda/': '/node_modules/ramda/',
            ramda: '/node_modules/ramda/es/index.js',
            'tslib/': '/node_modules/tslib/',
            tslib: '/node_modules/tslib/tslib.es6.js',
            '@cds/core/': '/dist/lib/',
            '@cds/core': '/dist/lib/index.js',
            '@cds/core/polyfills': '/dist/lib/polyfills/index.js',
            '@cds/core/accordion': '/dist/lib/accordion/index.js',
            '@cds/core/alert': '/dist/lib/alert/index.js',
            '@cds/core/badge': '/dist/lib/badge/index.js',
            '@cds/core/breadcrumb': '/dist/lib/breadcrumb/index.js',
            '@cds/core/button': '/dist/lib/button/index.js',
            '@cds/core/card': '/dist/lib/card/index.js',
            '@cds/core/checkbox': '/dist/lib/checkbox/index.js',
            '@cds/core/datalist/index.js': '/dist/lib/datalist/index.js',
            '@cds/core/date': '/dist/lib/date/index.js',
            '@cds/core/divider': '/dist/lib/divider/index.js',
            '@cds/core/dropdown': '/dist/lib/dropdown/index.js',
            '@cds/core/file': '/dist/lib/file/index.js',
            '@cds/core/forms': '/dist/lib/forms/index.js',
            '@cds/core/icon': '/dist/lib/icon/index.js',
            '@cds/core/input': '/dist/lib/input/index.js',
            '@cds/core/internal': '/dist/lib/internal/index.js',
            '@cds/core/internal-components/close-button': '/dist/lib/internal-components/close-button/index.js',
            '@cds/core/internal-components/overlay': '/dist/lib/internal-components/overlay/index.js',
            '@cds/core/internal-components/panel': '/dist/lib/internal-components/panel/index.js',
            '@cds/core/internal-components/visual-checkbox': '/dist/lib/internal-components/visual-checkbox/index.js',
            '@cds/core/internal-components/popup': '/dist/lib/internal-components/popup/index.js',
            '@cds/core/modal': '/dist/lib/modal/index.js',
            '@cds/core/navigation': '/dist/lib/navigation/index.js',
            '@cds/core/pagination': '/dist/lib/pagination/index.js',
            '@cds/core/progress-circle': '/dist/lib/progress-circle/index.js',
            '@cds/core/radio': '/dist/lib/radio/index.js',
            '@cds/core/range': '/dist/lib/range/index.js',
            '@cds/core/search': '/dist/lib/search/index.js',
            '@cds/core/select': '/dist/lib/select/index.js',
            '@cds/core/selection-panels/checkbox': '/dist/lib/selection-panels/checkbox/index.js',
            '@cds/core/selection-panels/radio': '/dist/lib/selection-panels/index.js',
            '@cds/core/tag': '/dist/lib/tag/index.js',
            '@cds/core/test': '/dist/lib/test/index.js',
            '@cds/core/test-dropdown': '/dist/lib/test-dropdown/index.js',
            '@cds/core/textarea': '/dist/lib/textarea/index.js',
            '@cds/core/time': '/dist/lib/time/index.js',
            '@cds/core/tree-view': '/dist/lib/tree-view/index.js',
            '@cds/core/toggle': '/dist/lib/toggle/index.js',
          },
        },
      },
    }),
    /** Use Hot Module Replacement by uncommenting. Requires @open-wc/dev-server-hmr plugin */
    hmr &&
      hmrPlugin({
        include: ['./dist/lib/**/*'],
        exclude: ['**/*/node_modules/**/*', '**/*.json'],
        presets: [presets.lit],
      }),
  ],
});
