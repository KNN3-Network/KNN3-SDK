import {
  getAddr,
  getAddrList,
  attendEvents,
  boundTwitter,
  boundAvatars,
  holdNfts,
  holdTokens,
  boundLens,
} from '../src/index'

describe('test addr.ts', () => {
  it('should return correct address', async () => {
    let addr
    try {
      addr = await getAddr('0x88520C10ad3d35aD2D3220CdE446CcB33f09331C')
    } catch (e: any) {
      expect(e.message).toBe(`can't find address`)
    }
    addr = await getAddr('0x88520C10ad3d35aD2D3220CdE446CcB33f09331B')
    expect(addr.name).toBe('shadow88sky')
  })

  it('should return address list', async () => {
    let result = await getAddrList()
    expect(result.list.length).toBe(30)
  }, 500000)

  it('should return address attend poap list', async () => {
    let result = await attendEvents(
      '0x88520C10ad3d35aD2D3220CdE446CcB33f09331C'
    )
    expect(result.list.length).toBe(0)
    result = await attendEvents(
      '0x535824c63d3421c703cb022aba55c321a6e30bf4',
      'eth',
      2,
      'ethberlinzwei'
    )
    expect(result.list[0].name).toBe('ethberlinzwei')
  })

  it('should return address bound twitters', async () => {
    let result = await boundTwitter(
      '0x035d1fa6e5967624f0cd424892994717ea9fc2d8'
    )
    expect(result.list.length).toBe(1)
  })

  it('should return address bound avatars', async () => {
    let result = await boundAvatars(
      '0x790116d0685eb197b886dacad9c247f785987a4a'
    )
    expect(result.list.length).toBe(30)
  })

  it('should return address bound lens', async () => {
    let result = await boundLens('0x88520C10ad3d35aD2D3220CdE446CcB33f09331B')
    expect(result.list.length).toBe(1)
  })

  it('should return address hold nfts', async () => {
    let result = await holdNfts(
      '0x88520C10ad3d35aD2D3220CdE446CcB33f09331B',
      'ethereum'
    )
    expect(result.list.length).toBeGreaterThan(0)
    result = await holdNfts(
      '0x88520C10ad3d35aD2D3220CdE446CcB33f09331B',
      'polygon'
    )
    expect(result.list.length).toBeGreaterThan(0)
  }, 500000)

  it('should return address hold tokens', async () => {
    let result = await holdTokens(
      '0x88520C10ad3d35aD2D3220CdE446CcB33f09331B',
      'ethereum'
    )
    expect(result.list.length).toBeGreaterThan(0)
    result = await holdTokens(
      '0x88520C10ad3d35aD2D3220CdE446CcB33f09331B',
      'polygon'
    )
    expect(result.list.length).toBeGreaterThan(0)
  }, 500000)
})
