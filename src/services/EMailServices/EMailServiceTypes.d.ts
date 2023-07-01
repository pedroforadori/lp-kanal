
interface IEMailServices {
  sendEmailBankerLead: (params: ISendEmailBankerLeadParams) => Promise<IDefaultEMailResponse>;
  sendEmailTest: (template: string, destEmail?: string) => Promise<IDefaultEMailResponse>;
}

interface ISendEmailBankerLeadParams {
  bankerEMail: string;
  bankerName: string;
}

interface IDefaultEMailResponse {
  status: string;
}