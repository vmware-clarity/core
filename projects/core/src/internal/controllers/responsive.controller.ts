/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ReactiveController, ReactiveElement } from 'lit';

interface ResponsiveConfig {
  skipFirst?: boolean;
  element?: HTMLElement;
}

/**
 * Provides a `cdsResizeChange` event when component dimensions are resized
 */
export function responsive<T extends ReactiveElement>(config: ResponsiveConfig = { skipFirst: false }): ClassDecorator {
  return (target: any) => target.addInitializer((instance: T) => new ResponsiveController(instance, config));
}

export class ResponsiveController<T extends ReactiveElement> implements ReactiveController {
  private observer: ResizeObserver;
  private resizeElement: HTMLElement;
  private skipFirst = false;

  constructor(private host: T, config: ResponsiveConfig = { skipFirst: false }) {
    this.host.addController(this);
    this.skipFirst = !!config.skipFirst;
    this.resizeElement = config.element ? config.element : this.host;
  }

  async hostConnected() {
    await this.host.updateComplete;
    this.observer = new ResizeObserver(entries => {
      window.requestAnimationFrame(() => {
        if (this.skipFirst) {
          this.skipFirst = false;
        } else {
          (this.host as unknown as HTMLElement).dispatchEvent(
            new CustomEvent('cdsResizeChange', { detail: entries[0].contentRect })
          );
          this.host.requestUpdate();
        }
      });
    });

    this.observer.observe(this.resizeElement);
  }

  hostDisconnected() {
    this.observer?.disconnect();
  }
}
