/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, LitElement } from 'lit';
import { baseStyles, property, assignSlotNames, state } from '@cds/core/internal';
import { ControlStatus } from '../utils/interfaces.js';
import styles from './control-message.element.scss';
import { ValidityStateKey } from '../utils/validate.js';

/**
 * Control Message
 *
 * ```typescript
 * import '@cds/core/forms/register.js';
 * ```
 *
 * ```html
 * <cds-control>
 *   <label>Test</label>
 *   <input type="text" />
 *   <cds-control-message>helper text</cds-control-message>
 * </cds-control>
 * ```
 *
 * @element cds-control-message
 * @slot - For projecting helper message text
 * @cssprop --color
 * @cssprop --font-size
 * @cssprop --font-weight
 * @cssprop --max-width
 * @cssprop --min-width
 */
export class CdsControlMessage extends LitElement {
  /**
   * Set the status of form control message validation
   * @type {neutral | error | success}
   */
  @property({ type: String }) status: ControlStatus = 'neutral';

  /**
   * Defines the HTML5 ValidityState message of given control
   * https://developer.mozilla.org/en-US/docs/Web/API/ValidityState
   */
  @property({ type: String }) error: ValidityStateKey;

  @state({ type: Boolean, reflect: true }) protected disabled = false;

  render() {
    return html`
      <div class="private-host">
        <slot></slot>
      </div>
    `;
  }

  static get styles() {
    return [baseStyles, styles];
  }

  connectedCallback() {
    super.connectedCallback();
    assignSlotNames([this, 'message']);
  }
}
