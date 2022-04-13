/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import '@cds/core/button/register.js';
import '@cds/core/icon/register.js';
import { CdsIconButton } from '@cds/core/button';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test';

describe('Icon button element – ', () => {
  let testElement: HTMLElement;
  let component: CdsIconButton;

  beforeEach(async () => {
    testElement = await createTestElement(html`
      <form>
        <cds-icon-button><cds-icon></cds-icon></cds-icon-button>
      </form>
    `);

    component = testElement.querySelector<CdsIconButton>('cds-icon-button');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should create the component', async () => {
    await componentIsStable(component);
    expect(component.querySelector('cds-icon')).not.toBe(null);
  });

  describe('Button Behaviors: ', () => {
    it('should have a role of type button', async () => {
      await componentIsStable(component);
      expect(component.getAttribute('role')).toBe('button');
    });
  });
});
