/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import '@cds/core/menu/register.js';
import { CdsMenu } from '@cds/core/menu';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test';

describe('menu element', () => {
  let testElement: HTMLElement;
  let component: CdsMenu;

  beforeEach(async () => {
    testElement = await createTestElement(html`<cds-menu></cds-menu>`);
    component = testElement.querySelector<CdsMenu>('cds-menu');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should have appropriate aria menu attributes', async () => {
    await componentIsStable(component);
    expect(component.role).toBe('menu');
    expect(component.ariaOrientation).toBe('vertical');
  });
});
