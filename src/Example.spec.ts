import { Example } from '.'

describe('Example', () => {
    it('should be ok', async () => {
        const helloWorld = new Example().testMethod()
        expect(helloWorld).toBe('Hello World')
    })
})
