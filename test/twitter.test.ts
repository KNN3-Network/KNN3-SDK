import {
  getTwitterList,
  getTwitterIncludeAddr,
  getTwitterBondAvatar,
  setAuthKey,
} from '../src/index'

describe('test twitter.ts', () => {
  beforeAll(() => {
    setAuthKey('knn3-common-AswT-mcYf')
  })
  it('should return twitter list', async () => {
    const result = await getTwitterList('chen')
    expect(result.list.length).toBeGreaterThan(2)
  })

  it('should return the twitter bound address ', async () => {
    const result = await getTwitterIncludeAddr('988064388702650370')
    expect(result.list.length).toBe(1)
  }, 500000)

  it('should return the twitter bound avatar ', async () => {
    const result = await getTwitterBondAvatar('1303510891141369856')
    expect(result.list.length).toBe(1)
  })
})
