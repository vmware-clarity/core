/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { DemoService } from '@cds/core/demo';
import '@cds/core/grid/register.js';

export function columnFixedWidth() {
  const grid = DemoService.data.grid;
  return html` <cds-grid aria-label="column fixed width datagrid demo" height="360">
    ${grid.columns.map(
      (column, i) => html`<cds-grid-column .width=${i < 2 ? '150' : ''}>${column.label}</cds-grid-column>`
    )}
    ${grid.rows.map(
      row => html` <cds-grid-row>
        ${row.cells.map(cell => html`<cds-grid-cell>${cell.label}</cds-grid-cell>`)}
      </cds-grid-row>`
    )}
    <cds-grid-footer></cds-grid-footer>
  </cds-grid>`;
}

export function columnPercentageWidth() {
  const grid = DemoService.data.grid;
  return html` <cds-grid aria-label="column fixed width percentage datagrid demo" height="360">
    ${grid.columns.map(
      (column, i) => html`<cds-grid-column .width=${i < 2 ? '15%' : ''}>${column.label}</cds-grid-column>`
    )}
    ${grid.rows.map(
      row => html` <cds-grid-row>
        ${row.cells.map(cell => html`<cds-grid-cell>${cell.label}</cds-grid-cell>`)}
      </cds-grid-row>`
    )}
    <cds-grid-footer></cds-grid-footer>
  </cds-grid>`;
}

export function columnOverflow() {
  const grid = DemoService.data.grid;
  return html` <cds-grid aria-label="column overflow datagrid demo" height="360">
    ${grid.columns.map(
      (column, i) => html`<cds-grid-column .width=${i > 2 ? '100' : ''}>${column.label}</cds-grid-column>`
    )}
    ${grid.rows.map(
      row => html` <cds-grid-row>
        ${row.cells.map(
          (cell, i) => html` <cds-grid-cell>
            ${i > 2 ? html`<p cds-text="truncate">${cell.value}.000000%</p>` : cell.value}
          </cds-grid-cell>`
        )}
      </cds-grid-row>`
    )}
    <cds-grid-footer></cds-grid-footer>
  </cds-grid>`;
}
