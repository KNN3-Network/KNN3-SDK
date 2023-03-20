import { ITwitterList } from './interface'
import { instance } from './request'

export const getTwitterList = async (
  name?: string,
  limit?: number,
  cursor?: string
): Promise<ITwitterList> => {
  if (limit && limit > 50) limit = 50
  return (
    await instance.get(`twitters`, {
      params: {
        name,
        limit,
        cursor,
      },
    })
  ).data
}

export const getTwitterIncludeAddr = async (
  uid: string,
  address?: string,
  limit?: number,
  cursor?: string
): Promise<ITwitterList> => {
  if (limit && limit > 50) limit = 50
  return (
    await instance.get(`twitters/${uid}/addressList`, {
      params: {
        address,
        limit,
        cursor,
      },
    })
  ).data
}

export const getTwitterBondAvatar = async (
  uid: string,
  limit?: number,
  cursor?: string
): Promise<ITwitterList> => {
  if (limit && limit > 50) limit = 50
  return (
    await instance.get(`twitters/${uid}/avatarList`, {
      params: {
        limit,
        cursor,
      },
    })
  ).data
}
