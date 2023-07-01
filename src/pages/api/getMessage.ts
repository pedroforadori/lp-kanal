// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse<string>) {
  res.status(200).json('Funcionou!! Essa era a mensagem que estavas a espera, certo?')
}
