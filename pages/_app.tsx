import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Container, MantineProvider } from '@mantine/core'

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
      <Container>
        <Component {...pageProps} />
      </Container>
    </MantineProvider>
  )

  
}

export default MyApp
