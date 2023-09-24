import { run } from 'node:test'
import probe from '../probe'
import './suite.1.test.ts';
import './suite.2.test.ts';
import './suite.3.test.ts';
import './suite.4.test.ts';
import './suite.5.test.ts';
import './suite.6.test.ts';
import './suite.7.test.ts';
import './suite.8.test.ts';
import './suite.9.test.ts';
import './suite.10.test.ts';

probe()

run({
  files: ['suite-*.test.ts']
})

