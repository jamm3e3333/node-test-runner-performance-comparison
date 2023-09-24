import { testBody } from "../promise";
import { test, describe, expect } from 'vitest'

const TEST_ITERATIONS = Number(process.env.TEST_ITERATIONS);

describe(__filename, () => {
    for(const i of Array(TEST_ITERATIONS).fill(TEST_ITERATIONS)) {
    test(`${__filename}--${i}`, async () => {
            expect(true).toEqual(true)
            await testBody()
            expect(true).toEqual(true)
        })
    }
})