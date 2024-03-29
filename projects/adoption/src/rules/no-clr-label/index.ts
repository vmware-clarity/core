/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ESLintUtils, TSESTree } from '@typescript-eslint/experimental-utils';
import { RuleContext, RuleFix, RuleFixer } from '@typescript-eslint/experimental-utils/dist/ts-eslint';
import { HTMLAttribute, HTMLElement } from 'eslint-html-parser';
import { lintDecoratorTemplate } from '../decorator-template-helper';
import {
  encloseNode,
  getDeprecatedClassFixes,
  getTagFixes,
  insertTextAfterNode,
  removeAttribute,
} from '../html-fixer-helpers';

export const createESLintRule = ESLintUtils.RuleCreator(() => ``);
export type MessageIds = 'clrLabelFailure';

const deprecatedClassToAttributeMap = {
  // remove extraneous label and clickable classes
  label: '',
  clickable: '',

  'label-info': 'status="info"',
  'label-success': 'status="success"',
  'label-warning': 'status="warning"',
  'label-danger': 'status="danger"',

  'label-purple': 'color="purple"',
  'label-blue': 'color="blue"',
  'label-orange': 'color="orange"',
  'label-light-blue': 'color="light-blue"',
};

const disallowedClass = 'label';
const disallowedLabelElementSelector = `.${disallowedClass}`;

function migrateAttributes(classNode: HTMLAttribute, classes: string[], fixer: RuleFixer): RuleFix[] {
  const fixes = getDeprecatedClassFixes(fixer, classNode, deprecatedClassToAttributeMap);
  if (!classes.includes('clickable')) {
    const addReadonlyAttributeFix = insertTextAfterNode(classNode, 'readonly', fixer);
    if (addReadonlyAttributeFix) {
      fixes.push(addReadonlyAttributeFix);
    }
  }

  return fixes;
}

function lintLabelElement(context: RuleContext<any, any>, node: HTMLElement): void {
  const classNode = node.attributes?.find(attribute => attribute.attributeName.value === 'class');
  const classes = classNode?.attributeValue?.value?.split(' ') || [];
  if (classes.includes(disallowedClass)) {
    context.report({
      node: node as any,
      messageId: 'clrLabelFailure',
      fix: fixer => {
        const changeTagNameFixes = getTagFixes(fixer, node, node.tagName, 'cds-tag');
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const migrateAttributesFixes = migrateAttributes(classNode!, classes, fixer);

        return [...changeTagNameFixes, ...migrateAttributesFixes];
      },
    });
  }
}

function lintLinkLabelElement(context: RuleContext<any, any>, node: HTMLElement): void {
  const classNode = node.attributes?.find(attribute => attribute.attributeName.value === 'class');
  const classes = classNode?.attributeValue?.value?.split(' ') || [];
  if (classes.includes(disallowedClass)) {
    context.report({
      node: node as any,
      messageId: 'clrLabelFailure',
      fix: fixer => {
        const hrefNode = node.attributes?.find(attribute => attribute.attributeName.value === 'href');
        if (!hrefNode) {
          return null;
        }

        const changeTagNameFixes = getTagFixes(fixer, node, node.tagName, 'cds-tag');
        const removeHrefNodeFix = removeAttribute(hrefNode, fixer);

        const openingAnchorTag = `<a ${hrefNode.value}>`;
        const closingAnchorTag = `</a>`;
        const encloseInAnchorTagFixes = encloseNode(node, openingAnchorTag, closingAnchorTag, fixer);

        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const migrateAttributesFixes = migrateAttributes(classNode!, classes, fixer);

        return [...changeTagNameFixes, removeHrefNodeFix, ...encloseInAnchorTagFixes, ...migrateAttributesFixes];
      },
    });
  }
}

export default createESLintRule({
  name: 'no-clr-label',
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow use of clr-label',
      recommended: 'warn',
    },
    fixable: 'code',
    messages: {
      clrLabelFailure: 'Using clr-label is not allowed!',
    },
    schema: [{}],
  },
  defaultOptions: [{}],
  create(context) {
    return {
      'HTMLElement[tagName="span"]'(node: HTMLElement): void {
        lintLabelElement(context, node);
      },
      'HTMLElement[tagName="a"]'(node: HTMLElement): void {
        lintLinkLabelElement(context, node);
      },
      'ClassDeclaration > Decorator'(node: TSESTree.Decorator): void {
        lintDecoratorTemplate(context, node, disallowedLabelElementSelector, 'clrLabelFailure');
      },
    };
  },
});
