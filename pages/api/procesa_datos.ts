// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const { HOST } = process.env;

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {

  const { image_url } = req.query

  const base_url = `${HOST}/api/fetch_datos?image_url=${image_url}`
  const response = await fetch(base_url)
  const json = await response.json()

  res.status(200).json(json);

}
