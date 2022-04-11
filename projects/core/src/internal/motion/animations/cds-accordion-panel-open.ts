/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { TargetedAnimation } from '../interfaces.js';

export const AnimationAccordionPanelOpenName = 'cds-accordion-panel-open';
export const AnimationAccordionPanelOpenConfig: TargetedAnimation[] = [
  {
    target: '.accordion-content',
    animation: [
      { opacity: 0, height: '0' },
      { opacity: 1, height: 'from:cds-accordion-content' },
    ],
    options: {
      duration: '--animation-duration',
      easing: '--animation-easing',
      fill: 'forwards',
    },
  },
];
