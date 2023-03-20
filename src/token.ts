import { IAddrHoldCountList, ITokenList } from './interface'
import { instance } from './request'

export const getTokenList = async (
  contract?: string,
  network?: 'ethereum' | 'polygon',
  limit?: number,
  cursor?: string
): Promise<ITokenList> => {
  if (limit && limit > 50) limit = 50
  return (
    await instance.get(`tokens`, {
      params: {
        contract,
        network,
        limit,
        cursor,
      },
    })
  ).data
}

export const getAddrByToken = async (
  contract: string,
  network: 'ethereum' | 'polygon',
  limit?: number,
  cursor?: string
): Promise<IAddrHoldCountList> => {
  if (limit && limit > 50) limit = 50
  return (
    await instance.get(`tokens/${contract}/${network}/addressList`, {
      params: {
        limit,
        cursor,
      },
    })
  ).data
}
