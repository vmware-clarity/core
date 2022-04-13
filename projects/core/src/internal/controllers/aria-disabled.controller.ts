/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ReactiveController, ReactiveElement } from 'lit';

export type AriaDisabled = ReactiveElement & { disabled: boolean; readonly?: boolean };

/**
 * Provides all nessesary aria-* attributes to create valid disabled state for interactive components.
 */
export function ariaDisabled<T extends AriaDisabled>(): ClassDecorator {
  return (target: any) => target.addInitializer((instance: T) => new AriaDisabledController(instance));
}

export class AriaDisabledController<T extends AriaDisabled> implements ReactiveController {
  constructor(private host: T) {
    this.host.addController(this);
  }

  hostUpdated() {
    if (this.host.disabled !== null) {
      this.host.ariaDisabled = this.host.disabled;
    }

    if (this.host.readonly) {
      this.host.ariaDisabled = null;
    }
  }
}
