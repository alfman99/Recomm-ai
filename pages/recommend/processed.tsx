import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import ImageFrame from '../../components/ImageFrame'
import Taula from '../../components/RecomendationsTable'

const image_url = "https://i.imgur.com/sC36WMV.png"

const Home: NextPage = () => {

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [imageData, setImageData] = useState<any>(null); 

  useEffect(() => {
    setIsLoading(true)
    fetch(`api/procesa_datos?image_url=${image_url}`)
      .then((res) => res.json())
      .then((data) => {
        setImageData(data)
        setIsLoading(false)
      })
  }, [])
  return (
    <>
      <ImageFrame/>
      <Taula data={imageData}/>
    </>
  )
  
}

export default Home
