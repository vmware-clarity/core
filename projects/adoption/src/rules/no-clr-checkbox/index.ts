/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ESLintUtils, TSESTree } from '@typescript-eslint/experimental-utils';
import { parseDecoratorTemplate, reportNestedDisallowedElements } from '../decorator-template-helper';
import { HTMLElement } from 'eslint-html-parser';

const disallowedDirective = 'clrCheckbox';
const wrapperTagName = 'clr-checkbox-wrapper';
const containerTagName = 'clr-checkbox-container';

export const createESLintRule = ESLintUtils.RuleCreator(() => ``);
const ruleFailureMessage = 'clrCheckboxFailure';
export type MessageIds = 'clrCheckboxFailure';
export default createESLintRule({
  name: 'no-clr-checkbox',
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow use of clrCheckbox',
      recommended: 'warn',
    },
    fixable: 'code',
    messages: {
      [ruleFailureMessage]: 'Using clr-checkbox is not allowed!',
    },
    schema: [{}],
  },
  defaultOptions: [{}],
  create(context) {
    return {
      // report all <clr-checkbox-container> elements
      [`HTMLElement[tagName="${containerTagName}"]`](node: HTMLElement): void {
        context.report({
          node: node as any,
          messageId: ruleFailureMessage,
        });
      },
      // report <clr-checkbox-wrapper> elements that AREN'T nested in <clr-checkbox-container> elements
      [`:not(HTMLElement[tagName="${containerTagName}"]) > HTMLElement[tagName="${wrapperTagName}"]`](
        node: HTMLElement
      ): void {
        context.report({
          node: node as any,
          messageId: ruleFailureMessage,
        });
      },
      // report <input clrCheckbox> elements that AREN'T nested in <clr-checkbox-wrapper> elements
      [`:not(HTMLElement[tagName="${wrapperTagName}"]) > HTMLElement[tagName="input"]`](node: HTMLElement): void {
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

        // report all <clr-checkbox-container> elements
        reportNestedDisallowedElements(containerTagName, context, dom, templateContentNode, ruleFailureMessage);

        // report <clr-checkbox-wrapper> elements that AREN'T nested in <clr-checkbox-container> elements
        reportNestedDisallowedElements(
          `:not(${containerTagName}) > ${wrapperTagName}`,
          context,
          dom,
          templateContentNode,
          ruleFailureMessage
        );

        // report <input clrCheckbox> elements that AREN'T nested in <clr-checkbox-wrapper> elements
        reportNestedDisallowedElements(
          `:not(${wrapperTagName}) > input[${disallowedDirective}]`,
          context,
          dom,
          templateContentNode,
          ruleFailureMessage
        );
      },
    };
  },
});
