import {
  IAddrAttendEventsList,
  IAddress,
  IAddrList,
  IBitList,
  IBoundAvatars,
  IBoundHashkeys,
  IBoundLens,
  IBoundSpaceIds,
  IBoundTwitters,
  INftHoldList,
  ITokenHoldList,
  IVotes,
} from './interface'
import { instance } from './request'

export const getAddr = async (address: string): Promise<IAddress> => {
  const addr = (await instance.get(`addresses/${address}`)).data
  if (!addr) throw new Error(`can't find address`)
  return addr
}

export const getAddrList = async (
  addressIn?: string[],
  limit?: number,
  cursor?: string
): Promise<IAddrList> => {
  if (limit && limit > 50) limit = 50
  return (
    await instance.get(`addresses`, {
      params: {
        addressIn,
        limit,
        cursor,
      },
    })
  ).data
}

export const attendEvents = async (
  address: string,
  eventName?: string,
  limit?: number,
  cursor?: string
): Promise<IAddrAttendEventsList> => {
  if (limit && limit > 50) limit = 50
  return (
    await instance.get(`addresses/attendEvents`, {
      params: {
        address: address.toLocaleLowerCase(),
        eventName,
        limit,
        cursor,
      },
    })
  ).data
}

export const boundTwitter = async (
  address: string,
  limit?: number,
  cursor?: string
): Promise<IBoundTwitters> => {
  if (limit && limit > 50) limit = 50
  return (
    await instance.get(`addresses/boundTwitters`, {
      params: {
        address: address.toLocaleLowerCase(),
        limit,
        cursor,
      },
    })
  ).data
}

export const boundAvatars = async (
  address: string,
  limit?: number,
  cursor?: string
): Promise<IBoundAvatars> => {
  if (limit && limit > 50) limit = 50
  return (
    await instance.get(`addresses/boundAvatars`, {
      params: {
        address: address.toLocaleLowerCase(),
        limit,
        cursor,
      },
    })
  ).data
}

export const votes = async (
  address: string,
  limit?: number,
  cursor?: string
): Promise<IVotes> => {
  if (limit && limit > 50) limit = 50
  return (
    await instance.get(`addresses/votes`, {
      params: {
        address: address.toLocaleLowerCase(),
        limit,
        cursor,
      },
    })
  ).data
}

export const holdNfts = async (
  address: string,
  network: 'ethereum' | 'polygon',
  limit?: number,
  cursor?: string
): Promise<INftHoldList> => {
  if (limit && limit > 50) limit = 50
  return (
    await instance.get(`addresses/holdNfts`, {
      params: {
        address: address.toLocaleLowerCase(),
        network: network.toLocaleLowerCase(),
        limit,
        cursor,
      },
    })
  ).data
}

export const holdTokens = async (
  address: string,
  network: 'ethereum' | 'polygon',
  limit?: number,
  cursor?: string
): Promise<ITokenHoldList> => {
  if (limit && limit > 50) limit = 50
  return (
    await instance.get(`addresses/holdTokens`, {
      params: {
        address: address.toLocaleLowerCase(),
        network: network.toLocaleLowerCase(),
        limit,
        cursor,
      },
    })
  ).data
}

export const boundLens = async (
  address: string,
  limit?: number,
  cursor?: string
): Promise<IBoundLens> => {
  if (limit && limit > 50) limit = 50
  return (
    await instance.get(`addresses/boundLens`, {
      params: {
        address: address.toLocaleLowerCase(),
        limit,
        cursor,
      },
    })
  ).data
}

export const boundHashkeys = async (
  address: string,
  limit?: number,
  cursor?: string
): Promise<IBoundHashkeys> => {
  if (limit && limit > 50) limit = 50
  return (
    await instance.get(`addresses/boundHashkeys`, {
      params: {
        address: address.toLocaleLowerCase(),
        limit,
        cursor,
      },
    })
  ).data
}

export const boundBits = async (
  address: string,
  limit?: number,
  cursor?: string
): Promise<IBitList> => {
  if (limit && limit > 50) limit = 50
  return (
    await instance.get(`addresses/boundBits`, {
      params: {
        address: address.toLocaleLowerCase(),
        limit,
        cursor,
      },
    })
  ).data
}

export const boundSpaceIds = async (
  address: string,
  limit?: number,
  cursor?: string
): Promise<IBoundSpaceIds> => {
  if (limit && limit > 50) limit = 50
  return (
    await instance.get(`addresses/boundSpaceIds`, {
      params: {
        address: address.toLocaleLowerCase(),
        limit,
        cursor,
      },
    })
  ).data
}

export const isVote = async (
  address: string,
  proposalId: string
): Promise<boolean> => {
  if (!address || !proposalId) throw new Error('miss address or proposalId')
  return (
    await instance.get(`addresses/isVoteOnProposalId`, {
      params: {
        address: address.toLocaleLowerCase(),
        proposalId: proposalId.toLocaleLowerCase(),
      },
    })
  ).data as boolean
}
