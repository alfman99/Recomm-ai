import { useEffect, useState } from "react"
import { Image } from '@mantine/core';

const image_url = "https://i.imgur.com/sC36WMV.png"

const ImageFrame = () => {

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [imageData, setImageData] = useState<any>(null); 

  /*useEffect(() => {
    setIsLoading(true)
    fetch(`api/fetch_datos?image_url=${image_url}`)
      .then((res) => res.json())
      .then((data) => {
        setImageData(data)
        setIsLoading(false)
      })
  }, [])*/

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Image
          src={image_url}
          alt="Panda"/>
      )}
    </div>
  )
}

export default ImageFrame
