/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { DemoService } from '@cds/core/demo';
import '@cds/core/grid/register.js';

export function responsive() {
  const grid = DemoService.data.grid;
  return html` <cds-grid aria-label="responsive datagrid demo" height="480" style="width: 320px">
    ${grid.columns.map(
      (column, i) => html` <cds-grid-column width=${i === 0 ? '120' : '200'} position=${i === 0 ? 'fixed' : ''}
        >${column.label}</cds-grid-column
      >`
    )}
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
