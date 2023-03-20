import { getSpaceIdList } from '../src/index'

describe('test spaceId.ts', () => {
  it('should return spaceId list', async () => {
    let result = await getSpaceIdList()
    expect(result.list.length).toBe(30)
    result = await getSpaceIdList('¥1000.bnb')
    expect(result.list[0].name).toBe('¥1000.bnb')
    result = await getSpaceIdList(
      undefined,
      '0x65ed1122641a0aff2c78381da327855209e64acb'
    )
    expect(result.list[0].address).toBe(
      '0x65ed1122641a0aff2c78381da327855209e64acb'
    )
    result = await getSpaceIdList(undefined, undefined, 10, '¥1000.bnb')
    expect(result.list[0].name).toBe('¥1000.bnb')
    expect(result.list.length).toBe(10)
  })
})
