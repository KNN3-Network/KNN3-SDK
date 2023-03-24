import {
  getLensFollowers,
  getLensList,
  getLensPublications,
  setAuthKey,
} from '../src/index'

describe('test lens.ts', () => {
  beforeAll(() => {
    setAuthKey('knn3-common-AswT-mcYf')
  })
  it('should return correct lens', async () => {
    let result = await getLensList('shadow88sky.lens')
    expect(result.list[0].profileId).toBe(104724)
    result = await getLensList(undefined, undefined, 10, '11')
    expect(result.list[0].profileId).toBe(11)
  })

  it('should return correct lens followers', async () => {
    const result = await getLensFollowers(104724)
    expect(result.list.length).toBe(30)
  }, 500000)

  it('should return correct lens publications', async () => {
    let result = await getLensPublications()
    expect(result.list.length).toBe(30)
    result = await getLensPublications(104724, undefined, 'Mirror', 1, 1161695)
    expect(result.list[0].id).toBe(1161695)
  })
})
