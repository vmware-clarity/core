/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ReactiveController, ReactiveElement } from 'lit';

export type AriaExpanded = ReactiveElement & { expanded: boolean; readonly?: boolean };

/**
 * Provides all nessesary aria-* attributes to create valid expanded button state
 */
export function ariaExpanded<T extends AriaExpanded>(): ClassDecorator {
  return (target: any) => target.addInitializer((instance: T) => new AriaExpandedController(instance));
}

export class AriaExpandedController<T extends AriaExpanded> implements ReactiveController {
  constructor(private host: T) {
    this.host.addController(this);
  }

  hostUpdated() {
    if (this.host.expanded !== null && this.host.expanded !== undefined) {
      this.host.ariaExpanded = this.host.expanded ? 'true' : 'false';
    }

    if (this.host.readonly) {
      this.host.ariaExpanded = null;
    }
  }
}
