export interface IAddress {
  address: string
  ens: string[]
  name: string
}

export interface IBit {
  addr: string
  account: string
  algorithmId: number
  chain: string
  outpoint: string
}

export interface IVote {
  address: string
  spaceId: string
  count: number
}

export interface ISpaceId {
  name: string
  address: string
}

export interface INft {
  contract: string
  description: string
  externalurl: string
  imageurl: string
  name: string
  network: string
  primaryInterface: string
  symbol: string
}

export interface ILens {
  profileId: number
  creator: string
  to: string
  handle: string
  imageURI: string
  followModule: string
  metadata: string
  address: string
}

export interface IToken {
  contract: string
  name: string
  symbol: string
  network: string
  decimal: number
}

export interface IAddressHoldCount {
  address: string
  ens: string[]
  name: string
  count: number
}

export interface IAvatar {
  avatar: string
  platform: string
  identity: string
}

export interface IEvent {
  id: string
  name: string
  imageUrl: string
}

export interface ITwitter {
  uid: string
  handle: string
  name: string
}

export interface IAddrList {
  list: IAddress[]
  cursor: string | null
}

export interface IAddrHoldCountList {
  list: IAddressHoldCount[]
  cursor: string | null
}

export interface INftList {
  list: INft[]
  cursor: string | null
}

export interface ISpaceIdList {
  list: ISpaceId[]
  cursor: string | null
}

export interface ITokenList {
  list: IToken[]
  cursor: string | null
}

export interface IEventList {
  list: IEvent[]
  cursor: string | null
}

export interface IAvatarList {
  list: IAvatar[]
  cursor: string | null
}

export interface ITwitterList {
  list: IEvent[]
  cursor: string | null
}

export interface IBitList {
  list: IBit[]
  cursor: string | null
}

export interface IAddrAttendEventsList {
  list: IEvent[]
  cursor: string | null
}

export interface IBoundTwitters {
  list: ITwitter[]
  cursor: string | null
}

export interface IBoundAvatars {
  list: IAvatar[]
  cursor: string | null
}

export interface IVotes {
  list: IVote[]
  cursor: string | null
}

export interface IBoundSpaceIds {
  list: ISpaceId[]
  cursor: string | null
}

export interface IBoundLens {
  list: ILens[]
  cursor: string | null
}

export interface IGetAddress {
  address?: string
}

export interface ITokenHold {
  contract: string
  name: string
  symbol: string
  network: string
  decimal: number
  count: number
}

export interface ITokenHoldList {
  list: ITokenHold[]
  cursor: string | null
}

export interface INftHold {
  contract: string
  description: string
  externalurl: string
  imageurl: string
  name: string
  network: string
  primaryInterface: string
  symbol: string
  count: number
}

export interface INftHoldList {
  list: INftHold[]
  cursor: string | null
}

export interface ILensList {
  list: ILens[]
  cursor: string | null
}
