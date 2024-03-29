/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

export function sortOrder(sort: 'ascending' | 'descending' | 'none') {
  switch (sort) {
    case 'ascending':
      return 'descending';
    case 'descending':
      return 'none';
    case 'none':
      return 'ascending';
  }
}
