import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import BaseStyles from '../components/base-styles'
import theme from '../theme/theme'

function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <title>Delivery</title>
      </Head>
      <BaseStyles theme={{}} />
      <>
        <Component {...pageProps} />
        <div id="page-portal" />
      </>
    </ThemeProvider>
  )
}

export default App