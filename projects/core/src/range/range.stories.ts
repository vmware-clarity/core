/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@cds/core/range/register.js';
import { html } from 'lit';
import { getElementStorybookArgs, spreadProps } from '@cds/core/internal';

export default {
  title: 'Stories/Range',
  component: 'cds-range',
  parameters: {
    options: { showPanel: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/v2mkhzKQdhECXOx8BElgdA/Clarity-UI-Library---light-2.2.0?node-id=20%3A1',
    },
  },
};

export function API(args: any) {
  return html`
    <cds-range ...="${spreadProps(getElementStorybookArgs(args))}">
      <label>range</label>
      <input type="range" />
      <cds-control-message .status=${args.status}>message text</cds-control-message>
    </cds-range>
  `;
}

/** @website */
export function range() {
  return html`
    <cds-range>
      <label>range</label>
      <input type="range" />
      <cds-control-message>message text</cds-control-message>
    </cds-range>
  `;
}

/** @website */
export function vertical() {
  return html`
    <cds-form-group layout="vertical">
      <cds-range layout="vertical">
        <label>label</label>
        <input type="range" />
        <cds-control-message>message text</cds-control-message>
      </cds-range>

      <cds-range layout="vertical">
        <label>disabled</label>
        <input type="range" disabled />
        <cds-control-message>disabled message</cds-control-message>
      </cds-range>

      <cds-range layout="vertical" status="error">
        <label>error</label>
        <input type="range" />
        <cds-control-message status="error">error message</cds-control-message>
      </cds-range>

      <cds-range layout="vertical" status="success">
        <label>success</label>
        <input type="range" />
        <cds-control-message status="success">success message</cds-control-message>
      </cds-range>
    </cds-form-group>
  `;
}

/** @website */
export function horizontal() {
  return html`
    <cds-form-group layout="horizontal">
      <cds-range layout="horizontal">
        <label>label</label>
        <input type="range" />
        <cds-control-message>message text</cds-control-message>
      </cds-range>

      <cds-range layout="horizontal">
        <label>disabled</label>
        <input type="range" disabled />
        <cds-control-message>disabled message</cds-control-message>
      </cds-range>

      <cds-range layout="horizontal" status="error">
        <label>error</label>
        <input type="range" />
        <cds-control-message status="error">error message</cds-control-message>
      </cds-range>

      <cds-range layout="horizontal" status="success">
        <label>success</label>
        <input type="range" />
        <cds-control-message status="success">success message</cds-control-message>
      </cds-range>
    </cds-form-group>
  `;
}

/** @website */
export function compact() {
  return html`
    <cds-form-group layout="compact">
      <cds-range layout="compact">
        <label>label</label>
        <input type="range" />
        <cds-control-message>message text</cds-control-message>
      </cds-range>

      <cds-range layout="compact">
        <label>disabled</label>
        <input type="range" disabled />
        <cds-control-message>disabled message</cds-control-message>
      </cds-range>

      <cds-range layout="compact" status="error">
        <label>error</label>
        <input type="range" />
        <cds-control-message status="error">error message</cds-control-message>
      </cds-range>

      <cds-range layout="compact" status="success">
        <label>success</label>
        <input type="range" />
        <cds-control-message status="success">success message</cds-control-message>
      </cds-range>
    </cds-form-group>
  `;
}

/** @website */
export function minMax() {
  return html`
    <cds-range>
      <label>min/max/step</label>
      <input type="range" min="20" max="80" step="10" value="40" />
      <cds-control-message>message text</cds-control-message>
    </cds-range>
  `;
}

export function darkTheme() {
  return html`
    <cds-form-group layout="horizontal" cds-theme="dark">
      <cds-range layout="horizontal">
        <label>label</label>
        <input type="range" />
        <cds-control-message>message text</cds-control-message>
      </cds-range>

      <cds-range layout="horizontal">
        <label>disabled</label>
        <input type="range" disabled />
        <cds-control-message>disabled message</cds-control-message>
      </cds-range>

      <cds-range layout="horizontal" status="error">
        <label>error</label>
        <input type="range" />
        <cds-control-message status="error">error message</cds-control-message>
      </cds-range>

      <cds-range layout="horizontal" status="success">
        <label>success</label>
        <input type="range" />
        <cds-control-message status="success">success message</cds-control-message>
      </cds-range>
    </cds-form-group>
  `;
}
