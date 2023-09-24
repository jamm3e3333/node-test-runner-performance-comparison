import { testBody } from "../promise";
import assert from 'assert'

const TEST_ITERATIONS = Number(process.env.TEST_ITERATIONS);

describe(__filename, () => {
    for(const i of Array(TEST_ITERATIONS).fill(TEST_ITERATIONS)) {
    it(`${__filename}--${i}`, async () => {
            assert.equal(true, true)
            await testBody()
            assert.equal(true, true)
        })
    }
})