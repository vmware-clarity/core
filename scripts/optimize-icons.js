/*
 * Copyright (c) 2016-2023 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

const fs = require('fs');
const path = require('path');
const svgo = require('svgo');
const ts = require('typescript');

const fix = process.argv[2] === '--fix';
const shapesFolderPath = './projects/core/src/icon/shapes';

let foundNonOptimizedIcon = false;

for (const shapeFilename of fs.readdirSync(shapesFolderPath)) {
  const shapeFilePath = path.join(shapesFolderPath, shapeFilename);
  const shapeSourceCode = fs.readFileSync(shapeFilePath).toString();

  let fixedShapeSourceCode = shapeSourceCode;

  const shapeSourceFile = ts.createSourceFile(
    shapeFilename,
    shapeSourceCode,
    ts.ScriptKind.TS,
    /* setParentNodes */ true
  );

  shapeSourceFile.forEachChild(function visit(node) {
    if (ts.isStringLiteral(node) && node.text.startsWith('<')) {
      const sourceSvgTags = node.text;

      const optimizedSvgTags = svgo
        .optimize(`<svg>${sourceSvgTags}</svg>`, { multipass: true })
        .data.replace(/^<svg>/, '')
        .replace(/<\/svg>$/, '');

      if (sourceSvgTags !== optimizedSvgTags) {
        foundNonOptimizedIcon = true;

        if (fix) {
          fixedShapeSourceCode = fixedShapeSourceCode.replace(sourceSvgTags, optimizedSvgTags);
        } else {
          console.error('found non-optimized icon', { shapeFilename, sourceSvgTags, optimizedSvgTags });
        }
      }
    } else {
      node.forEachChild(visit);
    }
  });

  if (fix && fixedShapeSourceCode !== shapeSourceCode) {
    fs.writeFileSync(shapeFilePath, fixedShapeSourceCode);
    console.log(`updated ${shapeFilePath}`);
  }
}

if (!fix && foundNonOptimizedIcon) {
  console.error('Run `npm run optimize-icons:fix` to fix.');
  process.exit(1);
}
