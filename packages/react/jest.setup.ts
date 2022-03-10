import '@testing-library/jest-dom/extend-expect';

// jsdom doesn't implment IntersectionObserver
// https://github.com/jsdom/jsdom/issues/2032
if (typeof window !== 'undefined') {
  const mockObserverAPI = () =>
    jest.fn().mockReturnValue({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    });

  window.ResizeObserver = mockObserverAPI();
  window.IntersectionObserver = mockObserverAPI();

  // jest implements getBoundingClientRect, but not DOMRect
  if (!window.DOMRect) {
    const domRectMock = () =>
      jest.fn().mockReturnValue({
        fromRect: jest.fn(),
      });

    // @ts-ignore
    window.DOMRect = domRectMock();
  }
}
