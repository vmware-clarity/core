/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import '@cds/core/internal-components/panel/register.js';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test';
import { CdsInternalPanel } from './panel.element';

describe('Panel element: ', () => {
  let testElement: HTMLElement;
  let component: CdsInternalPanel;
  const placeholderText = 'Placeholder';

  afterEach(() => {
    removeTestElement(testElement);
  });

  describe('create the panel component', () => {
    beforeEach(async () => {
      testElement = await createTestElement(html`<cds-internal-panel>${placeholderText}</cds-internal-panel>`);
      component = testElement.querySelector<CdsInternalPanel>('cds-internal-panel');
    });

    it('should create the component', async () => {
      await componentIsStable(component);
      expect(component.innerText).toBe(placeholderText);
    });
  });
});
