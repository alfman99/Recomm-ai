import { useEffect, useState } from "react"
import { Image } from '@mantine/core';

const ImageFrame = (props: any) => {

  return (
    <Image src={props.image_url}>
      
    </Image>
  )
}

export default ImageFrame;