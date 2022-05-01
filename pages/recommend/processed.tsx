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


  const cositas = async () => {
    const response = await fetch(`http://localhost:3000/api/procesa_datos?image_url=${image_url}`);
    const data = await response.json();
    setImageData(data);
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
          <Tabs  variant="pills" orientation='horizontal'>
            <Tabs.Tab label="Mising"> {imageData != null ? <Taula data={imageData}/> : null} </Tabs.Tab>
            <Tabs.Tab label="Improvements"> {imageData != null ? <Taula data={imageData}/> : null} </Tabs.Tab>

          </Tabs>
          
        </>
      )}
    </>
  )
  
}

export default Processed
