import { Service } from '../../services';
import { AxiosResponse } from 'axios';


function postLeadBanker(payload: IPostLeadBankerPayload): Promise<AxiosResponse<IPostLeadBankerResponse>> {
  return Service.post<IBankerCadInfoBitrix, AxiosResponse<IPostLeadBankerResponse>>('/bitrix/lead', payload)
}


const BitrixServices: IBitrixServices = {
  postLeadBanker,
}

export default BitrixServices;