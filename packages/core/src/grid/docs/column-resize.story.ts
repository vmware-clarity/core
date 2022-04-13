/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { DemoService } from '@cds/core/demo';
import '@cds/core/grid/register.js';

export function columnResize() {
  const grid = DemoService.data.grid;
  return html` <cds-grid aria-label="column resize datagrid demo" height="360">
    ${grid.columns.map(
      (column, i) => html`<cds-grid-column resizable .width=${i === 0 ? '200' : ''}>${column.label}</cds-grid-column>`
    )}
    ${grid.rows.map(
      row => html` <cds-grid-row>
        ${row.cells.map(cell => html`<cds-grid-cell>${cell.label}</cds-grid-cell>`)}
      </cds-grid-row>`
    )}
    <cds-grid-footer></cds-grid-footer>
  </cds-grid>`;
}

export function columnFlexWidth() {
  const grid = DemoService.data.grid;
  return html` <cds-grid aria-label="column flex width datagrid demo" column-layout="flex" height="360">
    ${grid.columns.map(column => html`<cds-grid-column resizable>${column.label}</cds-grid-column>`)}
    ${grid.rows.map(
      row => html` <cds-grid-row>
        ${row.cells.map(cell => html`<cds-grid-cell>${cell.label}</cds-grid-cell>`)}
      </cds-grid-row>`
    )}
    <cds-grid-footer></cds-grid-footer>
  </cds-grid>`;
}
