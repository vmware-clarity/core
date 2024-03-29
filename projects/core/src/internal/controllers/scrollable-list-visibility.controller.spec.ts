/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, css, LitElement } from 'lit';
import { createTestElement, removeTestElement, componentIsStable } from '@cds/core/test';
import { customElement, scrollableVisibility } from '@cds/core/internal';

@scrollableVisibility<ScrollableListVisibilityTestElement>()
@customElement('scrollable-list-visibility-test-element')
class ScrollableListVisibilityTestElement extends LitElement {
  gridBody: HTMLElement;
  static styles = [
    css`
      :host {
        --row-content-visibility: auto;
      }
    `,
  ];
}

describe('scrollable-list-visibility.controller', () => {
  let component: ScrollableListVisibilityTestElement;
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createTestElement(
      html`<scrollable-list-visibility-test-element></scrollable-list-visibility-test-element>`
    );
    component = element.querySelector<ScrollableListVisibilityTestElement>('scrollable-list-visibility-test-element');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should set content visibility when scroll detected', async () => {
    await componentIsStable(component);
    expect(component.style.getPropertyValue('--row-content-visibility')).toBe('');

    component.shadowRoot.dispatchEvent(new Event('scroll', { bubbles: true }));
    await componentIsStable(component);
    expect(component.style.getPropertyValue('--row-content-visibility')).toBe('visibile');
  });
});
