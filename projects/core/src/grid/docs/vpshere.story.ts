/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, LitElement } from 'lit';
import { customElement, state } from '@cds/core/internal';
import { DemoGridRow, DemoService, insertBefore, paginate } from '@cds/core/demo';
import '@cds/core/grid/register.js';
import '@lit-labs/virtualizer';

const largeData: DemoGridRow[] = [];
const numberOfRows = 1000;
for (let i = 0; i < numberOfRows / 20; i++) {
  largeData.push(
    ...DemoService.data.grid.rows.map(e => {
      e.id = `${e.id}${i === 0 ? '' : `-${i}`}`;
      return e;
    })
  );
}

export function vsphere() {
  @customElement('demo-grid-vsphere')
  class DemoVsphereGrid extends LitElement {
    @state() private grid = DemoService.data.grid;
    @state() private rows = largeData;

    @state() private virtualScroll = false;

    /* drag and drop columns */
    @state() private ariaLiveMessage = '';

    /* detail row */
    @state() private selectedRow: DemoGridRow;
    @state() private anchor: HTMLElement;

    /** pagination */
    @state() private filteredList: DemoGridRow[] = [];
    @state() private page = 0;
    @state() private pageSize = 10;
    @state() private pageCount = 1;
    @state() private pageSizeOptions = [5, 10, 20, 50];

    get selectedCount() {
      return this.rows.filter(i => i.selected).length;
    }

    private rowRender(row: DemoGridRow, rowIndex: number) {
      return html`
        <cds-grid-row data-row-idx=${rowIndex} .position=${this.selectedRow?.id === row.id ? 'fixed' : ''}>
          <cds-grid-cell>
            <cds-button-expand
              popup="row-expand"
              aria-label="${row.id} details"
              .expanded=${this.selectedRow?.id === row.id}
              @click=${(e: any) => this.showDetail(e.target, row)}
            ></cds-button-expand>
          </cds-grid-cell>
          <cds-grid-cell>
            <cds-checkbox>
              <input
                type="checkbox"
                .checked=${row.selected as boolean}
                value=${row.id}
                @click=${(e: any) => this.select(row, e.target.checked)}
                aria-label="select ${row.id}"
              />
            </cds-checkbox>
          </cds-grid-cell>
          <cds-grid-cell> ${row.id} </cds-grid-cell>
          ${row.cells.map(
            cell =>
              html`<cds-grid-cell style="cursor:pointer" @click=${(e: any) => this.cellClickSelect(e, row, rowIndex)}
                >${cell.label}</cds-grid-cell
              >`
          )}
        </cds-grid-row>
      `;
    }

    render() {
      return html`<section cds-layout="vertical gap:sm">
        <p cds-text="secondary">Select one or more VMs in the grid below to manage.</p>
        <div cds-layout="horizontal gap:xs align:vertical-center">
          <p id="batch-action-demo-grid" cds-text="message">${this.grid.label} &nbsp;</p>
          <cds-divider orientation="vertical"></cds-divider>&nbsp;
          ${this.grid.rowActions.map(
            action =>
              html`<cds-button action="outline" size="sm" @click=${() => this.action(action.value)}
                >${action.label}</cds-button
              >`
          )}
          <cds-checkbox>
            <label>Virtual Scroll</label>
            <input
              type="checkbox"
              @change=${(e: any) => {
                this.virtualScroll = e.target.checked;
                this.updatePages();
              }}
            />
          </cds-checkbox>
        </div>

        <cds-grid
          aria-label="row expand datagrid demo"
          height="360"
          range-selection="false"
          @cdsDraggableChange=${this.sortColumns}
        >
          <cds-grid-column type="action"></cds-grid-column>
          <cds-grid-column type="action">
            <cds-checkbox>
              <input
                type="checkbox"
                .checked=${this.selectedCount === this.rows.length}
                .indeterminate=${this.selectedCount > 0 && this.selectedCount < this.rows.length}
                @change=${(e: any) => this.selectAll(e.target.checked)}
                aria-label="select all hosts"
              />
            </cds-checkbox>
          </cds-grid-column>
          <cds-grid-column>Index</cds-grid-column>
          ${this.grid.columns.map(
            column =>
              html`<cds-grid-column draggable="true" id=${column.id}>
                ${column.label}
                <cds-button-handle aria-label="sort ${column.label} column"></cds-button-handle>
              </cds-grid-column>`
          )}
          ${console.log(this.filteredList.length)}
          ${this.virtualScroll
            ? html`<cds-grid-virtual-scroll
                .items=${this.filteredList}
                .renderItem=${(data: DemoGridRow, rowIndex: number) => this.rowRender(data, rowIndex)}
              >
              </cds-grid-virtual-scroll>`
            : this.filteredList.map((row, rowIndex) => this.rowRender(row, rowIndex))}

          <cds-grid-detail
            position="bottom"
            aria-label="row details"
            id="row-expand"
            ?hidden=${!this.selectedRow}
            .anchor=${this.anchor}
            @closeChange=${() => (this.selectedRow = null) as any}
          >
            <div cds-layout="vertical gap:lg">
              <h2 cds-first-focus cds-text="section">${this.selectedRow?.id}</h2>
              <dl cds-list cds-layout="vertical gap:xs">
                ${this.selectedRow?.cells?.map(
                  (cell, i) =>
                    html`<dt>${this.grid.columns[i].label}</dt>
                      <dd>${cell.label}</dd>`
                )}
              </dl>
            </div>
          </cds-grid-detail>
          <cds-grid-footer>
            <p cds-text="body" cds-layout="p-y:sm">
              aria-live:
              <span aria-live="polite" aria-relevant="all" role="status">${this.ariaLiveMessage}</span>
            </p>
            ${this.virtualScroll
              ? html``
              : html` <cds-grid-pagination
                  .page=${this.page}
                  .pageSize=${this.pageSize}
                  .pageCount=${this.pageCount}
                  .pageSizeOptions=${this.pageSizeOptions}
                  @pageChange=${(e: any) => this.updatePage(e.detail)}
                  @pageSizeChange=${(e: any) => this.updatePageSize(e.detail)}
                >
                </cds-grid-pagination>`}
          </cds-grid-footer>
        </cds-grid>
        <aside>
          <p>
            Selected Rows:
            ${this.rows
              .filter(i => i.selected)
              .map(i => i.id)
              .join(', ')}
          </p>

          <h3>Notes</h3>
          <ul>
            <li>Item selecection is maintained across pages.</li>
            <li>
              Ways to select rows:
              <ul>
                <li>Click on the checkbox for that row</li>
                <li>
                  Shift+click a row to select a range of rows.
                  <em>Note:</em> You cannot put an onClick handler on a cell that has a clickable element (like a link)
                  in it. Click zones in click zones are not valid for accessibility
                </li>
              </ul>
            </li>
          </ul>
        </aside>
      </section>`;
    }

    connectedCallback() {
      super.connectedCallback();
      this.updatePages();
    }

    private showDetail(anchor: HTMLElement, row: DemoGridRow) {
      if (this.selectedRow?.id !== row.id) {
        this.selectedRow = row;
        this.anchor = anchor;
      } else {
        this.selectedRow = null;
      }
    }

    private sortColumns(e: any) {
      if (e.detail.type === 'reordered') {
        const fromIndex = this.grid.columns.findIndex(i => `${i.id}` === e.detail.from.id);
        const targetIndex = this.grid.columns.findIndex(i => `${i.id}` === e.detail.target.id);
        this.grid.columns = insertBefore(fromIndex, targetIndex, this.grid.columns);

        this.rows.forEach(row => (row.cells = insertBefore(fromIndex, targetIndex, row.cells)));
        this.ariaLiveMessage = `${e.detail.from.textContent} moved to column ${e.detail.target.ariaColIndex}`;
      } else {
        this.ariaLiveMessage = `${e.detail.from.textContent} column ${e.detail.type}`;
      }
    }

    private cellClickSelect(e: any, entry: any, rowIndex: number) {
      console.log({ e, rowIndex, entry });
      if (e.shiftKey && !entry.selected) {
        // shift click selects the clicked row to the closest selected row, unselecting everything else

        // we only need the first and last values, so this could be done better
        // but I'm lazy
        const selectedIndexes = this.rows
          .map((r, i) => [r.selected, i])
          .filter(r => r[0])
          .map(r => r[1]) as number[];

        const first = selectedIndexes[0];
        const last = selectedIndexes[selectedIndexes.length - 1];

        if (rowIndex < first) {
          this.rows.forEach(r => (r.selected = false));
          for (let i = rowIndex; i <= first; i++) {
            this.rows[i].selected = true;
          }
        } else if (last && rowIndex > last) {
          this.rows.forEach(r => (r.selected = false));
          for (let j = last; j <= rowIndex; j++) {
            this.rows[j].selected = true;
          }
        }
      } else {
        this.rows.forEach(r => (r.selected = false));
        entry.selected = true;
      }
      this.rows = [...this.rows];
    }

    /* selection */
    private select(entry: any, checked: boolean) {
      console.log({ entry, checked });
      this.rows.find(i => i.id === entry.id).selected = checked;
      this.rows = [...this.rows];
    }

    private selectAll(checked: boolean) {
      this.rows.forEach(i => (i.selected = checked));
      this.rows = [...this.rows];
    }

    private action(name: string) {
      alert(
        `${name}: ${this.rows
          .filter(i => i.selected)
          .map(i => i.id)
          .join(', ')}`
      );
      this.rows.forEach(i => (i.selected = false));
      this.rows = [...this.rows];
    }

    /* pagination */

    private updatePage(page: number) {
      this.page = page;
      this.ariaLiveMessage = `navigated to page ${this.page}, with page size ${this.pageSize}`;
      this.updatePages();
    }

    private updatePageSize(pageSize: number) {
      this.pageSize = pageSize;
      this.ariaLiveMessage = `navigated to page ${this.page}, with page size ${this.pageSize}`;
      this.updatePages();
    }

    private updatePages() {
      if (this.virtualScroll) {
        this.filteredList = [...this.rows];
      } else {
        const list = [...this.rows];

        this.pageCount = Math.ceil(list.length / this.pageSize);
        this.filteredList = paginate(list, this.pageSize)[this.page] ?? [];
      }
    }

    createRenderRoot() {
      return this;
    }
  }
  return html`<demo-grid-vsphere></demo-grid-vsphere>`;
}

export function virtualized() {
  const grid = DemoService.data.grid;
  return html`
    <h3>Using cds-grid-virtual-scroll (wraps lit-virtualizer)</h3>
    <cds-grid aria-label="basic datagrid demo" height="360">
      ${grid.columns.map(column => html`<cds-grid-column>${column.label}</cds-grid-column>`)}

      <cds-grid-virtual-scroll
        .items=${grid.rows}
        .renderItem=${(row: DemoGridRow) => html`
          <cds-grid-row> ${row.cells.map(cell => html`<cds-grid-cell>${cell.label}</cds-grid-cell>`)} </cds-grid-row>
        `}
      >
      </cds-grid-virtual-scroll>
      <cds-grid-footer></cds-grid-footer>
    </cds-grid>
    <h3>Using lit-virtualizer directly</h3>
    <cds-grid aria-label="basic datagrid demo" height="360">
      ${grid.columns.map(column => html`<cds-grid-column>${column.label}</cds-grid-column>`)}

      <lit-virtualizer
        .items=${grid.rows}
        .renderItem=${(row: DemoGridRow) => html`
          <cds-grid-row style="width: 100%">
            ${row.cells.map(cell => html`<cds-grid-cell>${cell.label}</cds-grid-cell>`)}
          </cds-grid-row>
        `}
      >
      </lit-virtualizer>
      <cds-grid-footer></cds-grid-footer>
    </cds-grid>
  `;
}

// export function virtualizedLit() {
//   const grid = DemoService.data.grid;
//   return html` <cds-grid aria-label="basic datagrid demo" height="360">
//     ${grid.columns.map(column => html`<cds-grid-column>${column.label}</cds-grid-column>`)}

//     <lit-virtualizer
//       .items=${grid.rows}
//       .renderItem=${(row: DemoGridRow) => html`
//         <cds-grid-row> ${row.cells.map(cell => html`<cds-grid-cell>${cell.label}</cds-grid-cell>`)} </cds-grid-row>
//       `}
//     >
//     </lit-virtualizer>
//     <cds-grid-footer></cds-grid-footer>
//   </cds-grid>`;
// }
