/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { globalStyle, property } from '@cds/core/internal';
import { LitElement, html, TemplateResult, css } from 'lit';
import { queryAll } from 'lit/decorators/query-all.js';
import '@lit-labs/virtualizer';

import { CdsGridRow } from './row/grid-row.element';

type RenderItemFunction = <T>(item: T, index: number) => TemplateResult;

/**
 * Grid Placeholder
 *
 * ```typescript
 * import '@cds/core/grid/register.js';
 * ```
 *
 * @internal
 * @element cds-grid-virtual-scroll
 */
export class CdsGridVirtualScroll extends LitElement {
  @globalStyle() protected globalStyles = css`
    .virtual-scroll cds-grid-row {
      width: 100%;
    }
  `;

  @property({ type: Array, attribute: false }) items: unknown[] = [];

  @property({ type: Function, attribute: false }) renderItem: RenderItemFunction;

  @queryAll('cds-grid-row') rows: NodeListOf<CdsGridRow>;

  render() {
    return html`<div class="virtual-scroll">
      <lit-virtualizer .items=${this.items} .renderItem=${this.renderItem}></lit-virtualizer>
    </div>`;
  }

  // by rendering in the light dom, the grid controllers can access it
  protected createRenderRoot() {
    return this;
  }
}
