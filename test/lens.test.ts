import {
  getLensFollowers,
  getLensList,
  getLensPublications,
  setAuthKey,
  getLensRate,
  getLensRank,
  getLensRevenueByAddress,
  getLensRevenueByMirror,
  getLensRevenueByPub,
  getLensRevenueByPubByDay,
  getLensRevenueTendencyByAddress,
  getLensRevenueTop10CollectorsByAddress,
} from '../src/index'

describe('test lens.ts', () => {
  beforeAll(() => {
    setAuthKey('knn3-common-AswT-mcYf')
  })
  // it('should return correct lens', async () => {
  //   let result = await getLensList('shadow88sky.lens')
  //   expect(result.list[0].profileId).toBe(104724)
  //   result = await getLensList(undefined, undefined, 10, '11')
  //   expect(result.list[0].profileId).toBe(11)
  // }, 50000)

  // it('should return correct lens followers', async () => {
  //   const result = await getLensFollowers(104724)
  //   expect(result.list.length).toBe(30)
  // }, 500000)

  // it('should return correct lens publications', async () => {
  //   let result = await getLensPublications()
  //   expect(result.list.length).toBe(30)
  //   result = await getLensPublications(104724, undefined, 'Mirror', 1, 1161695)
  //   expect(result.list[0].profileId).toBe(104724)
  // }, 50000)

  // it('should return correct lens rate', async () => {
  //   let result = await getLensRate(5)
  //   expect(result.profileId).toBe('5')
  // }, 50000)

  // it('should return correct lens rank', async () => {
  //   let result = await getLensRank()
  //   expect(result.length).toBe(2000)
  // }, 50000)

  it('should return correct lens revenue by address', async () => {
    let result = await getLensRevenueByAddress(
      '0x329c54289ff5d6b7b7dae13592c6b1eda1543ed4'
    )
    expect(result.length).toBe(2)
  }, 50000)

  it('should return correct lens revenue by mirror', async () => {
    let result = await getLensRevenueByMirror(70906, 192)
    console.log(result)
    expect(result.length).toBe(1)
  }, 50000)

  it('should return correct lens revenue by single post/comment', async () => {
    let result = await getLensRevenueByPub(18265, 2)
    console.log(result)
    expect(result.length).toBe(1)
  }, 50000)

  it('should return correct lens revenue by single pub by day', async () => {
    let result = await getLensRevenueByPubByDay(18265, 2)
    console.log(result)
    expect(result.length).toBe(1)
  }, 50000)

  it('should return correct lens revenue by address by day', async () => {
    let result = await getLensRevenueTendencyByAddress(
      '0xc67e0e424952d614d6c96baf543ddd6f6694a977'
    )
    console.log(result)
    expect(result.length).toBe(1)
  }, 50000)

  it('should return correct lens revenue top10 collectors by address', async () => {
    let result = await getLensRevenueTop10CollectorsByAddress(
      '0xc67e0e424952d614d6c96baf543ddd6f6694a977'
    )
    console.log(result)
    expect(result.length).toBe(1)
  }, 50000)
})
