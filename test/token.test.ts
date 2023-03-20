import { getTokenList, getAddrByToken } from '../src/index'

describe('test token.ts', () => {
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

  it('should return who hold this token', async () => {
    let result = await getAddrByToken(
      '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9',
      'ethereum',
      3,
      '0x00000000000c480032486921e7ced20e4727f00e'
    )
    expect(result.list.length).toBe(3)
    result = await getAddrByToken(
      '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
      'polygon',
      3,
      '0x0000000000000000000000000000000000000006'
    )
    expect(result.list.length).toBe(3)
  }, 500000)
})
