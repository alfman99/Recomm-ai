import { Button } from '@mantine/core'
import type { NextPage } from 'next'
import Link from 'next/link'
import { ChangeEvent, useEffect, useState } from 'react'

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
      <h1>Recomm-ai</h1>
      <Link href={'recommend'} passHref={true} >
        <Button>Recommend me!</Button>
      </Link>
    </>
  )
}

export default Home
