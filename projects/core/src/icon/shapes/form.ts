/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M21.022 12.058H7.006a1 1 0 0 1-.708-.294 1 1 0 0 1-.293-.712V7.03c0-.267.105-.523.293-.711a1 1 0 0 1 .708-.295h14.016a1.01 1.01 0 0 1 1.001 1.006v4.023a1 1 0 0 1-1.001 1.006M8.007 10.047h12.014V7.975H8.007zm13.015 4.103H7.006a1 1 0 0 0-.708.295 1 1 0 0 0-.293.711V19.1a1 1 0 0 0 1.001 1.006h11.373l3.645-3.722v-1.227c0-.267-.106-.523-.294-.711a1 1 0 0 0-.708-.295m-1 3.943H8.006v-2.012H20.02z"/><path d="M11.07 31.682v-.06l.321-1.399H4.002V4.012h20.024v10.31l2.002-1.902V3.006A1 1 0 0 0 25.027 2H3.001a1 1 0 0 0-.708.295 1 1 0 0 0-.293.71V31.17a1 1 0 0 0 1.001 1.006h8.01q.012-.249.06-.493M22.024 19.27l-.781.794a1 1 0 0 0 .78-.794"/><path d="M6.005 27.085a1 1 0 0 0 1.001 1.006h4.846l.3-1.308.13-.553v-.05H8.007v-2.052h6.348l2.002-2.012H7.006a1 1 0 0 0-.708.295 1 1 0 0 0-.293.711zm27.522-10.33-3.374-3.39a1.61 1.61 0 0 0-1.759-.351 1.6 1.6 0 0 0-.523.352l-13.727 13.87-1.131 4.838a1.63 1.63 0 0 0 .68 1.667c.176.12.374.202.582.244q.155.015.31 0 .185.03.37 0l4.856-1.076 13.716-13.81a1.61 1.61 0 0 0 0-2.283zM18.79 31.078l-3.664.815.89-3.651 10.293-10.45 2.823 2.836zm11.473-11.587-2.823-2.836 1.592-1.58 2.843 2.857z"/>',
};

export const formIconName = 'form';
export const formIcon: IconShapeTuple = [formIconName, renderIcon(icon)];
