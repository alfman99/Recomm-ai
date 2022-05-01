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
  const { image_url: image_url } = req.query

  const response = await fetch(`${base_url}?image_url=${image_url}`)
  const jsonResponse = await response.json()

  
  if (jsonResponse.error == 'true' && jsonResponse.solutions == undefined) {
    return res.status(500).json(jsonResponse)
  }

  const responseDB = await (await db).all('SELECT *, min(abs(abs(?) - abs(category))) FROM appliance GROUP BY type', jsonResponse.response.solutions.re_condition.score)

  const falta = responseDB.filter(element => {
    if (jsonResponse.response.solutions.re_appliances_v2.detections.findIndex((item: any) => item.label == element.type) == -1) {
      return element
    }
  })

  const responseDBSuggestions = await (await db).all('SELECT *, min(abs(abs(?) - abs(category))) FROM appliance GROUP BY type', jsonResponse.response.solutions.re_condition.score + 2)

  const suggestionsMejora = responseDBSuggestions.filter(element => {
    if (jsonResponse.response.solutions.re_appliances_v2.detections.findIndex((item: any) => item.label == element.type) != -1) {
      return element
    }
  })

  const data = {
    falta,
    suggestionsMejora
  }

  return res.status(200).send(data)

}

/*const getRecommendations = () => {

}*/