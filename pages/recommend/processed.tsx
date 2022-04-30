import type { NextPage } from 'next'
import { useState } from 'react'
import ImageFrame from '../../components/ImageFrame'
import Taula from '../../components/RecomendationsTable'

const Home: NextPage = () => {

  const [loading, setLoading] = useState<boolean>(true);

  return (
    <>
      <ImageFrame />
      <Taula />
    </>
  )
  
}

export default Home
