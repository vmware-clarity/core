/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ESLintUtils, TSESTree } from '@typescript-eslint/experimental-utils';
import { HTMLElement } from 'eslint-html-parser';
import { primaryDisallowedClass, additionalDisallowedClasses, disallowedButtonsSelector } from './disallowed-classes';
import { lintDecoratorTemplate } from '../decorator-template-helper';
import { getDeprecatedClassFixes, getTagFixes } from '../html-fixer-helpers';

export const createESLintRule = ESLintUtils.RuleCreator(() => ``);
export type MessageIds = 'clrButtonFailure';

function hasDisallowedClasses(classes: string[]): boolean {
  return classes.includes(primaryDisallowedClass) && additionalDisallowedClasses.some(cls => classes.includes(cls));
}

const deprecatedClassToAttributeMap = {
  btn: '', // remove extraneous badge classes

  'btn-primary': '',
  'btn-info': '',
  'btn-secondary': 'action="outline"',
  'btn-secondary-outline': 'action="outline"',
  'btn-outline-secondary': 'action="outline"',
  'btn-success': 'status="success"',
  'btn-outline': 'action="outline"',
  'btn-warning': 'status="warning"',
  'btn-danger': 'status="danger"',
  'btn-info-outline': 'action="outline"',
  'btn-success-outline': 'action="outline" status="success"',
  'btn-danger-outline': 'action="outline" status="danger"',
  'btn-warning-outline': 'action="outline" status="warning"',
  'btn-block': 'block',
  'btn-link': 'action="flat"',
  'btn-sm': 'size="sm"',
  'btn-inverse': 'status="inverse"',
  'btn-icon': '',
};

export default createESLintRule({
  name: 'no-clr-button',
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow use of clr-button',
      recommended: 'warn',
    },
    fixable: 'code',
    messages: {
      clrButtonFailure: 'Using clr-button is not allowed!',
    },
    schema: [{}],
  },
  defaultOptions: [{}],
  create(context) {
    return {
      'HTMLElement[tagName="button"]'(node: HTMLElement): void {
        const classNode = node.attributes?.find(attribute => attribute.attributeName.value === 'class');
        const classes = classNode?.attributeValue?.value?.split(' ') || [];
        const hasLoader = node.attributes?.find(attribute => attribute.attributeName.value === '[clrLoading]');

        if (hasLoader) {
          context.report({
            node: node as any,
            messageId: 'clrButtonFailure',
          });

          return;
        }

        if (hasDisallowedClasses(classes)) {
          context.report({
            node: node as any,
            messageId: 'clrButtonFailure',
            fix: fixer => {
              const tagFixes = getTagFixes(fixer, node, 'button', 'cds-button');
              const attributeFixes = getDeprecatedClassFixes(fixer, classNode, deprecatedClassToAttributeMap);

              return [...tagFixes, ...attributeFixes];
            },
          });
        }
      },

      'ClassDeclaration > Decorator'(node: TSESTree.Decorator): void {
        lintDecoratorTemplate(context, node, disallowedButtonsSelector, 'clrButtonFailure');
      },
    };
  },
});
