export const testBody = async () => [
        (await import('path')).join(__dirname, __filename),
        (await import('crypto')).createHmac('md5', '').update(__filename).digest('hex'),
        (await import('os')).userInfo(),
        (await import('fs')).stat('', () => {}),
    
]
