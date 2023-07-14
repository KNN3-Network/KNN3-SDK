import { IHashkeyList } from './interface'
import { instance } from './request'

export const getHashkeyList = async (
  did?: string,
  addr?: string,
  limit?: number,
  cursor?: string
): Promise<IHashkeyList> => {
  if (limit && limit > 50) limit = 50
  return (
    await instance.get(`hashkeys`, {
      params: {
        did,
        addr,
        limit,
        cursor,
      },
    })
  ).data
}
