/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@cds/core/date/register.js';
import { html } from 'lit';
import { getElementStorybookArgs, spreadProps } from '@cds/core/internal';

export default {
  title: 'Stories/Date',
  component: 'cds-date',
  parameters: {
    options: { showPanel: true },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/v2mkhzKQdhECXOx8BElgdA/Clarity-UI-Library---light-2.2.0?node-id=51%3A672',
    },
  },
};

export function API(args: any) {
  return html`
    <cds-date ...="${spreadProps(getElementStorybookArgs(args))}">
      <label>date</label>
      <input type="date" value="2018-07-22" min="2018-01-01" max="2019-12-31" />
      <cds-control-message .status=${args.status}>message text</cds-control-message>
    </cds-date>
  `;
}

/** @website */
export function date() {
  return html`
    <cds-date control-width="shrink">
      <label>date</label>
      <input type="date" value="2018-07-22" min="2018-01-01" max="2019-12-31" />
      <cds-control-message>message text</cds-control-message>
    </cds-date>
  `;
}

/** @website */
export function vertical() {
  return html`
    <cds-form-group layout="vertical">
      <cds-date>
        <label>label</label>
        <input type="date" />
        <cds-control-message>message text</cds-control-message>
      </cds-date>

      <cds-date>
        <label>disabled</label>
        <input type="date" disabled />
        <cds-control-message>disabled message</cds-control-message>
      </cds-date>

      <cds-date status="error">
        <label>error status</label>
        <input type="date" />
        <cds-control-message status="error">error message</cds-control-message>
      </cds-date>

      <cds-date status="success">
        <label>success status</label>
        <input type="date" />
        <cds-control-message status="success">success message</cds-control-message>
      </cds-date>
    </cds-form-group>
  `;
}

/** @website */
export function horizontal() {
  return html`
    <cds-form-group layout="horizontal">
      <cds-date layout="horizontal">
        <label>label</label>
        <input type="date" />
        <cds-control-message>message text</cds-control-message>
      </cds-date>

      <cds-date layout="horizontal">
        <label>disabled</label>
        <input type="date" disabled />
        <cds-control-message>disabled message</cds-control-message>
      </cds-date>

      <cds-date layout="horizontal" status="error">
        <label>error status</label>
        <input type="date" />
        <cds-control-message status="error">error message</cds-control-message>
      </cds-date>

      <cds-date layout="horizontal" status="success">
        <label>success status</label>
        <input type="date" />
        <cds-control-message status="success">success message</cds-control-message>
      </cds-date>
    </cds-form-group>
  `;
}

/** @website */
export function compact() {
  return html`
    <cds-form-group layout="compact">
      <cds-date layout="compact">
        <label>label</label>
        <input type="date" />
        <cds-control-message>message text</cds-control-message>
      </cds-date>

      <cds-date layout="compact">
        <label>disabled</label>
        <input type="date" disabled />
        <cds-control-message>disabled message</cds-control-message>
      </cds-date>

      <cds-date layout="compact" status="error">
        <label>error status</label>
        <input type="date" />
        <cds-control-message status="error">error message</cds-control-message>
      </cds-date>

      <cds-date layout="compact" status="success">
        <label>success status</label>
        <input type="date" />
        <cds-control-message status="success">success message</cds-control-message>
      </cds-date>
    </cds-form-group>
  `;
}

export function datalist() {
  return html`
    <cds-date>
      <label>date</label>
      <input type="date" />
      <datalist>
        <option value="2018-01-19"></option>
        <option value="2019-06-22"></option>
        <option value="2020-09-27"></option>
      </datalist>
      <cds-control-message>message text</cds-control-message>
    </cds-date>
  `;
}

/** @website */
export function darkTheme() {
  return html`
    <cds-form-group layout="horizontal" cds-theme="dark">
      <cds-date layout="horizontal">
        <label>label</label>
        <input type="date" />
        <cds-control-message>message text</cds-control-message>
      </cds-date>

      <cds-date layout="horizontal">
        <label>disabled</label>
        <input type="date" disabled />
        <cds-control-message>disabled message</cds-control-message>
      </cds-date>

      <cds-date layout="horizontal" status="error">
        <label>error status</label>
        <input type="date" />
        <cds-control-message status="error">error message</cds-control-message>
      </cds-date>

      <cds-date layout="horizontal" status="success">
        <label>success status</label>
        <input type="date" />
        <cds-control-message status="success">success message</cds-control-message>
      </cds-date>
    </cds-form-group>
  `;
}
