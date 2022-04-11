/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { getElementLanguageDirection } from './utils.js';
import { createTestElement } from '@cds/core/test';

describe('getElementLanguageDirection', () => {
  it('should return the current element level language direction', async () => {
    const element = await createTestElement();
    expect(getElementLanguageDirection(element)).toBe('ltr');

    element.style.direction = 'rtl';
    expect(getElementLanguageDirection(element)).toBe('rtl');
  });
});
