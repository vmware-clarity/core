/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { DemoService } from '@cds/core/demo';
import '@cds/core/grid/register.js';

export function rowHeader() {
  const grid = DemoService.data.grid;
  return html` <cds-grid aria-label="row header datagrid demo" height="360">
    ${grid.columns.map(column => html`<cds-grid-column>${column.label}</cds-grid-column>`)}
    ${grid.rows.map(
      row => html` <cds-grid-row>
        ${row.cells.map(
          (cell, i) => html`<cds-grid-cell role=${i === 0 ? 'rowheader' : 'gridcell'}>${cell.label}</cds-grid-cell>`
        )}
      </cds-grid-row>`
    )}
    <cds-grid-footer></cds-grid-footer>
  </cds-grid>`;
}
