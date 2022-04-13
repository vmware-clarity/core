/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { LitElement, html } from 'lit';
import { baseStyles } from '@cds/core/internal';
import styles from './grid-cell.element.scss';

/**
 * Grid Cell
 *
 * ```typescript
 * import '@cds/core/grid/register.js';
 * ```
 *
 * @beta
 * @element cds-grid-cell
 * @cssprop --border-right
 * @cssprop --border-left
 * @cssprop --min-height
 * @cssprop --min-width
 * @cssprop --font-size
 * @cssprop --justify-content
 * @cssprop --padding-block
 * @cssprop --padding-inline-start
 * @cssprop --padding-inline-end
 * @cssprop --color
 */
export class CdsGridCell extends LitElement {
  static styles = [baseStyles, styles];

  render() {
    return html`
      <div class="private-host" focusable>
        <slot></slot>
      </div>
    `;
  }
}
