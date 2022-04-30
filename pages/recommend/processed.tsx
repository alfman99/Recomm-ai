import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import ImageFrame from '../../components/ImageFrame'
import Taula from '../../components/RecomendationsTable'

const image_url = "https://i.imgur.com/sC36WMV.png"

const Home: NextPage = () => {

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [imageData, setImageData] = useState<any>(null); 

   useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      const data = await fetch(`/api/procesa_datos?image_url=${image_url}`);
      const json = await data.json()
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
          <Taula data={imageData}/>
        </>
      )}
    </>
  )
  
}

export default Home
