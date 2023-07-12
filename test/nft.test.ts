import { getNftList, setAuthKey } from '../src/index'

describe('test nft.ts', () => {
  beforeAll(() => {
    setAuthKey('knn3-common-AswT-mcYf')
  })
  it('should return nft list', async () => {
    let result = await getNftList()
    expect(result.list.length).toBe(30)
    result = await getNftList(
      undefined,
      undefined,
      5,
      '0x000000777697bdb425a417495743088dc664b10b'
    )
    expect(result.list.length).toBe(5)
  })
})
