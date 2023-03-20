import { IBitList } from './interface'
import { instance } from './request'

export const getBitList = async (
  account?: string,
  addr?: string,
  limit?: number,
  cursor?: string
): Promise<IBitList> => {
  if (limit && limit > 50) limit = 50
  return (
    await instance.get(`bits`, {
      params: {
        account,
        addr,
        limit,
        cursor,
      },
    })
  ).data
}
