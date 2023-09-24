import { testBody } from "../promise";

const TEST_ITERATIONS = Number(process.env.TEST_ITERATIONS);

describe(__filename, () => {
    for(const i of Array(TEST_ITERATIONS).fill(TEST_ITERATIONS)) {
    it(`${__filename}--${i}`, async () => {
            expect(true).toEqual(true)
            await testBody()
            expect(true).toEqual(true)
        })
    }
})