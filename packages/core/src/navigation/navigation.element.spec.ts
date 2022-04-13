/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { createTestElement, removeTestElement, componentIsStable } from '@cds/core/test';
import { CdsNavigation, CdsNavigationItem, CdsNavigationStart } from './index.js';
import '@cds/core/navigation/register.js';
import Spy = jasmine.Spy;

describe('cds-navigation', () => {
  let component: CdsNavigation;
  let element: HTMLElement;
  let click: MouseEvent;

  beforeEach(async () => {
    element = await createTestElement(html`
      <cds-navigation>
        <cds-navigation-start>Root start</cds-navigation-start>
        <cds-navigation-item>Root item</cds-navigation-item>
      </cds-navigation>
    `);
    component = element.querySelector<CdsNavigation>('cds-navigation');
    click = new MouseEvent('click');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should create a navigation component', async () => {
    await componentIsStable(component);
    expect(component).toBeTruthy();
  });

  it('emits the expandedChange event', async () => {
    await componentIsStable(component);
    let count = 0;
    const expandedSpy: Spy = jasmine.createSpy('expandedChange').and.callFake(() => {
      count++;
    });
    component.addEventListener('expandedChange', expandedSpy);
    const startEle = component.querySelector<CdsNavigationStart>('cds-navigation-start');
    startEle.dispatchEvent(click);
    await componentIsStable(component);
    expect(count).toBe(1);
  });

  describe('layouts', () => {
    let component: CdsNavigation;
    let element: HTMLElement;
    let rootStart: CdsNavigationStart;

    beforeEach(async () => {
      element = await createTestElement(html`
        <cds-navigation>
          <cds-navigation-item>Root item</cds-navigation-item>
          <cds-navigation-group>
            <cds-navigation-start>Group start</cds-navigation-start>
            <cds-navigation-item>Group item</cds-navigation-item>
          </cds-navigation-group>
          <cds-navigation-item slot="cds-navigation-end">
            <a href="#">
              <cds-icon shape="cog" size="sm"></cds-icon>
              nav end slot
            </a>
          </cds-navigation-item>
        </cds-navigation>
      `);
      component = element.querySelector<CdsNavigation>('cds-navigation');
      rootStart = component.querySelector<CdsNavigationStart>('cds-navigation > cds-navigation-start');
    });

    afterEach(() => {
      removeTestElement(element);
    });

    it('handles templates without rootNavigationStart elements', function () {
      expect(rootStart).toBeNull();
    });

    it('handles the footer template with navigation-end slot', async () => {
      const slottedContainer = component.shadowRoot.querySelector('.navigation-end');
      const slottedItem = slottedContainer.querySelector<CdsNavigationItem>(
        'cds-navigation-item[slot="cds-navigation-end"]'
      );
      expect(slottedContainer).toBeDefined();
      expect(slottedItem).toBeDefined();
    });
  });

  describe('syncs props', () => {
    let component: CdsNavigation;
    let element: HTMLElement;

    beforeEach(async () => {
      element = await createTestElement(html`
        <cds-navigation>
          <cds-navigation-start>Root start</cds-navigation-start>
          <cds-navigation-item>Root item</cds-navigation-item>
          <cds-navigation-group>
            <cds-navigation-start>Group start</cds-navigation-start>
            <cds-navigation-item>Group item</cds-navigation-item>
          </cds-navigation-group>
        </cds-navigation>
      `);
      component = element.querySelector<CdsNavigation>('cds-navigation');
    });

    afterEach(() => {
      removeTestElement(element);
    });

    it('to navigationGroupItems', async () => {
      await componentIsStable(component);
      const item = component.querySelector<CdsNavigationItem>(':scope > cds-navigation-group > cds-navigation-item');
      expect(item.groupItem).toBe(true);
    });

    it('to navigationItemRefs', async () => {
      await componentIsStable(component);
      const itemRefs = component.querySelectorAll<CdsNavigationItem>('cds-navigation-item');
      itemRefs.forEach(item => {
        expect(item.expanded).toBe(component.expanded);
      });
    });

    it('to navigationStartRefs', async () => {
      await componentIsStable(component);
      const startRefs = component.querySelectorAll<CdsNavigationStart>('cds-navigation-start');
      startRefs.forEach(start => {
        expect(start.expandedRoot).toBe(component.expandedRoot);
      });
    });

    it('to rootNavigationStart', async () => {
      await componentIsStable(component);
      const rootStart = component.querySelector<CdsNavigationStart>(':scope > cds-navigation-start');
      expect(rootStart.expanded).toBe(component.expanded);
    });

    it('to rootNavigationItems', async () => {
      await componentIsStable(component);
      const rootItems = component.querySelectorAll<CdsNavigationItem>(':scope > cds-navigation-item');
      rootItems.forEach(item => {
        expect(item.expanded).toBe(component.expanded);
      });
    });
  });
});
