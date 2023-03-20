import { IAddrList } from './interface'
import { instance } from './request'

export const getLensList = async (
  handle?: string,
  profileId?: string,
  limit?: number,
  cursor?: string
) => {
  if (limit && limit > 50) limit = 50
  return (
    await instance.get(`lens`, {
      params: {
        handle,
        profileId,
        limit,
        cursor,
      },
    })
  ).data
}

export const getLensFollowers = async (
  profileId: number,
  limit?: number,
  cursor?: string
): Promise<IAddrList> => {
  if (limit && limit > 50) limit = 50
  return (
    await instance.get(`/lens/followers/${profileId}`, {
      params: {
        limit,
        cursor,
      },
    })
  ).data
}

export const getLensPublications = async (
  profileId?: number,
  pubId?: number,
  type?: 'Comment' | 'Post' | 'Mirror',
  limit?: number,
  cursor?: number
) => {
  if (limit && limit > 50) limit = 50
  return (
    await instance.get(`/lens/publications`, {
      params: {
        profileId,
        pubId,
        type,
        limit,
        cursor,
      },
    })
  ).data
}
