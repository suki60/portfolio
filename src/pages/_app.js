import App from 'next/app'
import Script from 'next/script'
import UAParser from 'ua-parser-js'

import Layout from '~/components/Layout'
import { ThemeProvider } from '~/contexts/ThemeContext'
import { ViewportProvider } from '~/contexts/ViewportContext'
import '~/styles/globals.css'

const getSSRViewport = userAgent => {
  const ua = UAParser(userAgent)
  const deviceType = ua.device.type

  if (deviceType === 'mobile') return 'xs'

  if (deviceType === 'tablet') return 'sm'

  return 'lg'
}

const MyApp = ({ Component, pageProps }) => (
  <>
    {/* Google tag (gtag.js) */}
    <Script async src='https://www.googletagmanager.com/gtag/js?id=G-2CZZ5HS9WC' />
    <Script strategy='afterInteractive' id='gtag'>
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-2CZZ5HS9WC');
      `}
    </Script>
    <ThemeProvider>
      <ViewportProvider ssrViewport={pageProps.ssrViewport}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ViewportProvider>
    </ThemeProvider>
  </>
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
