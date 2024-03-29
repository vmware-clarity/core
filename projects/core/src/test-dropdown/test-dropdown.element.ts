/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { baseStyles, I18nService, event, EventEmitter, property } from '@cds/core/internal';
import { html, LitElement } from 'lit';

import styles from './test-dropdown.element.scss';

/**
 * Dropdown, example test component. Do not use in production.
 *
 * ```typescript
 * import '@cds/core/test-dropdown';
 * ```
 *
 * ```html
 * <cds-test-dropdown label="click me!">
 *   Hello World
 * </cds-test-dropdown>
 * ```
 *
 * @slot - Content slot for dropdown content
 * @event {boolean} openChange - notify open state change of dropdown
 * @cssprop --border-color
 * @cssprop --background-color
 * @cssprop --text-color
 */
export class CdsTestDropdown extends LitElement {
  @event() private openChange: EventEmitter<boolean>;

  private _open = false;

  get open() {
    return this._open;
  }

  /** Set open to open or close the dropdown */
  @property({ type: Boolean })
  set open(value) {
    if (value !== this._open) {
      const old = this._open;
      this._open = value;
      this.requestUpdate('open', old);
      this.openChange.emit(this.open);
    }
  }

  /** Set the dropdown button text */
  @property({ type: String })
  label = 'dropdown';

  static get styles() {
    return [baseStyles, styles];
  }

  render() {
    return html`
      <div class="dropdown">
        <button @click="${() => this.toggle()}" class="btn">${this.label}</button>
        ${this.open
          ? html` <div>
              ${I18nService.keys.dropdown.open}
              <slot></slot>
            </div>`
          : ''}
      </div>
    `;
  }

  /** Toggle the current open state of the dropdown */
  toggle() {
    this.open = !this.open;
  }
}
