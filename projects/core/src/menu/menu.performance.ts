/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { testBundleSize, testRenderTime } from 'web-test-runner-performance/browser.js';
import '@cds/core/menu/register.js';

describe('cds-menu bundle performance', () => {
  it(`should bundle and treeshake component in under 22.5kb`, async () => {
    const result = await testBundleSize(`import '@cds/core/menu/register.js'`);
    expect(result.kb).toBeLessThan(22.5);
  });
});

describe('cds-menu render performance', () => {
  it('should render under 20ms', async () => {
    const result = await testRenderTime(html` <cds-menu>
      <cds-menu-item>item 1</cds-menu-item>
      <cds-menu-item>item 2</cds-menu-item>
      <cds-menu-item>item 3</cds-menu-item>
    </cds-menu>`);

    expect(result.duration).toBeLessThan(20);
  });
});
