
/* Resource model */
interface IBankerCadInfoBitrix {
  tel: string;
  cpf: string;
  name: string;
  email: string;
  linkedinURL: string;
}

/* Services Payload & Response models */
interface IPostLeadBankerPayload {
  bankerInfo: IBankerCadInfoBitrix;
}
interface IPostLeadBankerResponse {
  status: string;
}

/* Service */
interface IBitrixServices {
  postLeadBanker: (payload: IPostLeadBankerPayload) => Promise<AxiosResponse<IPostLeadBankerResponse>>;
}
