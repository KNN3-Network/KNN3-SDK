import { getBitList, setAuthKey } from '../src/index'

describe('test bit.ts', () => {
  beforeAll(() => {
    setAuthKey('knn3-common-AswT-mcYf')
  })
  it('should return bit list', async () => {
    let result = await getBitList()
    expect(result.list.length).toBe(30)
    result = await getBitList('0005555.bit')
    expect(result.list[0].account).toBe('0005555.bit')
    result = await getBitList(
      undefined,
      '0xeab07120cdecc4a4ffaeddccd8cc508cd42702a1'
    )
    expect(result.list[0].account).toBe('0005555.bit')
    result = await getBitList(undefined, undefined, 10, '0008.bit')
    expect(result.list[0].account).toBe('0008.bit')
    expect(result.list.length).toBe(10)
  })
})
