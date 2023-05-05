import { IProposal, ISpaceIdList } from './interface'
import { instance } from './request'

export const getProposalInfo = async (
  proposalId: string
): Promise<IProposal | undefined> => {
  return (await instance.get(`proposals/${proposalId}`)).data
}
