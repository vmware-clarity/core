/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { PropertyValues } from 'lit';
import {
  Animatable,
  AnimationStatus,
  PropertyDrivenAnimation,
  PRIVATE_ANIMATION_STATUS_ATTR_NAME,
} from '../motion/interfaces.js';
import { runPropertyAnimations } from '../motion/utils.js';

// https://www.typescriptlang.org/docs/handbook/decorators.html#class-decorators
export function animate(config: PropertyDrivenAnimation) {
  return function _DecoratorName<T extends { new (...args: any[]): any }>(constr: T) {
    const _constr = constr as any;
    return class extends _constr {
      _animations: any;

      updated(props: PropertyValues<any>) {
        super.updated(props);

        const self = this as unknown as Element & Animatable & { _animations: PropertyDrivenAnimation };
        self._animations = config || void 0;

        if (!self.hasAttribute(PRIVATE_ANIMATION_STATUS_ATTR_NAME)) {
          self.setAttribute(PRIVATE_ANIMATION_STATUS_ATTR_NAME, AnimationStatus.ready);
        } else if (!self.hasAttribute('_demo-mode')) {
          // ignore if element has the _demo-mode attribute set; _demo-mode is used for docs, static examples, and stories
          runPropertyAnimations(props, self);
        }
      }
    } as unknown as T;
  };
}
