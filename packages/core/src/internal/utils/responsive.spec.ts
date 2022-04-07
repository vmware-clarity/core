/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { createTestElement, removeTestElement } from '@cds/core/test';
import { elementVisible } from './responsive.js';
import '@cds/core/forms/register.js';
import '@cds/core/button-action/register.js';

describe('visibility utilities', () => {
  let element: HTMLElement;
  let component: HTMLParagraphElement;

  beforeEach(async () => {
    element = await createTestElement(html` <p hidden>test</p> `);

    component = element.querySelector<HTMLParagraphElement>('p');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should determine when an element is visible', done => {
    elementVisible(component, () => {
      expect(component.hasAttribute('hidden')).toBe(false);
      done();
    });

    component.removeAttribute('hidden');
  });
});
