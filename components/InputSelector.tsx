import { Button, Center } from '@mantine/core';
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
            <Center style={{ height: '100vh', gap: '1em' }}>
              <Button onClick={() => setOption('file')}>File</Button>
              <Button onClick={() => setOption('camera')}>Webcam</Button>
            </Center>
          </>
        )
      }
    }
  }

  return inputType()
  
}

export default InputSelector
