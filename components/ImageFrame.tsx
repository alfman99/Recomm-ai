import { useState } from "react"
import { Container, Image } from '@mantine/core';

const url_image = "https://www.lovikcocinamoderna.com/wp-content/uploads/2020/04/pack-sorprendente-cocina-laminada-img.jpg"

const ImageFrame = () => {

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [imageData, setImageData] = useState<any>(null); 

  /*useEffect(() => {
    setIsLoading(true)
    fetch(`api/fetchTipoHabitacion?image_url=${url_image}`)
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
          src={url_image}
          alt="Panda"/>
      )}
    </div>
  )
}

export default ImageFrame
