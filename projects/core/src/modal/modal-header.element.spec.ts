/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import '@cds/core/modal/register.js';
import { CdsModalHeader } from '@cds/core/modal';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test';

describe('modal-header element', () => {
  let testElement: HTMLElement;
  let component: CdsModalHeader;
  const placeholderContent = 'Modal Placeholder';

  beforeEach(async () => {
    testElement = await createTestElement(html`<cds-modal-header>${placeholderContent}</cds-modal-header>`);
    component = testElement.querySelector<CdsModalHeader>('cds-modal-header');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should create the component', async () => {
    await componentIsStable(component);
    expect(component.innerText).toBe(placeholderContent);
  });

  it('should have a slot attribute of value `modal-header`', async () => {
    await componentIsStable(component);
    expect(component.hasAttribute('slot')).toBe(true);
    expect(component.getAttribute('slot')).toEqual('modal-header');
  });
});
