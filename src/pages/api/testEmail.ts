// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { EMailService } from 'services';


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  return testEmail(req, res);
}

interface IPostTestEmail {
  emailDest: string
  emailBody: string
}

function testEmail(req: NextApiRequest, res: NextApiResponse<IPostTestEmail>) {
  
  const { emailBody, emailDest }: IPostTestEmail = JSON.parse(req.body);

  if(!emailDest) return Promise.reject('Invalid params')

  return EMailService.sendEmailTest(emailBody, emailDest).finally(() => res.end());
}
