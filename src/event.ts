import { IAddrList, IEvent, IEventList } from './interface'
import { instance } from './request'

export const getEvent = async (id: string): Promise<IEvent> => {
  const event = (await instance.get(`events/${id}`)).data
  if (!event) throw new Error(`can't find event`)
  return event
}

export const getEventList = async (
  name?: string,
  nameIn?: string[],
  limit?: number,
  cursor?: string
): Promise<IEventList> => {
  if (limit && limit > 50) limit = 50
  return (
    await instance.get(`events`, {
      params: {
        name,
        nameIn,
        limit,
        cursor,
      },
    })
  ).data
}

export const getEventAddr = async (
  id: string,
  address?: string,
  limit?: number,
  cursor?: string
): Promise<IAddrList> => {
  if (limit && limit > 50) limit = 50
  return (
    await instance.get(`/events/${id}/addressList`, {
      params: {
        address,
        limit,
        cursor,
      },
    })
  ).data
}
