/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import rule from './index';
import { getHtmlRuleTester, getInvalidTestFactory, getTsRuleTester } from '../../test-helper.spec';

const tsRuleTester = getTsRuleTester();
const htmlRuleTester = getHtmlRuleTester();

const getInvalidAlertTest = getInvalidTestFactory('clrAlertFailure');

htmlRuleTester.run('no-clr-alert', rule, {
  invalid: [
    getInvalidAlertTest({
      code: `
      <clr-alert [clrAlertType]="'danger'" [clrAlertAppLevel]="true">
        <clr-alert-item>
          <span class="alert-text">
            This is an app level alert.
          </span>
          <div class="alert-actions">
            <button class="btn alert-action">Fix</button>
          </div>
        </clr-alert-item>
      </clr-alert>
      `,
      locations: [{ line: 2, column: 7 }],
    }),

    getInvalidAlertTest({
      code: `
      <clr-alerts>
        <clr-alert [clrAlertType]="'info'" [clrAlertAppLevel]="true">
          <clr-alert-item>
          <span class="alert-text">
            This is the first app level alert.
          </span>
          <div class="alert-actions">
            <button class="btn alert-action">Fix</button>
          </div>
        </clr-alert-item>
        </clr-alert>
        <clr-alert [clrAlertType]="'danger'" [clrAlertAppLevel]="true">
          <clr-alert-item>
          <span class="alert-text">
            This is a second app level alert.
          </span>
          <div class="alert-actions">
            <button class="btn alert-action">Fix</button>
          </div>
          </clr-alert-item>
        </clr-alert>
      </clr-alerts>
      `,
      locations: [
        { line: 3, column: 9 },
        { line: 13, column: 9 },
      ],
    }),
    getInvalidAlertTest({
      code: `
      <div class="alert alert-danger" role="alert">
        <div class="alert-items">
            <div class="alert-item static"></div>
            <div class="alert-item static"></div>
        </div>
      </div>

      <div class="alert alert-warning" role="alert">
        <div class="alert-items">
          <div class="alert-item static">
            <div class="alert-icon-wrapper">
              <clr-icon class="alert-icon" shape="exclamation-triangle"></clr-icon>
            </div>
            <span class="alert-text">...</span>
            <div class="alert-actions">
              <div class="alert-action dropdown bottom-right open">
                <button class="dropdown-toggle">
                  Actions
                  <clr-icon shape="caret down"></clr-icon>
                </button>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="...">Shutdown</a>
                  <a class="dropdown-item" href="...">Suspend</a>
                  <a class="dropdown-item" href="...">Reboot</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button type="button" class="close" aria-label="Close">
          <clr-icon aria-hidden="true" shape="close"></clr-icon>
        </button>
      </div>
      `,
      locations: [
        { line: 2, column: 7 },
        { line: 9, column: 7 },
      ],
    }),
  ],
  valid: [
    `
      <div class="my-alert"></div>
    `,
    `
      <cl-alert><cl-alert>
    `,
    `
      <alert></alert>
    `,
  ],
});

tsRuleTester.run('no-clr-alert', rule, {
  invalid: [
    getInvalidAlertTest({
      code: `
      @Component({
        template: \`
          <clr-alert [clrAlertType]="'warning'">
            <clr-alert-item>
              <span class="alert-text">
                Try closing this alert.
              </span>
            </clr-alert-item>
          </clr-alert>
        \`
      })
      export class CustomAlertComponent {

      }
      `,
      locations: [{ line: 4, column: 11 }],
    }),
    getInvalidAlertTest({
      code: `
      @Component({
        template: \`
          <div class="alert alert-danger" role="alert">
            <div class="alert-items">
                <div class="alert-item static"></div>
                <div class="alert-item static"></div>
            </div>
          </div>
        \`
      })
      export class CustomAlertComponent {

      }
      `,
      locations: [{ line: 4, column: 11 }],
    }),
  ],
  valid: [
    `
    @Component({
      selector: 'app-custom-alert',
      template: \`
        <div></div>
      \`
      })
      export class CustomAlertComponent {
        // Should we catch that case?
        const myAlert = \`
          <clr-alert [clrAlertType]="'warning'">
            <clr-alert-item>
              <span class="alert-text">
                Try closing this alert.
              </span>
            </clr-alert-item>
          </clr-alert>
        \`;
      }
    `,
  ],
});
