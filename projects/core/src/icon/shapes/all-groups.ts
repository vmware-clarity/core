/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { CHART_ICONS } from '@cds/core/icon/utils/charts';
import { COMMERCE_ICONS } from '@cds/core/icon/utils/commerce';
import { MEDIA_ICONS } from '@cds/core/icon/utils/media';

export function listAllIcons() {
  return (
    html`` +
    CHART_ICONS +
    COMMERCE_ICONS +
    MEDIA_ICONS +
    `</br>` +
    `Social` +
    `</br>` +
    `<br/>` +
    `share (Dev) share (Figma):` +
    `<br/>` +
    `<cds-icon shape="share" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="share" badge="warning-triangle" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="share" badge="danger" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="share" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="share" badge="warning-triangle" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="share" badge="danger" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<br/>` +
    `star (Dev) star (Figma):` +
    `<br/>` +
    `<cds-icon shape="star" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="star" badge="warning-triangle" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="star" badge="danger" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="star" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="star" badge="warning-triangle" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="star" badge="danger" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<br/>` +
    `half-star (Dev) half-star (Figma):` +
    `<br/>` +
    `<cds-icon shape="half-star" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="half-star" badge="warning-triangle" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="half-star" badge="danger" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="half-star" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="half-star" badge="warning-triangle" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="half-star" badge="danger" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<br/>` +
    `bookmark (Dev) bookmark (Figma):` +
    `<br/>` +
    `<cds-icon shape="bookmark" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="bookmark" badge="warning-triangle" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="bookmark" badge="danger" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="bookmark" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="bookmark" badge="warning-triangle" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="bookmark" badge="danger" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<br/>` +
    `envelope (Dev) envelope (Figma):` +
    `<br/>` +
    `<cds-icon shape="envelope" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="envelope" badge="warning-triangle" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="envelope" badge="danger" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="envelope" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="envelope" badge="warning-triangle" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="envelope" badge="danger" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<br/>` +
    `calendar (Dev) calendar (Figma):` +
    `<br/>` +
    `<cds-icon shape="calendar" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="calendar" badge="warning-triangle" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="calendar" badge="danger" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="calendar" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="calendar" badge="warning-triangle" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="calendar" badge="danger" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<br/>` +
    `event (Dev) event (Figma):` +
    `<br/>` +
    `<cds-icon shape="event" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="event" badge="warning-triangle" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="event" badge="danger" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="event" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="event" badge="warning-triangle" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="event" badge="danger" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<br/>` +
    `tasks (Dev) tasks (Figma):` +
    `<br/>` +
    `<cds-icon shape="tasks" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="tasks" badge="warning-triangle" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="tasks" badge="danger" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="tasks" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="tasks" badge="warning-triangle" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="tasks" badge="danger" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<br/>` +
    `flag (Dev) flag (Figma):` +
    `<br/>` +
    `<cds-icon shape="flag" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="flag" badge="warning-triangle" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="flag" badge="danger" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="flag" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="flag" badge="warning-triangle" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="flag" badge="danger" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<br/>` +
    `inbox (Dev) inbox (Figma):` +
    `<br/>` +
    `<cds-icon shape="inbox" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="inbox" badge="warning-triangle" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="inbox" badge="danger" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="inbox" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="inbox" badge="warning-triangle" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="inbox" badge="danger" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<br/>` +
    `heart (Dev) heart (Figma):` +
    `<br/>` +
    `<cds-icon shape="heart" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="heart" badge="warning-triangle" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="heart" badge="danger" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="heart" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="heart" badge="warning-triangle" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="heart" badge="danger" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<br/>` +
    `heartbroken (Dev) heartbroken (Figma):` +
    `<br/>` +
    `<cds-icon shape="heartbroken" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="heartbroken" badge="warning-triangle" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="heartbroken" badge="danger" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="heartbroken" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="heartbroken" badge="warning-triangle" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="heartbroken" badge="danger" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<br/>` +
    `talk-bubbles (Dev) talk-bubbles (Figma):` +
    `<br/>` +
    `<cds-icon shape="talk-bubbles" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="talk-bubbles" badge="warning-triangle" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="talk-bubbles" badge="danger" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="talk-bubbles" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="talk-bubbles" badge="warning-triangle" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="talk-bubbles" badge="danger" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<br/>` +
    `chat-bubbles (Dev) chat-bubbles (Figma):` +
    `<br/>` +
    `<cds-icon shape="chat-bubbles" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="chat-bubbles" badge="warning-triangle" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="chat-bubbles" badge="danger" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="chat-bubbles" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="chat-bubbles" badge="warning-triangle" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="chat-bubbles" badge="danger" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<br/>` +
    `happy-face (Dev) happy-face (Figma):` +
    `<br/>` +
    `<cds-icon shape="happy-face" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="happy-face" badge="warning-triangle" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="happy-face" badge="danger" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="happy-face" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="happy-face" badge="warning-triangle" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="happy-face" badge="danger" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<br/>` +
    `neutral-face (Dev) neutral-face (Figma):` +
    `<br/>` +
    `<cds-icon shape="neutral-face" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="neutral-face" badge="warning-triangle" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="neutral-face" badge="danger" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="neutral-face" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="neutral-face" badge="warning-triangle" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="neutral-face" badge="danger" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<br/>` +
    `sad-face (Dev) sad-face (Figma):` +
    `<br/>` +
    `<cds-icon shape="sad-face" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="sad-face" badge="warning-triangle" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="sad-face" badge="danger" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="sad-face" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="sad-face" badge="warning-triangle" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="sad-face" badge="danger" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<br/>` +
    `thumbs-up (Dev) thumbs-up (Figma):` +
    `<br/>` +
    `<cds-icon shape="thumbs-up" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="thumbs-up" badge="warning-triangle" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="thumbs-up" badge="danger" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="thumbs-up" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="thumbs-up" badge="warning-triangle" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="thumbs-up" badge="danger" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<br/>` +
    `thumbs-down (Dev) thumbs-down (Figma):` +
    `<br/>` +
    `<cds-icon shape="thumbs-down" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="thumbs-down" badge="warning-triangle" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="thumbs-down" badge="danger" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="thumbs-down" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="thumbs-down" badge="warning-triangle" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="thumbs-down" badge="danger" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<br/>` +
    `crown (Dev) crown (Figma):` +
    `<br/>` +
    `<cds-icon shape="crown" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="crown" badge="warning-triangle" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="crown" badge="danger" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="crown" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="crown" badge="warning-triangle" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="crown" badge="danger" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<br/>` +
    `hashtag (Dev) hash-tag (Figma):` +
    `<br/>` +
    `<cds-icon shape="hashtag" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="hashtag" badge="warning-triangle" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="hashtag" badge="danger" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="hashtag" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="hashtag" badge="warning-triangle" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="hashtag" badge="danger" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `</br>` +
    `Text editing` +
    `</br>` +
    `<br/>` +
    `share (Dev) share (Figma):` +
    `<br/>` +
    `<cds-icon shape="share" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="share" badge="warning-triangle" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="share" badge="danger" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="share" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="share" badge="warning-triangle" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="share" badge="danger" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<br/>` +
    `paint-roller (Dev) paint-roller (Figma):` +
    `<br/>` +
    `<cds-icon shape="paint-roller" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="paint-roller" badge="warning-triangle" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="paint-roller" badge="danger" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="paint-roller" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="paint-roller" badge="warning-triangle" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="paint-roller" badge="danger" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<br/>` +
    `bold (Dev) bold (Figma):` +
    `<br/>` +
    `<cds-icon shape="bold" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="bold" badge="warning-triangle" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="bold" badge="danger" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="bold" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="bold" badge="warning-triangle" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="bold" badge="danger" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<br/>` +
    `italic (Dev) italic (Figma):` +
    `<br/>` +
    `<cds-icon shape="italic" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="italic" badge="warning-triangle" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="italic" badge="danger" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="italic" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="italic" badge="warning-triangle" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="italic" badge="danger" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<br/>` +
    `underline (Dev) underline (Figma):` +
    `<br/>` +
    `<cds-icon shape="underline" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="underline" badge="warning-triangle" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="underline" badge="danger" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="underline" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="underline" badge="warning-triangle" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="underline" badge="danger" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<br/>` +
    `font-size (Dev) font-size (Figma):` +
    `<br/>` +
    `<cds-icon shape="font-size" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="font-size" badge="warning-triangle" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="font-size" badge="danger" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="font-size" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="font-size" badge="warning-triangle" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="font-size" badge="danger" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<br/>` +
    `text (Dev) text (Figma):` +
    `<br/>` +
    `<cds-icon shape="text" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="text" badge="warning-triangle" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="text" badge="danger" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="text" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="text" badge="warning-triangle" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="text" badge="danger" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<br/>` +
    `bullet-list (Dev) bulleted-list (Figma):` +
    `<br/>` +
    `<cds-icon shape="bullet-list" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="bullet-list" badge="warning-triangle" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="bullet-list" badge="danger" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="bullet-list" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="bullet-list" badge="warning-triangle" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="bullet-list" badge="danger" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<br/>` +
    `number-list (Dev) numbered-list (Figma):` +
    `<br/>` +
    `<cds-icon shape="number-list" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="number-list" badge="warning-triangle" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="number-list" badge="danger" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="number-list" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="number-list" badge="warning-triangle" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="number-list" badge="danger" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<br/>` +
    `checkboxed-list (Dev) checkbox-list (Figma):` +
    `<br/>` +
    `<cds-icon shape="checkboxed-list" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="checkboxed-list" badge="warning-triangle" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="checkboxed-list" badge="danger" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="checkboxed-list" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="checkboxed-list" badge="warning-triangle" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="checkboxed-list" badge="danger" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<br/>` +
    `justify-list (Dev) justify (Figma):` +
    `<br/>` +
    `<cds-icon shape="justify-text" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="justify-text" badge="warning-triangle" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="justify-text" badge="danger" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="justify-text" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="justify-text" badge="warning-triangle" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="justify-text" badge="danger" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `</br>` +
    `Travel` +
    `</br>` +
    `<br/>` +
    `checkboxed-list (Dev) checkbox-list (Figma):` +
    `<br/>` +
    `<cds-icon shape="checkboxed-list" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="checkboxed-list" badge="warning-triangle" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="checkboxed-list" badge="danger" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="checkboxed-list" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="checkboxed-list" badge="warning-triangle" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="checkboxed-list" badge="danger" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<br/>` +
    `checkboxed-list (Dev) checkbox-list (Figma):` +
    `<br/>` +
    `<cds-icon shape="checkboxed-list" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="checkboxed-list" badge="warning-triangle" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="checkboxed-list" badge="danger" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="checkboxed-list" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="checkboxed-list" badge="warning-triangle" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="checkboxed-list" badge="danger" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<br/>` +
    `checkboxed-list (Dev) checkbox-list (Figma):` +
    `<br/>` +
    `<cds-icon shape="checkboxed-list" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="checkboxed-list" badge="warning-triangle" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="checkboxed-list" badge="danger" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="checkboxed-list" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="checkboxed-list" badge="warning-triangle" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="checkboxed-list" badge="danger" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<br/>` +
    `checkboxed-list (Dev) checkbox-list (Figma):` +
    `<br/>` +
    `<cds-icon shape="checkboxed-list" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="checkboxed-list" badge="warning-triangle" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="checkboxed-list" badge="danger" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="checkboxed-list" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="checkboxed-list" badge="warning-triangle" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="checkboxed-list" badge="danger" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<br/>` +
    `checkboxed-list (Dev) checkbox-list (Figma):` +
    `<br/>` +
    `<cds-icon shape="checkboxed-list" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="checkboxed-list" badge="warning-triangle" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="checkboxed-list" badge="danger" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="checkboxed-list" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="checkboxed-list" badge="warning-triangle" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="checkboxed-list" badge="danger" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<br/>` +
    `checkboxed-list (Dev) checkbox-list (Figma):` +
    `<br/>` +
    `<cds-icon shape="checkboxed-list" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="checkboxed-list" badge="warning-triangle" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="checkboxed-list" badge="danger" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="checkboxed-list" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="checkboxed-list" badge="warning-triangle" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="checkboxed-list" badge="danger" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<br/>` +
    `checkboxed-list (Dev) checkbox-list (Figma):` +
    `<br/>` +
    `<cds-icon shape="checkboxed-list" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="checkboxed-list" badge="warning-triangle" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="checkboxed-list" badge="danger" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="checkboxed-list" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="checkboxed-list" badge="warning-triangle" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="checkboxed-list" badge="danger" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<br/>` +
    `checkboxed-list (Dev) checkbox-list (Figma):` +
    `<br/>` +
    `<cds-icon shape="checkboxed-list" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="checkboxed-list" badge="warning-triangle" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="checkboxed-list" badge="danger" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="checkboxed-list" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="checkboxed-list" badge="warning-triangle" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="checkboxed-list" badge="danger" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<br/>` +
    `checkboxed-list (Dev) checkbox-list (Figma):` +
    `<br/>` +
    `<cds-icon shape="checkboxed-list" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="checkboxed-list" badge="warning-triangle" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="checkboxed-list" badge="danger" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="checkboxed-list" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="checkboxed-list" badge="warning-triangle" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="checkboxed-list" badge="danger" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<br/>` +
    `checkboxed-list (Dev) checkbox-list (Figma):` +
    `<br/>` +
    `<cds-icon shape="checkboxed-list" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="checkboxed-list" badge="warning-triangle" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="checkboxed-list" badge="danger" role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="checkboxed-list" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="checkboxed-list" badge="warning-triangle" solid role="img" aria-label="Icons v3.1.0"></cds-icon>` +
    `<cds-icon shape="checkboxed-list" badge="danger" solid role="img" aria-label="Icons v3.1.0"></cds-icon>`
  );
}
