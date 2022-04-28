/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, LitElement } from 'lit';
import { baseStyles, KeyNavigationListController, querySlotAll } from '@cds/core/internal';
import { CdsDropdown } from '@cds/core/dropdown';
import styles from './menu.element.scss';

/**
 * Menu
 *
 * ```typescript
 * import '@cds/core/menu/register.js';
 * ```
 *
 * ```html
 * <cds-menu>
 *   <cds-menu-item>item 1</cds-menu-item>
 *   <cds-menu-item>item 2</cds-menu-item>
 *   <cds-menu-item>item 3</cds-menu-item>
 * </cds-menu>
 * ```
 *
 * @beta
 * @element cds-menu
 * @slot - content for menu items
 * @cssprop --background
 */
export class CdsMenu extends LitElement {
  /** @private */
  @querySlotAll('cds-menu-item[tabindex], cds-menu-item > a') keyListItems: NodeListOf<HTMLElement>;

  protected keyNavigationListController = new KeyNavigationListController(this, {
    layout: 'vertical',
    loop: true,
    manageTabindex: false,
  });

  static get styles() {
    return [baseStyles, styles];
  }

  private get hostDropdown() {
    return this.closest<CdsDropdown>('[anchor]');
  }

  render() {
    return html`<div class="private-host"><slot></slot></div>`;
  }

  connectedCallback() {
    super.connectedCallback();
    this.role = 'menu';
    this.ariaOrientation = 'vertical';

    const dropdown = this.hostDropdown;
    if (dropdown) {
      dropdown?.addEventListener('closeChange', (e: any) => this.recursiveClose(e));
      dropdown.style.setProperty('--padding', '0');
      dropdown.cdsMotion = 'off';
    }
  }

  private recursiveClose(closeEvent: any) {
    if (closeEvent.detail === 'backdrop-click' && this.hostDropdown?.anchorElement) {
      this.hostDropdown.anchorElement.closest<CdsDropdown>('[anchor]')?.closeOverlay('backdrop-click');
    }
  }
}
