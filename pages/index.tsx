import { Container } from '@mantine/core'
import type { NextPage } from 'next'
import ImageFrame from '../components/ImageFrame'

const Home: NextPage = () => {
  return (
    <>
      <Container>
        <ImageFrame />
      </Container>
    </>
  )
}

export default Home
