/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, PropertyValues } from 'lit';
import { getElementUpdates, globalStyle } from '@cds/core/internal';
import { CdsControl } from '@cds/core/forms';
import globalStyles from './range.global.scss';
import styles from './range.element.scss';

/**
 * Range
 *
 * ```typescript
 * import '@cds/core/range/register.js';
 * ```
 *
 * ```html
 * <cds-range>
 *   <label>range</label>
 *   <input type="range" />
 *   <cds-control-message>message text</cds-control-message>
 * </cds-range>
 * ```
 *
 * @element cds-range
 * @slot - For projecting range input
 * @cssprop --background
 * @cssprop --border-radius
 * @cssprop --track-background
 * @cssprop --track-fill-background
 * @cssprop --track-height
 * @cssprop --thumb-background
 * @cssprop --thumb-width
 * @cssprop --thumb-height
 */
export class CdsRange extends CdsControl {
  static get styles() {
    return [...super.styles, styles];
  }

  @globalStyle() protected globalStyles = globalStyles;

  protected get inputTemplate() {
    return html`<div class="input-track"></div>`;
  }

  firstUpdated(props: PropertyValues<this>) {
    super.firstUpdated(props);
    this.setTrackWidth();
    this.inputControl.addEventListener('input', () => this.setTrackWidth());

    // `input` event doesnt fire when the value is changed programmatically
    // at this point, inputControl.valueAsNumber is still the old value
    // https://github.com/vmware-clarity/core/issues/157
    this.observers.push(
      getElementUpdates(this.inputControl, 'value', (value: number) => {
        this.setTrackWidth(value);
      })
    );
  }

  private setTrackWidth(val?: number) {
    const value = val ?? this.inputControl.valueAsNumber;
    const min = this.inputControl.min ? parseInt(this.inputControl.min) : 0;
    const max = this.inputControl.max ? parseInt(this.inputControl.max) : 100;
    this.style.setProperty('--track-width', `${Math.floor(((value - min) / (max - min)) * 100)}%`);
  }
}
