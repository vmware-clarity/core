/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@cds/core/card/register.js';
import { html } from 'lit';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test';
import { CdsCard } from '@cds/core/card';

describe('cds-card element: ', () => {
  let testElement: HTMLElement;
  let component: CdsCard;
  const placeholderText = 'Placeholder';

  beforeEach(async () => {
    testElement = await createTestElement(html`<cds-card>${placeholderText}</cds-card>`);
    component = testElement.querySelector<CdsCard>('cds-card');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should create the component', async () => {
    await componentIsStable(component);
    expect(component).toBeTruthy();
  });

  it('should project the content', async () => {
    await componentIsStable(component);
    expect(component.innerText).toBe(placeholderText);
  });
});
