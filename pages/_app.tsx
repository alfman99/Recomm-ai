import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Container, MantineProvider } from '@mantine/core'

const { HOST } = process.env

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        fontFamily: 'Verdana, Geneva, sans-serif',
        colorScheme: 'light',
        primaryColor: 'green',
      }}
    >
      <Container style={{ backgroundImage: `url("${HOST}/background.svg")`, backgroundSize: 'cover' }}>
        <Component {...pageProps} />
      </Container>
    </MantineProvider>
  )

  
}

export default MyApp
