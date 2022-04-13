/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import '@cds/core/internal-components/visual-checkbox/register.js';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test';
import { CdsInternalVisualCheckbox } from './visual-checkbox.element';

describe('Visual checkbox element: ', () => {
  let testElement: HTMLElement;
  let component: CdsInternalVisualCheckbox;

  afterEach(() => {
    removeTestElement(testElement);
  });

  describe('create the visual checkbox component', () => {
    beforeEach(async () => {
      testElement = await createTestElement(html`<cds-internal-visual-checkbox></cds-internal-visual-checkbox>`);
      component = testElement.querySelector<CdsInternalVisualCheckbox>('cds-internal-visual-checkbox');
    });

    it('should create the component', async () => {
      await componentIsStable(component);
      expect(component).toBeTruthy();
    });
  });
});
