import { IAddrHoldCountList, INftList } from './interface'
import { instance } from './request'

export const getNftList = async (
  contract?: string,
  network?: 'ethereum' | 'polygon',
  limit?: number,
  cursor?: string
): Promise<INftList> => {
  if (limit && limit > 50) limit = 50
  return (
    await instance.get(`nfts`, {
      params: {
        contract,
        network,
        limit,
        cursor,
      },
    })
  ).data
}

export const getAddrByNft = async (
  contract: string,
  network: 'ethereum' | 'polygon',
  limit?: number,
  cursor?: string
): Promise<IAddrHoldCountList> => {
  if (limit && limit > 50) limit = 50
  return (
    await instance.get(`nfts/${contract}/${network}/addressList`, {
      params: {
        limit,
        cursor,
      },
    })
  ).data
}
