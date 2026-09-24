import { headers } from 'next/headers'
import Script from 'next/script'

import Providers from './providers'
import Layout from '~/components/Layout'
import { inter, mono } from '~/fonts'
import '~/styles/globals.css'

export const metadata = {
  title: 'francesc altes',
  description: 'welcome to my world — i\'m francesc altes',
  icons: {
    icon: '/favicon.ico',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

const RootLayout = async ({ children }) => {
  const headerList = await headers()
  const userAgent = headerList.get('user-agent') || ''

  return (
    <html lang='en'>
      <body className={`${inter.variable} ${mono.variable}`}>
        <Providers userAgent={userAgent}>
          <Layout>{children}</Layout>
        </Providers>
        <Script id='gtm-script' strategy='afterInteractive'>
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KSXH929M');
          `}
        </Script>
      </body>
    </html>
  )
}

export default RootLayout
