/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ESLintUtils, TSESTree } from '@typescript-eslint/experimental-utils';
import { RuleContext, RuleFix, RuleFixer } from '@typescript-eslint/experimental-utils/dist/ts-eslint';
import { HTMLAttribute, HTMLElement } from 'eslint-html-parser';
import { lintDecoratorTemplate } from '../decorator-template-helper';
import { getDeprecatedClassFixes } from '../html-fixer-helpers';

export const createESLintRule = ESLintUtils.RuleCreator(() => ``);
export type MessageIds = 'clrListFailure';

const unstyledListClassToAttributeMap = {
  'list-unstyled': 'cds-list="unstyled"',
  list: '', // Remove extraneous "list" classes
};

const styledListClassToAttributeMap = {
  list: 'cds-list',
};

const disallowedClasses = ['list', 'list-unstyled'];
const disallowedListElementSelector = disallowedClasses.map(cls => `.${cls}`).join(',');

function hasDisallowedClass(classes: string[]): boolean {
  return disallowedClasses.some(cls => classes.includes(cls));
}

function getClassFixes(fixer: RuleFixer, classNode: HTMLAttribute | undefined, classes: string[]): RuleFix[] {
  const fixerMap = classes.includes('list-unstyled') ? unstyledListClassToAttributeMap : styledListClassToAttributeMap;

  return getDeprecatedClassFixes(fixer, classNode, fixerMap);
}

function lintListElement(context: RuleContext<any, any>, node: HTMLElement): void {
  const classNode = node.attributes?.find(attribute => attribute.attributeName.value === 'class');
  const classes = classNode?.attributeValue?.value?.split(' ') || [];
  if (hasDisallowedClass(classes)) {
    context.report({
      node: node as any,
      messageId: 'clrListFailure',
      fix: fixer => getClassFixes(fixer, classNode, classes),
    });
  }
}

export default createESLintRule({
  name: 'no-clr-list',
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow use of clr-list',
      recommended: 'warn',
    },
    fixable: 'code',
    messages: {
      clrListFailure: 'Using clr-list is not allowed!',
    },
    schema: [{}],
  },
  defaultOptions: [{}],
  create(context) {
    return {
      'HTMLElement[tagName="ul"]'(node: HTMLElement): void {
        lintListElement(context, node);
      },
      'HTMLElement[tagName="ol"]'(node: HTMLElement): void {
        lintListElement(context, node);
      },
      'ClassDeclaration > Decorator'(node: TSESTree.Decorator): void {
        lintDecoratorTemplate(context, node, disallowedListElementSelector, 'clrListFailure');
      },
    };
  },
});
