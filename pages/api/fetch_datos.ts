// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {

  const { image_url } = req.query

  const key = process.env.API_KEY
  const base_url = `https://api-us.restb.ai/vision/v2/multipredict?client_key=${key}&model_id=re_condition,re_roomtype_global_v2,re_appliances_v2,re_features_v3,re_kitchen_finishes&image_url=${image_url}`

  const response = await fetch(base_url)
  const json = await response.json()
  
  res.status(200).json(json);

}
