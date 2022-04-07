/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ReactiveController, ReactiveElement } from 'lit';

export type AriaSelected = ReactiveElement & { selected: boolean };

/**
 * Provides all nessesary aria-* attributes to create valid aria selection state.
 */
export function ariaSelected<T extends AriaSelected>(): ClassDecorator {
  return (target: any) => target.addInitializer((instance: T) => new AriaSelectedController(instance));
}

export class AriaSelectedController<T extends AriaSelected> implements ReactiveController {
  constructor(private host: T) {
    this.host.addController(this);
  }

  hostUpdated() {
    if (this.host.selected !== null && this.host.selected !== undefined) {
      this.host.ariaSelected = this.host.selected ? 'true' : 'false';
    }
  }
}
