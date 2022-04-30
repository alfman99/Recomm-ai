import { Button, Center } from '@mantine/core'
import type { NextPage } from 'next'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const Home: NextPage = () => {

  const [image, setImage] = useState<any>(null)

  useEffect(() => {
    console.log(image)
  }, [image])

  const onSubmit = async (event: any) => {
    event.preventDefault()

    const body = new FormData();

    body.append('file', image)

    const response = await fetch("/api/upload", {
      method: "POST",
      body
    })
    const json = await response.json()
    console.log(json)
  }

  return (
    <>
    <div style={{ display: 'flex', bottom: '5em', flexDirection: 'column', alignItems: 'center', placeContent: 'center', height: '100vh', alignContent: 'center', justifyContent: 'space-around' }}>
      <Center>
        <h1>Recomm-ai</h1>
      </Center>
      
      <Center>
        <Link href={'/recommend'} passHref={true} >
          <Button className='pulse-button'>Recommend me!</Button>
        </Link>
      </Center>
    </div>
    </>
  )
}

export default Home
