/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import '@cds/core/accordion/register.js';
import { CdsAccordionContent } from '@cds/core/accordion';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test';

describe('accordion-content element', () => {
  let testElement: HTMLElement;
  let component: CdsAccordionContent;
  const placeholderContent = 'Accordion Content Placeholder';

  beforeEach(async () => {
    testElement = await createTestElement(html`<cds-accordion-content>${placeholderContent}</cds-accordion-content>`);
    component = testElement.querySelector<CdsAccordionContent>('cds-accordion-content');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should create the component', async () => {
    await componentIsStable(component);
    expect(component.innerText).toBe(placeholderContent);
    expect(component.getAttribute('role')).toBe('region');
  });

  it('should have a slot attribute of value `accordion-content`', async () => {
    await componentIsStable(component);
    expect(component.hasAttribute('slot')).toBe(true);
    expect(component.getAttribute('slot')).toEqual('accordion-content');
  });
});
