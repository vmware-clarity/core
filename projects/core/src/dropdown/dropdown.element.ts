/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CdsInternalPopup } from '@cds/core/internal-components/popup';

/**
 * Dropdowns are generic containers that are positioned on a page dynamically
 * based on how much space is available. Any content can be placed inside
 * a dropdown.
 *
 * ```typescript
 * import '@cds/core/dropdown/register.js';
 * ```
 *
 * ```html
 * <cds-dropdown>...</cds-dropdown>
 * ```
 * @beta
 * @element cds-dropdown
 * @slot - Content slot for the content inside the popup's panel
 * @event closeChange - Notify user when close event has occurred
 * @property anchor
 * @cssprop --active-corner-border-radius
 * @cssprop --background
 * @cssprop --backdrop-background
 * @cssprop --layered-backdrop-background
 * @cssprop --border-color
 * @cssprop --border-radius
 * @cssprop --border-width
 * @cssprop --box-shadow
 * @cssprop --close-button-offset
 * @cssprop --color
 * @cssprop --min-height
 * @cssprop --min-width
 * @cssprop --max-height
 * @cssprop --max-width
 * @cssprop --mobile-max-height
 * @cssprop --overflow - sets overflow x and y values respectively
 * @cssprop --height
 * @cssprop --width
 * @cssprop --animation-duration
 * @cssprop --animation-easing
 *
 */
export class CdsDropdown extends CdsInternalPopup {}
