/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ESLintUtils, TSESTree } from '@typescript-eslint/experimental-utils';
import { HTMLElement } from '../../types';
import { lintDecoratorTemplate } from '../decorator-template-helper';

export const createESLintRule = ESLintUtils.RuleCreator(() => ``);
export type MessageIds = 'clrAccordionFailure';

const disallowedAccordionElementSelector = `clr-accordion`;

export default createESLintRule({
  name: 'no-clr-accordion',
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow use of clr-accordion',
      recommended: 'warn',
    },
    fixable: 'code',
    messages: {
      clrAccordionFailure: 'Using clr-accordion is not allowed!',
    },
    schema: [{}],
  },
  defaultOptions: [{}],
  create(context) {
    return {
      'HTMLElement[tagName="clr-accordion"]'(node: HTMLElement): void {
        context.report({
          node: node as any,
          messageId: 'clrAccordionFailure',
        });
      },
      'ClassDeclaration > Decorator'(node: TSESTree.Decorator): void {
        lintDecoratorTemplate(context, node, disallowedAccordionElementSelector, 'clrAccordionFailure');
      },
    };
  },
});
