
/* Resource model */
interface IBankerCadInfoBitrix {
    phone: string;
    name: string;
    email: string;
    linkedinUrl: string;
    policies: boolean;
    status: string;
    contactAt: string;
}

/* Services Payload & Response models */
interface IPostLeadBankerPayload {
 // bankerInfo: IBankerCadInfoBitrix;
}
interface IPostLeadBankerResponse {
  status: string;
}

/* Service */
interface IBitrixServices {
  postLeadBanker: (payload: IPostLeadBankerPayload) => Promise<AxiosResponse<IPostLeadBankerResponse>>;
}
