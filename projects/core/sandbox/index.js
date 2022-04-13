/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@cds/core/alert/register.js';
import '@cds/core/button/register.js';

document
  .querySelector('cds-button')
  .addEventListener('click', () => document.querySelector('cds-alert-group').removeAttribute('hidden'));
document
  .querySelector('cds-alert-group cds-alert')
  .addEventListener('closeChange', () => document.querySelector('cds-alert-group').setAttribute('hidden', ''));
