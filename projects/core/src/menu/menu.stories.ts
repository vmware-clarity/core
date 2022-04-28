/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, LitElement } from 'lit';
import { registerElementSafely, state } from '@cds/core/internal';
import '@cds/core/dropdown/register.js';
import '@cds/core/menu/register.js';

export default {
  title: 'Stories/Menu',
  component: 'cds-menu',
};

export function basic() {
  return html` <div cds-layout="horizontal gap:xl p:lg align:center">
    <div cds-layout="vertical gap:md">
      <h3 cds-text="subsection">Default</h3>
      <cds-menu>
        <cds-menu-item><cds-icon shape="home" size="sm"></cds-icon> Item 1</cds-menu-item>
        <cds-menu-item><cds-icon shape="download" size="sm"></cds-icon> Item 2</cds-menu-item>
        <cds-menu-item><cds-icon shape="plus" size="sm"></cds-icon> <a href="#">Item 3</a></cds-menu-item>
      </cds-menu>
    </div>

    <div cds-layout="vertical gap:md">
      <h3 cds-text="subsection">Hover</h3>
      <cds-menu>
        <cds-menu-item><cds-icon shape="home" size="sm"></cds-icon> Item 1</cds-menu-item>
        <cds-menu-item _hover><cds-icon shape="download" size="sm"></cds-icon> Item 2</cds-menu-item>
        <cds-menu-item><cds-icon shape="plus" size="sm"></cds-icon> <a href="#">Item 3</a></cds-menu-item>
      </cds-menu>
    </div>

    <div cds-layout="vertical gap:md">
      <h3 cds-text="subsection">Active</h3>
      <cds-menu>
        <cds-menu-item><cds-icon shape="home" size="sm"></cds-icon> Item 1</cds-menu-item>
        <cds-menu-item _active><cds-icon shape="download" size="sm"></cds-icon> Item 2</cds-menu-item>
        <cds-menu-item><cds-icon shape="plus" size="sm"></cds-icon> <a href="#">Item 3</a></cds-menu-item>
      </cds-menu>
    </div>

    <div cds-layout="vertical gap:md">
      <h3 cds-text="subsection">Selected</h3>
      <cds-menu>
        <cds-menu-item><cds-icon shape="home" size="sm"></cds-icon> Item 1</cds-menu-item>
        <cds-menu-item selected><cds-icon shape="download" size="sm"></cds-icon> Item 2</cds-menu-item>
        <cds-menu-item><cds-icon shape="plus" size="sm"></cds-icon> <a href="#">Item 3</a></cds-menu-item>
      </cds-menu>
    </div>

    <div cds-layout="vertical gap:md">
      <h3 cds-text="subsection">Disabled</h3>
      <cds-menu>
        <cds-menu-item><cds-icon shape="home" size="sm"></cds-icon> Item 1</cds-menu-item>
        <cds-menu-item disabled><cds-icon shape="download" size="sm"></cds-icon> Item 2</cds-menu-item>
        <cds-menu-item><cds-icon shape="plus" size="sm"></cds-icon> Item 3</cds-menu-item>
      </cds-menu>
    </div>
  </div>`;
}

export function dropdownMenu() {
  class DemoMenu extends LitElement {
    @state() menu = false;
    @state() menuTwo = false;
    @state() menuThree = false;

    render() {
      return html` <div cds-layout="vertical">
        <cds-button popup="menu" id="menu-button" @click=${() => (this.menu = true)}>Menu</cds-button>
        <cds-dropdown anchor="menu-button" id="menu" ?hidden=${!this.menu} @closeChange=${() => (this.menu = false)}>
          <cds-menu>
            <cds-menu-item>Item 1</cds-menu-item>
            <cds-menu-item>Item 2</cds-menu-item>
            <cds-menu-item popup="menu-two" id="menu-two-button" @click=${() => (this.menuTwo = true)}
              >Menu 2</cds-menu-item
            >
          </cds-menu>
        </cds-dropdown>
        <cds-dropdown
          anchor="menu-two-button"
          id="menu-two"
          ?hidden=${!this.menuTwo}
          @closeChange=${() => (this.menuTwo = false)}
          orientation="right"
        >
          <cds-menu>
            <cds-menu-item>Item 1-1</cds-menu-item>
            <cds-menu-item>Item 1-2</cds-menu-item>
            <cds-menu-item popup="menu-three" id="menu-three-button" @click=${() => (this.menuThree = true)}
              >Menu 3</cds-menu-item
            >
          </cds-menu>
        </cds-dropdown>
        <cds-dropdown
          anchor="menu-three-button"
          id="menu-three"
          ?hidden=${!this.menuThree}
          @closeChange=${() => (this.menuThree = false)}
          orientation="right"
        >
          <cds-menu>
            <cds-menu-item>Item 2-1</cds-menu-item>
            <cds-menu-item>Item 2-2</cds-menu-item>
          </cds-menu>
        </cds-dropdown>
      </div>`;
    }

    protected createRenderRoot() {
      return this;
    }
  }

  registerElementSafely('demo-menu', DemoMenu);
  return html`<demo-menu></demo-menu>`;
}
