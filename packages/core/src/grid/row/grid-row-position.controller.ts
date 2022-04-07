/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ReactiveControllerHost } from 'lit';

export type GridRowPosition = ReactiveControllerHost &
  HTMLElement & {
    position: '' | 'fixed' | 'sticky';
  };

export class GridRowPositionController {
  constructor(private host: GridRowPosition) {
    this.host.addController(this);
  }

  hostUpdated() {
    if (this.host.position === 'fixed' || this.host.position === 'sticky') {
      this.host.parentElement?.style.setProperty('--scroll-padding-top', 'calc(var(--row-height) * 2)'); // todo: scroll padding top not working?
    }
  }
}
