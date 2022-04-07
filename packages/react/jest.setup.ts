/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@testing-library/jest-dom/extend-expect';

if (typeof window !== 'undefined') {
  // jsdom doesn't implment IntersectionObserver
  // https://github.com/jsdom/jsdom/issues/2032
  const mockObserverAPI = () =>
    jest.fn().mockReturnValue({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    });

  window.ResizeObserver = mockObserverAPI();
  window.IntersectionObserver = mockObserverAPI();

  // jsdom implements getBoundingClientRect, but not DOMRect
  if (!window.DOMRect) {
    const domRectMock = () => jest.fn().mockReturnValue({});
    window.DOMRect = domRectMock() as unknown as typeof window.DOMRect;
  }
}
