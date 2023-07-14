import { getBitList, getHashkeyList, setAuthKey } from '../src/index'

describe('test hashkeys.ts', () => {
  beforeAll(() => {
    setAuthKey('knn3-common-AswT-mcYf')
  })
  it('should return hashkeys list', async () => {
    let result = await getHashkeyList()
    expect(result.list.length).toBe(30)
    result = await getHashkeyList('shadow88sky',undefined,2)
    console.log(result)
    expect(result.list[0].did).toBe('shadow88sky')
  })
})
