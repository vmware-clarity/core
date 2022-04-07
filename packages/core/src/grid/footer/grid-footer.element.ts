/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { LitElement, html } from 'lit';
import { baseStyles, i18n, I18nService } from '@cds/core/internal';
import styles from './grid-footer.element.scss';

/**
 * Grid Footer
 *
 * ```typescript
 * import '@cds/core/grid/register.js';
 * ```
 *
 * @beta
 * @element cds-grid-footer
 * @cssprop --min-height
 */
export class CdsGridFooter extends LitElement {
  @i18n() i18n = I18nService.keys.grid;

  static styles = [baseStyles, styles];

  render() {
    return html`
      <div class="private-host">
        <slot>
          <div cds-layout="display:screen-reader-only">${this.i18n.footerEnd}</div>
        </slot>
      </div>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.slot = 'footer';
  }
}
