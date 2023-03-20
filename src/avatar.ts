import { IAddrList, IAvatarList, ITwitterList } from './interface'
import { instance } from './request'

export const getAvatarList = async (
  avatar?: string,
  limit?: number,
  cursor?: string
): Promise<IAvatarList> => {
  if (limit && limit > 50) limit = 50
  return (
    await instance.get(`avatars`, {
      params: {
        avatar,
        limit,
        cursor,
      },
    })
  ).data
}

export const getAvatarBindAddr = async (
  avatar: string,
  address?: string,
  limit?: number,
  cursor?: string
): Promise<IAddrList> => {
  if (limit && limit > 50) limit = 50
  return (
    await instance.get(`/avatars/${avatar}/bindAddress`, {
      params: {
        address,
        limit,
        cursor,
      },
    })
  ).data
}

export const getAvatarBindTwitter = async (
  avatar: string,
  limit?: number,
  cursor?: string
): Promise<ITwitterList> => {
  if (limit && limit > 50) limit = 50
  return (
    await instance.get(`/avatars/${avatar}/bindTwitter`, {
      params: {
        limit,
        cursor,
      },
    })
  ).data
}
