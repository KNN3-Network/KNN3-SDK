import {
  IAddrList,
  IBoundLens,
  ILensRank,
  ILensRate,
  ILensRevenueByAddress,
  ILensRevenueByMirror,
  ILensRevenueByPub,
  ILensRevenueByPubByDay,
  ILensRevenueTendencyByAddress,
  ILensRevenueTop10CollectorsByAddress,
} from './interface'
import { instance } from './request'

export const getLensList = async (
  handle?: string,
  profileId?: string,
  limit?: number,
  cursor?: string
): Promise<IBoundLens> => {
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

export const getLensRate = async (profileId: number): Promise<ILensRate> => {
  return (await instance.get(`/lens/level/${profileId}`)).data
}

export const getLensRank = async (): Promise<ILensRank[]> => {
  return (await instance.get(`/lens/rank`)).data
}

export const getLensRevenueByAddress = async (
  address: string,
  type?: 'total' | 'orgin' | 'referral' | 'split',
  timeStart?: number,
  timeEnd?: number
): Promise<ILensRevenueByAddress[]> => {
  return (
    await instance.get(`/lens/revenue/${address}`, {
      params: { type, timeStart, timeEnd },
    })
  ).data
}

export const getLensRevenueByMirror = async (
  profileId: number,
  pubId: number,
  timeStart?: number,
  timeEnd?: number
): Promise<ILensRevenueByMirror[]> => {
  return (
    await instance.get(`/lens/revenue/mirror/${profileId}/${pubId}`, {
      params: { timeStart, timeEnd },
    })
  ).data
}

export const getLensRevenueByPub = async (
  profileId: number,
  pubId: number,
  timeStart?: number,
  timeEnd?: number
): Promise<ILensRevenueByPub[]> => {
  return (
    await instance.get(`/lens/revenue/singlePub/${profileId}/${pubId}`, {
      params: { timeStart, timeEnd },
    })
  ).data
}

export const getLensRevenueByPubByDay = async (
  profileId: number,
  pubId: number,
  timeStart?: number,
  timeEnd?: number
): Promise<ILensRevenueByPubByDay[]> => {
  return (
    await instance.get(`/lens/revenue/singlePub/byDay/${profileId}/${pubId}`, {
      params: { timeStart, timeEnd },
    })
  ).data
}

export const getLensRevenueTendencyByAddress = async (
  address: string,
  timeStart?: number,
  timeEnd?: number
): Promise<ILensRevenueTendencyByAddress[]> => {
  return (
    await instance.get(`/lens/revenue/tendency/${address}`, {
      params: { timeStart, timeEnd },
    })
  ).data
}

export const getLensRevenueTop10CollectorsByAddress = async (
  address: string,
  timeStart?: number,
  timeEnd?: number
): Promise<ILensRevenueTop10CollectorsByAddress[]> => {
  return (
    await instance.get(`/lens/revenue/top10/collectors/${address}`, {
      params: { timeStart, timeEnd },
    })
  ).data
}
