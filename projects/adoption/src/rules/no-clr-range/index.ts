/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ESLintUtils, TSESTree } from '@typescript-eslint/experimental-utils';
import { parseDecoratorTemplate, reportNestedDisallowedElements } from '../decorator-template-helper';
import { HTMLElement } from 'eslint-html-parser';

const disallowedDirective = 'clrRange';
const containerTagName = 'clr-range-container';

export const createESLintRule = ESLintUtils.RuleCreator(() => ``);
const ruleFailureMessage = 'clrRangeFailure';
export type MessageIds = 'clrRangeFailure';
export default createESLintRule({
  name: 'no-clr-range',
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow use of clrRange',
      recommended: 'warn',
    },
    fixable: 'code',
    messages: {
      [ruleFailureMessage]: 'Using clr-range is not allowed!',
    },
    schema: [{}],
  },
  defaultOptions: [{}],
  create(context) {
    return {
      // report all <clr-range-container> elements
      [`HTMLElement[tagName="${containerTagName}"]`](node: HTMLElement): void {
        context.report({
          node: node as any,
          messageId: ruleFailureMessage,
        });
      },

      // report <input clrRange> elements that AREN'T nested in <clr-range-container> elements
      [`:not(HTMLElement[tagName="${containerTagName}"]) > HTMLElement[tagName="input"]`](node: HTMLElement): void {
        const disallowedDirectiveNode = node.attributes?.find(
          attribute => attribute.attributeName.value === disallowedDirective
        );

        if (disallowedDirectiveNode) {
          context.report({
            node: node as any,
            messageId: ruleFailureMessage,
          });
        }
      },

      'ClassDeclaration > Decorator'(node: TSESTree.Decorator): void {
        const parsedTemplate = parseDecoratorTemplate(node);
        if (!parsedTemplate) {
          return;
        }

        const { dom, templateContentNode } = parsedTemplate;

        // report all <clr-range-container> elements
        reportNestedDisallowedElements(containerTagName, context, dom, templateContentNode, ruleFailureMessage);

        // report <input clrRange> elements that AREN'T nested in <clr-range-container> elements
        reportNestedDisallowedElements(
          `:not(${containerTagName}) > input[${disallowedDirective}]`,
          context,
          dom,
          templateContentNode,
          ruleFailureMessage
        );
      },
    };
  },
});
