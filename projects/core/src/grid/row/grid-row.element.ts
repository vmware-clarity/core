/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { LitElement, html } from 'lit';
import { baseStyles, property, querySlotAll } from '@cds/core/internal';
import { CdsGridCell } from '../cell/grid-cell.element.js';
import { GridRowPositionController } from './grid-row-position.controller.js';
import styles from './grid-row.element.scss';

/**
 * Grid Row
 *
 * ```typescript
 * import '@cds/core/grid/register.js';
 * ```
 *
 * @beta
 * @element cds-grid-row
 * @cssprop --border-top
 * @cssprop --border-bottom
 * @cssprop --background
 * @cssprop --min-height
 */
export class CdsGridRow extends LitElement {
  @property({ type: Boolean }) selected: boolean;

  @property({ type: String }) position: 'fixed' | 'sticky' | '';

  @querySlotAll('cds-grid-cell') cells: NodeListOf<CdsGridCell>;

  protected gridRowPositionController = new GridRowPositionController(this);

  static styles = [baseStyles, styles];

  render() {
    return html`
      <div class="private-host">
        <slot></slot>
      </div>
    `;
  }
}
