import type { IDetail } from '~/store/detail'
import RXRequest from './index'
import type { IResponseResult } from './index'

export type oppoType = 'oppo' | 'air' | 'watch' | 'tablet'

export const getDetailReq = (type: oppoType) => {
  return RXRequest.get<IResponseResult<IDetail[]>>('/oppoDetail', { type })
}
