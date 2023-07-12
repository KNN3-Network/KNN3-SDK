import { getTokenList, setAuthKey } from '../src/index'

describe('test token.ts', () => {
  beforeAll(() => {
    setAuthKey('knn3-common-AswT-mcYf')
  })
  it('should return token list', async () => {
    let result = await getTokenList()
    expect(result.list.length).toBe(30)
    result = await getTokenList(
      '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9',
      undefined,
      5
    )
    expect(result.list.length).toBe(1)
  })
})
