/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { DemoService } from '@cds/core/demo';
import '@cds/core/grid/register.js';

export function noScroll() {
  const grid = DemoService.data.grid;
  return html` <cds-grid aria-label="no scroll datagrid demo">
    ${grid.columns.map(column => html`<cds-grid-column>${column.label}</cds-grid-column>`)}
    ${grid.rows.map(
      row => html` <cds-grid-row>
        ${row.cells.map(cell => html`<cds-grid-cell>${cell.label}</cds-grid-cell>`)}
      </cds-grid-row>`
    )}
    <cds-grid-footer></cds-grid-footer>
  </cds-grid>`;
}

export function minHeight() {
  const grid = DemoService.data.grid;
  return html` <cds-grid aria-label="min height datagrid demo" style="--body-min-height: 400px">
    ${grid.columns.map(column => html`<cds-grid-column>${column.label}</cds-grid-column>`)}
    ${grid.rows.slice(0, 5).map(
      row => html` <cds-grid-row>
        ${row.cells.map(cell => html`<cds-grid-cell>${cell.label}</cds-grid-cell>`)}
      </cds-grid-row>`
    )}
    <cds-grid-footer></cds-grid-footer>
  </cds-grid>`;
}
