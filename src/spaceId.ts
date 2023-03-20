import { ISpaceIdList } from './interface'
import { instance } from './request'

export const getSpaceIdList = async (
  spaceId?: string,
  addr?: string,
  limit?: number,
  cursor?: string
): Promise<ISpaceIdList> => {
  if (limit && limit > 50) limit = 50
  return (
    await instance.get(`spaceId`, {
      params: {
        spaceId,
        addr,
        limit,
        cursor,
      },
    })
  ).data
}
