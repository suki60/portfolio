import { ViewportProvider } from '@suki60/use-viewport'
import App from 'next/app'
import UAParser from 'ua-parser-js'

import Layout from '~/components/Layout'
import { ThemeProvider } from '~/contexts/ThemeContext'
import '~/styles/globals.css'

const getSSRViewport = userAgent => {
  const ua = UAParser(userAgent)
  const deviceType = ua.device.type

  if (deviceType === 'mobile') return 'xs'

  if (deviceType === 'tablet') return 'sm'

  return 'lg'
}

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider>
    <ViewportProvider ssrViewport={pageProps.ssrViewport}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ViewportProvider>
  </ThemeProvider>
)

MyApp.getInitialProps = async appContext => {
  const props = await App.getInitialProps(appContext)

  const userAgent =
    typeof window !== 'undefined' ? window.navigator.userAgent : appContext.ctx.req.headers['user-agent']

  const ssrViewport = getSSRViewport(userAgent)
  props.pageProps.ssrViewport = ssrViewport

  return { ...props }
}

export default MyApp
