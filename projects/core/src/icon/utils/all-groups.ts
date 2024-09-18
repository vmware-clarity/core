/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { CHART_ICONS } from './charts';
import { COMMERCE_ICONS } from './commerce';
import { MEDIA_ICONS } from './media';
import { SOCIAL_ICONS } from '@cds/core/icon/utils/social';
import { TEXT_EDITING_ICONS } from '@cds/core/icon/utils/text-editing';
import { TRAVEL_ICONS } from '@cds/core/icon/utils/travel';
import { TECHNOLOGY_ICONS } from '@cds/core/icon/utils/technology';
import { TECHNOLOGY_ICONS_PART_2 } from '@cds/core/icon/utils/technology-2';

export function listAllIcons() {
  return (
    html`` +
    CHART_ICONS +
    COMMERCE_ICONS +
    MEDIA_ICONS +
    SOCIAL_ICONS +
    TEXT_EDITING_ICONS +
    TECHNOLOGY_ICONS +
    TECHNOLOGY_ICONS_PART_2 +
    TRAVEL_ICONS
  );
}
