import {
  CdsModal as Modal,
  CdsModalActions as ModalActions,
  CdsModalContent as ModalContent,
  CdsModalHeader as ModalHeader,
  CdsModalHeaderActions as ModalHeaderActions,
} from '@cds/core/modal';
import '@cds/core/modal/register';
import { createComponent } from '@lit-labs/react';
import * as React from 'react';
import { logReactVersion } from '../utils/index.js';

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
 * @param CdsButton
 * @returns CdsButton
 */
function removeFalseHiddenProp<P extends { hidden?: boolean }>(Component: React.ComponentType<P>) {
  return (props: P) => {
    const { hidden } = props;
    return <Component {...(props as P)} hidden={hidden ? true : undefined} />;
  };
}

export const CdsModal = removeFalseHiddenProp(
  createComponent(
    React,
    'cds-modal',
    Modal,
    {
      onCloseChange: 'closeChange',
      onCdsMotionChange: 'cdsMotionChange',
    },
    'CdsModal'
  )
);
export const CdsModalActions = createComponent(React, 'cds-modal-actions', ModalActions, {}, 'CdsModalActions');
export const CdsModalContent = createComponent(React, 'cds-modal-content', ModalContent, {}, 'CdsModalContent');
export const CdsModalHeader = createComponent(React, 'cds-modal-header', ModalHeader, {}, 'CdsModalHeader');
export const CdsModalHeaderActions = createComponent(
  React,
  'cds-modal-header-actions',
  ModalHeaderActions,
  {},
  'CdsModalHeaderActions'
);

logReactVersion(React);
