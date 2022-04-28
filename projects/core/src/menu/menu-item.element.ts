/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, PropertyValueMap } from 'lit';
import {
  property,
  baseStyles,
  onAnyKey,
  stopEvent,
  AriaPopupTriggerController,
  CdsBaseButton,
} from '@cds/core/internal';
import { CdsDropdown } from '@cds/core/dropdown';
import styles from './menu-item.element.scss';

/**
 * Menu Item
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
 * @element cds-menu-item
 * @slot - content for text or anchors
 * @cssprop --background
 * @cssprop --color
 * @cssprop --cursor
 * @cssprop --outline-offset
 * @cssprop --border-left
 * @cssprop --padding
 * @cssprop --gap
 */
export class CdsMenuItem extends CdsBaseButton {
  @property({ type: Boolean }) disabled = false;

  @property({ type: Boolean }) selected = false;

  static get styles() {
    return [baseStyles, styles];
  }

  protected ariaPopupAnchorController = new AriaPopupTriggerController(this);

  private get isPopup() {
    return this.getAttribute('popup');
  }

  render() {
    return html`
      <div focusable class="private-host" cds-layout="horizontal gap:md">
        <slot></slot>
        ${this.popup
          ? html`<cds-icon shape="angle" direction="right" size="sm" cds-layout="align:right"></cds-icon>`
          : ''}
      </div>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('keyup', e => {
      onAnyKey(['enter', 'space'], e, () => {
        if (!this.disabled) {
          this.click();
          stopEvent(e);
        }
      });

      onAnyKey(['arrow-right'], e, () => {
        if (this.isPopup) {
          this.click();
        }
      });

      onAnyKey(['arrow-left'], e, () => {
        const isFirstItem = this.parentElement?.querySelector('cds-menu-item') === this;
        const dropdown = this.closest<CdsDropdown>('[anchor]');
        if (isFirstItem && dropdown) {
          dropdown.closeOverlay();
        }
      });
    });
  }

  protected firstUpdated(props: PropertyValueMap<this>) {
    super.firstUpdated(props);
    this.role = 'menuitem'; // firstUpdated to override default base button role
  }
}
