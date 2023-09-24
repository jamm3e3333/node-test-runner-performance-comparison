#!/bin/bash

rm -f jest/suite.*.test.ts
rm -f mocha/suite.*.test.ts
rm -f vitest/suite.*.test.ts
rm -f node-test-runner/suite.*.test.ts

sed -i "" "/^import '.\/suite.*.test';/d" node-test-runner/setup.ts

echo "SUIT_COUNT: $SUIT_COUNT"

for N in $(seq 1 $SUIT_COUNT)
do 
   cp "jest/suite.template.ts" "jest/suite.$N.test.ts"
   cp "mocha/suite.template.ts" "mocha/suite.$N.test.ts"
   cp "node-test-runner/suite.template.ts" "node-test-runner/suite.$N.test.ts"
   cp "vitest/suite.template.ts" "vitest/suite.$N.test.ts"

   lastImport=$(grep "^import " node-test-runner/setup.ts | tail -n1)
   escapedImport=$(echo "$lastImport" | sed 's/[&/\]/\\&/g')  # Escape the special characters in the line
   sed -i "" "/^${escapedImport}$/a\\
import './suite.${N}.test';
" node-test-runner/setup.ts
done