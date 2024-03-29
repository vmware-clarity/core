/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@cds/core/password/register.js';
import { html } from 'lit';
import { getElementStorybookArgs, spreadProps } from '@cds/core/internal';

export default {
  title: 'Stories/Password',
  component: 'cds-password',
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
    <cds-password ...="${spreadProps(getElementStorybookArgs(args))}">
      <label>password</label>
      <input type="password" value="123456" />
      <cds-control-message .status=${args.status}>message text</cds-control-message>
    </cds-password>
  `;
}

/** @website */
export function password() {
  return html`
    <cds-password control-width="shrink">
      <label>password</label>
      <input type="password" value="123456" />
    </cds-password>
  `;
}

/** @website */
export function vertical() {
  return html`
    <cds-form-group layout="vertical">
      <cds-password layout="vertical">
        <label>label</label>
        <input type="password" value="123456" />
        <cds-control-message>message text</cds-control-message>
      </cds-password>

      <cds-password layout="vertical">
        <label>disabled</label>
        <input type="password" value="123456" disabled />
        <cds-control-message>disabled message</cds-control-message>
      </cds-password>

      <cds-password layout="vertical" status="error">
        <label>error</label>
        <input type="password" value="123456" />
        <cds-control-message status="error">error message</cds-control-message>
      </cds-password>

      <cds-password layout="vertical" status="success">
        <label>success</label>
        <input type="password" value="123456" />
        <cds-control-message status="success">success message</cds-control-message>
      </cds-password>
    </cds-form-group>
  `;
}

/** @website */
export function horizontal() {
  return html`
    <cds-form-group layout="horizontal">
      <cds-password layout="horizontal">
        <label>label</label>
        <input type="password" value="123456" />
        <cds-control-message>message text</cds-control-message>
      </cds-password>

      <cds-password layout="horizontal">
        <label>disabled</label>
        <input type="password" value="123456" disabled />
        <cds-control-message>disabled message</cds-control-message>
      </cds-password>

      <cds-password layout="horizontal" status="error">
        <label>error</label>
        <input type="password" value="123456" />
        <cds-control-message status="error">error message</cds-control-message>
      </cds-password>

      <cds-password layout="horizontal" status="success">
        <label>success</label>
        <input type="password" value="123456" />
        <cds-control-message status="success">success message</cds-control-message>
      </cds-password>
    </cds-form-group>
  `;
}

/** @website */
export function compact() {
  return html`
    <cds-form-group layout="compact">
      <cds-password layout="compact">
        <label>label</label>
        <input type="password" value="123456" />
        <cds-control-message>message text</cds-control-message>
      </cds-password>

      <cds-password layout="compact">
        <label>disabled</label>
        <input type="password" value="123456" disabled />
        <cds-control-message>disabled message</cds-control-message>
      </cds-password>

      <cds-password layout="compact" status="error">
        <label>error</label>
        <input type="password" value="123456" />
        <cds-control-message status="error">error message</cds-control-message>
      </cds-password>

      <cds-password layout="compact" status="success">
        <label>success</label>
        <input type="password" value="123456" />
        <cds-control-message status="success">success message</cds-control-message>
      </cds-password>
    </cds-form-group>
  `;
}

export function darkTheme() {
  return html`
    <cds-form-group layout="horizontal" cds-theme="dark">
      <cds-password layout="horizontal">
        <label>label</label>
        <input type="password" value="123456" />
        <cds-control-message>message text</cds-control-message>
      </cds-password>

      <cds-password layout="horizontal">
        <label>disabled</label>
        <input type="password" value="123456" disabled />
        <cds-control-message>disabled message</cds-control-message>
      </cds-password>

      <cds-password layout="horizontal" status="error">
        <label>error</label>
        <input type="password" value="123456" />
        <cds-control-message status="error">error message</cds-control-message>
      </cds-password>

      <cds-password layout="horizontal" status="success">
        <label>success</label>
        <input type="password" value="123456" />
        <cds-control-message status="success">success message</cds-control-message>
      </cds-password>
    </cds-form-group>
  `;
}
