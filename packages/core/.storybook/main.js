/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

const rollupStorybook = require('../rollup.storybook.js');

module.exports = {
  staticDirs: ['./public'],
  stories: ['../src/**/*.stories.{ts,mdx}', '../docs/**/*.stories.{ts,mdx}'],
  rollupConfig(config) {
    return rollupStorybook.getConfig(config);
  },
};
