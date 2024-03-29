/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import '@cds/core/accordion/register.js';
import { CdsAccordionHeader } from '@cds/core/accordion';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test';

describe('accordion-header element', () => {
  let testElement: HTMLElement;
  let component: CdsAccordionHeader;
  const placeholderContent = 'Accordion Header Placeholder';

  beforeEach(async () => {
    testElement = await createTestElement(html`<cds-accordion-header>${placeholderContent}</cds-accordion-header>`);
    component = testElement.querySelector<CdsAccordionHeader>('cds-accordion-header');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should create the component', async () => {
    await componentIsStable(component);
    expect(component.innerText).toBe(placeholderContent);
  });

  it('should have a slot attribute of value `accordion-header`', async () => {
    await componentIsStable(component);
    expect(component.hasAttribute('slot')).toBe(true);
    expect(component.getAttribute('slot')).toEqual('accordion-header');
  });

  it('should set action expanded state when panel is expanded', async () => {
    await componentIsStable(component);
    expect(component.shadowRoot.querySelector('cds-button-expand').expanded).toBe(false);

    component.expanded = true;
    await componentIsStable(component);
    expect(component.shadowRoot.querySelector('cds-button-expand').expanded).toBe(true);
  });
});
