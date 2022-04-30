import type { NextPage } from 'next'
import Photo from '../components/Photo'

const Home: NextPage = () => {
  return (
    <>
      <div>
        <input type="file" accept="image/*" />
        <Photo />
      </div>
    </>
  )
}

export default Home
