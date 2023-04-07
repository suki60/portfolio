import Layout from "@/components/Layout"
import { ViewportProvider } from "@/contexts/ViewportContext"
import "@/styles/globals.css"

export default function App({ Component, pageProps }) {
  return (
    <ViewportProvider ssrViewport="lg">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ViewportProvider>
  )
}
