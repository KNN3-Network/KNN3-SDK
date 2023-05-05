import { getProposalInfo, setAuthKey } from '../src/index'

describe('test Proposal.ts', () => {
  beforeAll(() => {
    setAuthKey('knn3-common-AswT-mcYf')
  })
  it('should return proposal info', async () => {
    let result = await getProposalInfo(
      'qmudr849bdq1b7klfjstseptkcmyv65dost2ry4phbms4j'
    )
    expect(result?.proposalId.toLocaleLowerCase()).toBe(
      'qmudr849bdq1b7klfjstseptkcmyv65dost2ry4phbms4j'
    )

    result = await getProposalInfo(
      'qmudr849bdq1b7klfjstseptkcmyv65dost2ry4phbms4'
    )
    expect(result?.proposalId).toBe(undefined)
  })
})
