import type { NextPage } from 'next'
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
      <input type="file" onChange={e => setImage(e.target.files!['0'])} />
      <button onClick={(e) => onSubmit(e)}>Upload</button>
    </>
  )
}

export default Home
