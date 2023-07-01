// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { Service, EMailService } from '../../../services';
import {
  BITRIX_FIELD_CPF,
  BITRIX_FIELD_EMAIL,
  BITRIX_FIELD_LASTNAME,
  BITRIX_FIELD_LINKEDIN,
  BITRIX_FIELD_NAME,
  BITRIX_FIELD_OPENED,
  BITRIX_FIELD_PHONE,
  BITRIX_FIELD_STATUS_ID,
  BITRIX_FIELD_TITLE,
  DEFAULT_CARD_NAME,
  MARKETPLACE_BACKEND_HOST,
} from '../../../../constants';

const BASE_URL = `https://b24-lp6fiq.bitrix24.com.br`;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log(req.headers.origin, 'aq');
  

  if (req.headers.origin?.includes('kanal.com.br')) {
    res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
    );
  }

  switch (req.method) {
    case 'GET':
      break;
    case 'POST':
      // return handlePOSTLead(req, res);
      debugger
      return handleNewPOST(req, res);
      
    case 'OPTIONS':
      if (req.headers.origin?.includes('kanal.com.br')) return res.status(200).json({});
    default:
      return res.status(405).json('Method not allowed');
  }
}

function handlePOSTLead(req: NextApiRequest, res: NextApiResponse<IPostLeadBankerResponse>) {
  const { bankerInfo }: any = req.body;

  const lastName = bankerInfo.name.split(' ')?.slice(-1)?.pop();

  const newCard: any = {
    TITLE: `${DEFAULT_CARD_NAME} ${bankerInfo.name}`,
    NAME: bankerInfo.name,
    EMAIL: [{ VALUE: bankerInfo.email, VALUE_TYPE: 'WORK' }],
    PHONE: [{ VALUE: '55 ' + bankerInfo.tel, VALUE_TYPE: 'WORK' }],
    WEB: bankerInfo.linkedinURL,
    STATUS_ID: 'NEW',
    OPENED: 'Y',
  };

  const queryFields = `
fields[${BITRIX_FIELD_TITLE}]=${encodeURIComponent(newCard.TITLE)}&
fields[${BITRIX_FIELD_NAME}]=${encodeURIComponent(newCard.NAME)}&
fields[${BITRIX_FIELD_LASTNAME}]=${encodeURIComponent(newCard.LAST_NAME)}&
fields[${BITRIX_FIELD_CPF}]=${encodeURIComponent(newCard.CPF)}&
fields[${BITRIX_FIELD_EMAIL}][0][VALUE]=${encodeURIComponent(newCard.EMAIL[0].VALUE)}&
fields[${BITRIX_FIELD_EMAIL}][0][VALUE_TYPE]=${encodeURIComponent(newCard.EMAIL[0].VALUE_TYPE)}&
fields[${BITRIX_FIELD_PHONE}][0][VALUE]=${encodeURIComponent(newCard.PHONE[0].VALUE)}&
fields[${BITRIX_FIELD_PHONE}][0][VALUE_TYPE]=${encodeURIComponent(newCard.PHONE[0].VALUE_TYPE)}&
fields[${BITRIX_FIELD_LINKEDIN}]=${encodeURIComponent(newCard.WEB)}&
fields[${BITRIX_FIELD_STATUS_ID}]=${encodeURIComponent(newCard.STATUS_ID)}&
fields[${BITRIX_FIELD_OPENED}]=${encodeURIComponent(newCard.OPENED)}&
params[REGISTER_SONET_EVENT]=Y`.replace(/\n/g, '');

  const url = `${BASE_URL}/rest/5/${process.env.BITRIX_POST_LEAD_KEY}/crm.lead.add.json?${queryFields}`;

  return Service.post(url)
    .then((response) => {
      //Send email
      EMailService.sendEmailBankerLead({
        bankerEMail: bankerInfo.email,
        bankerName: bankerInfo.name,
      });
      // .then((r) => console.log(r), (e) => console.log(e));

      return res.status(200).json({ status: 'Ok' });
    })
    .catch((error) => {
      console.log(error);
      return res.status(error.response.status).json(error.response.data);
    });
}

function handleNewPOST(req: NextApiRequest, res: NextApiResponse<IPostLeadBankerResponse>) {
  const { bankerInfo }: any = req.body;
  debugger

  const lastName = bankerInfo.name.split(' ')?.slice(-1)?.pop();

  const newCard: any = {
    TITLE: `${DEFAULT_CARD_NAME} ${bankerInfo.name}`,
    NAME: bankerInfo.name,
    EMAIL: [{ VALUE: bankerInfo.email, VALUE_TYPE: 'WORK' }],
    PHONE: [{ VALUE: '55 ' + bankerInfo.tel, VALUE_TYPE: 'WORK' }],
    WEB: bankerInfo.linkedinURL,
    STATUS_ID: 'NEW',
    OPENED: 'Y',
  };

  const url = `https://marketplace-api-v2.kanal.com.br/public/api/bitrix/banker-lead`;

  return Service.post(url, newCard, {
    headers: {
      Bearer: process.env.MARKETPLACE_BACKEND_BEARER!,
    },
  })
    .then((resp) => {
      return res.status(200).json({ status: 'Ok' });
    })
    .catch((error) => {
      console.log(error);
      return res.status(error?.response?.status || 500).json(error?.response?.data);
    });
}
