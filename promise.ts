export const testBody = () => new Promise(
    resolve => setTimeout(resolve, Number(process.env.TEST_WAIT ?? 0))
);