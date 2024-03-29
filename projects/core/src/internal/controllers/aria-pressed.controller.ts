/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ReactiveController, ReactiveElement } from 'lit';

export type AriaPressed = ReactiveElement & { pressed: boolean; readonly?: boolean };

/**
 * Provides all nessesary aria-* attributes to create valid pressed button states
 * https://sarahmhigley.com/writing/playing-with-state/
 */
export function ariaPressed<T extends AriaPressed>(): ClassDecorator {
  return (target: any) => target.addInitializer((instance: T) => new AriaPressedController(instance));
}

export class AriaPressedController<T extends AriaPressed> implements ReactiveController {
  constructor(private host: T) {
    this.host.addController(this);
  }

  hostUpdated() {
    if (this.host.pressed !== null && this.host.pressed !== undefined) {
      this.host.ariaPressed = this.host.pressed ? 'true' : 'false';
    }

    if (this.host.readonly) {
      this.host.ariaPressed = null;
    }
  }
}
