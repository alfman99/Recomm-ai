// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

import sqlite3 from 'sqlite3';
import { open } from 'sqlite';


export interface Appliance {
  id: number,
  type: string,
  name: string,
  price: number,
  category: number
}

const { HOST } = process.env

// Database
const db = open({
  filename: 'script/recomm-ai.db',
  driver: sqlite3.Database
})

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {

  const base_url = `${HOST}/api/fetch_datos`
  const { image_url } = req.query

  const promises = []

  promises.push(fetch(`${base_url}?image_url=${image_url}`))
  promises.push((await db).all('SELECT * FROM appliance'))

  const [response, appliances] = await Promise.all(promises)

  const json = await ((response) as Response).json()

  // put every json on same object
  const data = {
    ...json,
    appliances
  }

  res.status(200).json(data);

}
