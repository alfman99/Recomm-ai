import { Tabs } from '@mantine/core'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import ImageFrame from '../../components/ImageFrame'
import Taula from '../../components/RecomendationsTable'

const Processed: NextPage = () => {

  const route = useRouter()

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [imageData, setImageData] = useState<any>(null);
  const [impData, setImpData] = useState<any>(null);

  const image_url = 'https://i.imgur.com/JynJP5l.png'

  const [tabActivo,setActivo] = useState<any>(0);

  const cositas = async () => {
    const response = await fetch(`http://localhost:3000/api/procesa_datos?image_url=${image_url}`);
    const data = await response.json();
    setImageData(data.falta);
    setImpData(data.suggestionsMejora);
    console.log(`http://localhost:3000/api/procesa_datos?image_url=${image_url}`)
    setIsLoading(false);
  }

  

  useEffect(() => {
    cositas();
  }, [])

  return (
    <>
    {console.log("cosas", imageData)}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <ImageFrame image_url={image_url}/>
          <Tabs orientation='horizontal' >
            <Tabs.Tab onClick={() => setActivo('missing')} label="Missing" style={{ color: 'black' }}> {imageData != null ? <Taula data={imageData}/> : null} </Tabs.Tab>
            <Tabs.Tab onClick={() => setActivo('improve')} label="Improvements" style={{ color: 'black' }}> {impData != null ? <Taula data={impData}/> : null} </Tabs.Tab>
          </Tabs>
          
        </>
      )}
    </>
  )
  
}

export default Processed
