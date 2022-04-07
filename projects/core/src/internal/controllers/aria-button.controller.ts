/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ReactiveController, ReactiveElement } from 'lit';

export interface AriaButton extends ReactiveElement {
  readonly: boolean;
  disabled: boolean;
}

/**
 * Provides nessesary attributes for indicating a non-button element as an accessible button type.
 */
export function ariaButton<T extends AriaButton>(): ClassDecorator {
  return (target: any) => target.addInitializer((instance: T) => new AriaButtonController(instance));
}

export class AriaButtonController<T extends AriaButton> implements ReactiveController {
  constructor(private host: T) {
    this.host.addController(this);
  }

  hostConnected() {
    this.host.tabIndex = 0; // initialize immediately so element can be focused synchronously
  }

  hostUpdated() {
    this.host.role = this.host.readonly ? null : 'button';
    this.host.tabIndex = !this.host.disabled ? 0 : -1;

    if (this.host.readonly) {
      this.host.removeAttribute('tabindex');
    }
  }
}
