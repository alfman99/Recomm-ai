import { Image } from '@mantine/core';

const ImageFrame = (props: any) => {

  return (
    <Image src={props.image_url} alt={"Image :)"}>
      
    </Image>
  )
}

export default ImageFrame;