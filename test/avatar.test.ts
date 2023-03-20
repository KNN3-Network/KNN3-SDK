import {
  getAvatarBindAddr,
  getAvatarBindTwitter,
  getAvatarList,
} from '../src/index'

describe('test avatar.ts', () => {
  it('should return avatar list', async () => {
    let result = await getAvatarList(
      '0x0200c6fed045084ae0185b6cf290b60f42fd5769aa94b3c2e67a68cf2cf2847bde'
    )
    expect(result.list.length).toBe(2)
    result = await getAvatarList(
      undefined,
      3,
      '0x0200c6fed045084ae0185b6cf290b60f42fd5769aa94b3c2e67a68cf2cf2847bde'
    )
    expect(result.list.length).toBe(3)
  })

  it('should return bind addresses', async () => {
    const result = await getAvatarBindAddr(
      '0x036fd654a9601ad7db0ae5cd811bf535019e5fdf441591afc676943c73750572e6'
    )
    expect(result.list.length).toBe(1)
  }, 500000)

  it('should return bind twitters', async () => {
    const result = await getAvatarBindTwitter(
      '0x036bb12a884a8ad71b35d2f6be0f6f2b97000921b0cae82a606fc56ffe685a47a5'
    )
    expect(result.list.length).toBe(1)
  })
})
