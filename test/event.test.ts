import { getEvent, getEventList, getEventAddr, setAuthKey } from '../src/index'

describe('test event.ts', () => {
  beforeAll(() => {
    setAuthKey('knn3-common-AswT-mcYf')
  })
  it('should return correct event', async () => {
    let event
    try {
      event = await getEvent('0x88520C10ad3d35aD2D3220CdE446CcB33f09331C')
    } catch (e: any) {
      expect(e.message).toBe(`can't find event`)
    }
    event = await getEvent('1')
    expect(event.name).toBe('dappcon')
  })

  it('should return event list', async () => {
    const result = await getEventList('eth')
    expect(result.list.length).toBeGreaterThan(2)
  })

  it('should return who attend event', async () => {
    const result = await getEventAddr('10203')
  }, 500000)
})
