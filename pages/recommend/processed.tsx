import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import ImageFrame from '../../components/ImageFrame'
import Taula from '../../components/RecomendationsTable'

const image_url = "https://i.imgur.com/sC36WMV.png"

const Home: NextPage = () => {

  const route = useRouter()

  const { img_url } = route.query

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [imageData, setImageData] = useState<any>(null); 

   useEffect(() => {

    // declare the data fetching function
    const fetchData = async () => {
      const data = await fetch(`/api/procesa_datos?image_url=${img_url}`);
      const json = await data.json();
      setImageData(json)
      setIsLoading(false)
    }

    fetchData()
    .catch(e => {
      console.error(e)
    })

  }, [])

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <ImageFrame image_url={image_url}/>
          {imageData != null ? <Taula data={imageData}/> : null}
        </>
      )}
    </>
  )
  
}

export default Home
