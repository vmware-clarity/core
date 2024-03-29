/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { LitElement, html } from 'lit';
import { baseStyles, EventEmitter, i18n, I18nService, property, event } from '@cds/core/internal';
import styles from './grid-pagination.element.scss';

/**
 * Grid Pagination
 *
 * ```typescript
 * import '@cds/core/grid/register.js';
 * ```
 *
 * ```html
 * <cds-grid-pagination></cds-grid-pagination>
 * ```
 *
 * @internal
 * @element cds-grid-pagination
 * @event pageChange
 * @event pageSizeChange
 */
export class CdsGridPagination extends LitElement {
  @i18n() i18n = I18nService.keys.grid;

  @property({ type: Number }) page = 0;

  @property({ type: Number }) pageSize = 10;

  @property({ type: Number }) pageCount = 1;

  @property({ type: Array }) pageSizeOptions = [10, 20, 50, 100];

  @event() pageChange: EventEmitter<number>;

  @event() pageSizeChange: EventEmitter<number>;

  static styles = [baseStyles, styles];

  render() {
    return html`
      <cds-pagination .ariaLabel=${this.i18n.pagination.label}>
        <cds-select control-width="shrink">
          <select
            .value=${this.pageSize.toString()}
            .ariaLabel=${this.i18n.pagination.pageSize}
            @input=${(e: any) => this.pageSizeChange.emit(parseInt(e.target.value))}
          >
            ${this.pageSizeOptions.map(i => html`<option value=${i} ?selected=${i === this.pageSize}>${i}</option>`)}
          </select>
        </cds-select>
        <cds-pagination-button
          .ariaLabel=${this.i18n.pagination.firstPage}
          .disabled=${this.page === 0}
          action="first"
          @click=${this.firstPage}
        ></cds-pagination-button>
        <cds-pagination-button
          .ariaLabel=${this.i18n.pagination.previousPage}
          .disabled=${this.page === 0}
          action="prev"
          @click=${this.prevPage}
        ></cds-pagination-button>
        <cds-input cds-pagination-number>
          <input
            type="number"
            .ariaLabel=${`${this.i18n.pagination.page} ${this.page} of ${this.pageCount}`}
            @input=${this.setPage}
            .valueAsNumber=${this.page + 1}
            min="1"
            max=${this.pageCount}
          />
          <cds-control-message><span aria-hidden="true">/ ${this.pageCount}</span></cds-control-message>
        </cds-input>
        <cds-pagination-button
          .ariaLabel=${this.i18n.pagination.nextPage}
          ?disabled=${this.page === this.pageCount - 1}
          action="next"
          @click=${this.nextPage}
        ></cds-pagination-button>
        <cds-pagination-button
          .ariaLabel=${this.i18n.pagination.lastPage}
          ?disabled=${this.page === this.pageCount - 1}
          action="last"
          @click=${this.lastPage}
        ></cds-pagination-button>
      </cds-pagination>
    `;
  }

  private setPage(event: any) {
    this.pageChange.emit((event.target as HTMLInputElement).valueAsNumber - 1);
  }

  private nextPage() {
    this.pageChange.emit(this.page + 1);
  }

  private prevPage() {
    this.pageChange.emit(this.page - 1);
  }

  private firstPage() {
    this.pageChange.emit(0);
  }

  private lastPage() {
    this.pageChange.emit(this.pageCount - 1);
  }
}
