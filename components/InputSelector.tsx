import { Button } from '@mantine/core';
import { useState } from 'react'
import Photo from './Photo'

const InputSelector = () => {

  const [option, setOption] = useState<string>('');

  const [imageState, setImageState] = useState<boolean>(false); // True when file is selected

  const handleProcessImage = () => {
    
    if (!imageState) {
      console.log('no')
      return;
    }

    console.log('image')

  }

  const inputType = () => {
    switch (option) {
      case 'file': {
        return (
          <>
            <Button onClick={() => setOption('')}>Back</Button>
            <input type="file" accept="image/*" onChange={() => setImageState(true)} />
            <Button onClick={() => handleProcessImage()}>Upload</Button>
          </>
        )
      }
      case 'camera': {
        return(
          <>
            <Button onClick={() => setOption('')}>Back</Button>
            <Photo />
          </>
        ) 
      }
      default: {
        return (
          <>
            <Button onClick={() => setOption('file')}>File</Button>
            <Button onClick={() => setOption('camera')}>Webcam</Button>
          </>
        )
      }
    }
  }

  return inputType()
  
}

export default InputSelector
