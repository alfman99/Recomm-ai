import { Button, Center, Input, InputWrapper } from '@mantine/core';
import { useState } from 'react'
import Photo from './Photo'
import { ChevronsLeft }  from 'tabler-icons-react'

const InputSelector = () => {

  const [option, setOption] = useState<string>('');

  const [imageState, setImageState] = useState<boolean>(false); // True when file is selected

  const handleProcessImage = () => {
    
    if (!imageState) {
      console.log('no')
      return;
    }

   // console.log('lkfj')

  }

  const inputType = () => {
    switch (option) {
      case 'file': {
        return (
          <>
            <Center style={{width: '6vh'}}>
              <Button leftIcon={<ChevronsLeft/>} onClick={() => setOption('') }> Back</Button>
            </Center>
              <Center style={{ height: '75vh' }}>              
              <Input
       type="file" accept="image/*" onChange={() => setImageState(true)}
    />
              </Center>
              <Center style={{ height: '25vh', gap: '1em' }}>
                <Button size='xl' onClick={() => handleProcessImage()}>Upload</Button>
              </Center>

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
