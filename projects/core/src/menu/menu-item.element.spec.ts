/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import '@cds/core/menu/register.js';
import { CdsMenuItem } from '@cds/core/menu';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test';

describe('menu element', () => {
  let testElement: HTMLElement;
  let component: CdsMenuItem;

  beforeEach(async () => {
    testElement = await createTestElement(html`<cds-menu><cds-menu-item>hello</cds-menu-item></cds-menu>`);
    component = testElement.querySelector<CdsMenuItem>('cds-menu-item');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should have appropriate aria menu attributes', async () => {
    await componentIsStable(component);
    expect(component.role).toBe('menuitem');
  });

  it('should show angle icon if an anchor to another menu', async () => {
    await componentIsStable(component);
    component.popup = 'anchor-el';
    await componentIsStable(component);
    expect(component.shadowRoot.querySelector('cds-icon').shape).toBe('angle');
  });
});
