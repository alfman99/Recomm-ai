// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {

  const { img_url } = req.query

  const key = process.env.API_KEY
  const base_url = `https://api-us.restb.ai/vision/v2/multipredict?client_key=${key}&model_id=re_condition&image_url=${img_url}`

  const response = await fetch(base_url)
  const json = await response.json()
  
  res.status(200).json(json);

}
