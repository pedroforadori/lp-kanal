

interface IBitrixLeadMandatoryFields {
  STATUS_ID: 'NEW';
  OPENED: 'Y';
}

interface IBitrixLeadFields extends IBitrixLeadMandatoryFields {
  TITLE: string;
  NAME: string;
  LAST_NAME: string;
  CPF: string;
  EMAIL: IBitrixLeadEMailField[];
  PHONE: IBitrixLeadPhoneField[];
  WEB: string;
}

interface IBitrixLeadPhoneField {
  VALUE: string;
  VALUE_TYPE: 'WORK';
}

interface IBitrixLeadEMailField {
  VALUE: string;
  VALUE_TYPE: 'WORK';
}

interface IBitrixLeadParams {
  REGISTER_SONET_EVENT: 'Y';
}
