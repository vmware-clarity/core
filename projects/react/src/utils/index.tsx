/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import React from 'react';

export function logReactVersion(react: { version: string }) {
  if (window && (window as any).CDS && !(window as any).CDS._react.version) {
    (window as any).CDS._react.version = react.version;
  }
}

/**
 * Converts a false value for `hidden` to `undefined` so it doesn't get rendered in the DOM
 *
 * There is an open issue where lit/react passes the false value to the element in the dom
 *   this isn't valid per the spec for boolean attributes.
 *
 * We mostly work around it with CSS, but it's still causing some problems with the  modal overlay
 * REMOVE THIS WHEN THE FOLLOWING ISSUE IS RESOLVED (also remove all of the CSS fixes)
 *
 * https://github.com/lit/lit/issues/3053
 * @param Component
 * @returns Component
 */
export function removeFalseHiddenProp<P extends { hidden?: boolean }>(Component: React.ComponentType<P>) {
  return (props: P) => {
    const { hidden } = props;
    return <Component {...(props as P)} hidden={hidden ? true : undefined} />;
  };
}
