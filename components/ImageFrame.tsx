import { useEffect, useState } from "react"
import { Image } from '@mantine/core';

const ImageFrame = (props: any) => {

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [imageData, setImageData] = useState<any>(null); 

  useEffect(() => {
    console.log(props.image_url, imageData)
    
  }, [imageData])

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
        <div>
          <Image
            src={props.image_url}
            alt="Panda"/>
        </div>
      )}
    </div>
  )
}

export default ImageFrame;