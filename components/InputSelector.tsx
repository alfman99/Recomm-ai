import { Button, Center, Input, InputWrapper } from '@mantine/core';
import { useState } from 'react'
import Photo from './Photo'
import { ChevronsLeft }  from 'tabler-icons-react'
import { useRouter } from "next/router";
import Link from 'next/link';


const InputSelector = () => {

  const [option, setOption] = useState<string>('');
  const [url, setUrl] = useState<string>('');
  const [imageState, setImageState] = useState<boolean>(false); // True when file is selected

  const handleProcessImage = () => {
    
    if (!imageState) {
      return;
    }

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
              <input type="text" style={{ color: 'black' }} value={url} onChange={(e) => setUrl(e.target.value)} />
            </Center>
            <Center style={{ height: '25vh', gap: '1em' }}>
              <Link href={{ pathname: '/recommend/processed', query: { img_url: url } }} passHref={true}>
                <Button size='xl'>Upload</Button>
              </Link>
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
