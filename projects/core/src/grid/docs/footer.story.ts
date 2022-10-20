/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, css, LitElement } from 'lit';
import { baseStyles, customElement, state } from '@cds/core/internal';
import { DemoService } from '@cds/core/demo';
import '@cds/core/grid/register.js';

export function footer() {
  const grid = DemoService.data.grid;
  return html` <cds-grid aria-label="footer datagrid demo" height="360">
    ${grid.columns.map(column => html`<cds-grid-column>${column.label}</cds-grid-column>`)}
    ${grid.rows.map(
      row => html` <cds-grid-row>
        ${row.cells.map(cell => html`<cds-grid-cell>${cell.label}</cds-grid-cell>`)}
      </cds-grid-row>`
    )}
    <cds-grid-footer>grid footer content</cds-grid-footer>
  </cds-grid>`;
}

export function footerOptional() {
  const grid = DemoService.data.grid;
  return html` <cds-grid aria-label="footer optional datagrid demo" height="360">
    ${grid.columns.map(column => html`<cds-grid-column>${column.label}</cds-grid-column>`)}
    ${grid.rows.map(
      row => html` <cds-grid-row>
        ${row.cells.map(cell => html`<cds-grid-cell>${cell.label}</cds-grid-cell>`)}
      </cds-grid-row>`
    )}
  </cds-grid>`;
}

export function footerActions() {
  @customElement('demo-grid-footer-actions')
  class DemoColumnFooterActions extends LitElement {
    @state() private grid = DemoService.data.grid;
    @state() private columnAnchor: HTMLElement;
    @state() private all = this.grid.columns.reduce((p, n) => n.id + p, 0);
    @state() private selectedColumns = this.all;
    @state() private showNotifications = false;

    get visibilityAnchor() {
      return this.shadowRoot.querySelector('[aria-controls="notifications"]');
    }

    static styles = [
      baseStyles,
      css`
        :host {
          contain: none;
        }
      `,
    ];

    render() {
      return html` <cds-grid aria-label="column actions datagrid demo" height="360">
          ${this.grid.columns.map((column, i) =>
            this.checked(this.grid.columns[i].id) ? html`<cds-grid-column>${column.label}</cds-grid-column>` : ''
          )}
          ${this.grid.rows.map(
            row => html` <cds-grid-row>
              ${row.cells.map(
                (cell, i) =>
                  html`${this.checked(this.grid.columns[i].id)
                    ? html`<cds-grid-cell>${cell.label}</cds-grid-cell>`
                    : ''}`
              )}
            </cds-grid-row>`
          )}
          <cds-grid-footer>
            <div cds-layout="horizontal gap:lg">
              <cds-button-action
                aria-controls="notifications"
                @click=${() => (this.showNotifications = true)}
                aria-label="notifications"
              >
                <cds-icon shape="cloud" badge="danger"></cds-icon>
              </cds-button-action>
              <cds-button-inline
                cds-layout="align:right"
                aria-controls="column-visbility"
                @click=${(e: any) => (this.columnAnchor = e.target)}
                aria-label="filter column"
                .expanded=${!this.checked(this.all)}
                >Additonal Options</cds-button-inline
              >
            </div>
          </cds-grid-footer>
        </cds-grid>
        <cds-dropdown
          closable
          orientation="top"
          id="notifications"
          ?hidden=${!this.showNotifications}
          @closeChange=${() => (this.showNotifications = false)}
          .anchor=${this.visibilityAnchor}
          position="top"
        >
          <p cds-text="body" cds-layout="p:md">Notifications...</p>
        </cds-dropdown>
        <cds-dropdown
          closable
          orientation="top"
          id="column-visbility"
          ?hidden=${!this.columnAnchor}
          @closeChange=${(): void => (this.columnAnchor = null)}
          .anchor=${this.columnAnchor}
          position="left"
        >
          <div cds-layout="p:sm" style="min-width: 150px">
            <cds-checkbox-group layout="vertical">
              <label>Columns Filter</label>
              ${this.grid.columns
                .filter((_c, i) => i !== 0)
                .map(
                  column => html` <cds-checkbox>
                    <label>${column.label}</label>
                    <input
                      type="checkbox"
                      value=${column.id}
                      @click=${this.selectColumns}
                      .checked=${this.checked(column.id)}
                    />
                  </cds-checkbox>`
                )}
              <cds-checkbox>
                <label>All Columns</label>
                <input
                  type="checkbox"
                  all-columns
                  value=${this.all}
                  @click=${this.toggleAll}
                  .checked=${this.checked(this.all)}
                  ?indeterminate=${this.indeterminate()}
                />
              </cds-checkbox>
            </cds-checkbox-group>
          </div>
        </cds-dropdown>`;
    }

    private selectColumns() {
      this.selectedColumns = Array.from(
        this.shadowRoot.querySelectorAll<HTMLInputElement>('input[type="checkbox"]:not([all-columns])')
      )
        .filter(c => c.checked)
        .map(c => parseInt(c.value))
        .reduce((p, n) => p + n, 1);
    }

    private toggleAll() {
      this.selectedColumns = this.selectedColumns === this.all ? 1 : this.all;
    }

    private checked(value: number) {
      return value === (this.selectedColumns & value);
    }

    private indeterminate() {
      return !this.checked(this.all) && this.selectedColumns !== 1;
    }
  }
  return html`<demo-grid-footer-actions></demo-grid-column-footer-actions>`;
}
