import { getNftList, getAddrByNft, setAuthKey } from '../src/index'

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

  it('should return who hold this nft', async () => {
    let result = await getAddrByNft(
      '0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85',
      'ethereum',
      3,
      '0x00000000000c480032486921e7ced20e4727f00e'
    )
    expect(result.list.length).toBe(3)
    result = await getAddrByNft(
      '0xd93983675612a629929140cb471d39ad36300c81',
      'polygon',
      1
    )
    expect(result.list.length).toBe(1)
  }, 500000)
})
