import { describe, it } from 'node:test'
import {equal} from 'node:assert'
import { testBody } from '../promise'

const TEST_ITERATIONS = Number(process.env.TEST_ITERATIONS);

describe(__filename, () => {
    for(const i of Array(TEST_ITERATIONS).fill(TEST_ITERATIONS)) {
    it(`${__filename}--${i}`, async () => {
            equal(true, true)
            await testBody()
            equal(true, true)
        })
    }
})