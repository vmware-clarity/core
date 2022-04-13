/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ESLintUtils, TSESTree } from '@typescript-eslint/experimental-utils';
import { parseDecoratorTemplate, reportNestedDisallowedElements } from '../decorator-template-helper';
import { HTMLElement } from '../../types/index';

const disallowedDirective = 'clrPassword';
const containerTagName = 'clr-password-container';

export const createESLintRule = ESLintUtils.RuleCreator(() => ``);
const ruleFailureMessage = 'clrPasswordFailure';
export type MessageIds = 'clrPasswordFailure';
export default createESLintRule({
  name: 'no-clr-password',
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow use of clrPassword',
      recommended: 'warn',
    },
    fixable: 'code',
    messages: {
      [ruleFailureMessage]: 'Using clr-password is not allowed!',
    },
    schema: [{}],
  },
  defaultOptions: [{}],
  create(context) {
    return {
      // report all <clr-password-container> elements
      [`HTMLElement[tagName="${containerTagName}"]`](node: HTMLElement): void {
        context.report({
          node: node as any,
          messageId: ruleFailureMessage,
        });
      },

      // report <input clrPassword> elements that AREN'T nested in <clr-password-container> elements
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

        // report all <clr-password-container> elements
        reportNestedDisallowedElements(containerTagName, context, dom, templateContentNode, ruleFailureMessage);

        // report <input clrPassword> elements that AREN'T nested in <clr-password-container> elements
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
