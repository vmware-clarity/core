/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable @typescript-eslint/no-var-requires */

const { delimiter } = require('./common');

const components = [
  'accordion',
  'alert',
  'badge',
  'breadcrumb',
  'button',
  'card',
  'checkbox',
  'combobox',
  'datagrid',
  'datalist',
  'date-picker',
  'dropdown',
  'form-group',
  'form',
  'grid',
  'header',
  'i18n',
  'icon',
  'input',
  'label',
  'list',
  'login',
  'modal',
  'navigation',
  'pagination',
  'panel',
  'password',
  'progress-bar',
  'radio',
  'range',
  'select',
  'sidenav',
  'signpost',
  'spinner',
  'stack-view',
  'stepper',
  'table',
  'tabs',
  'textarea',
  'timeline',
  'toggle',
  'tooltip',
  'tree-view',
  'vertical-nav',
  'wizard',
];

module.exports = {
  components,
  getScopes: () => {
    return components.map(c => `angular${delimiter}${c}`).concat(['angular']);
  },
};
