import Layout from "@/components/Layout"
import { ThemeProvider } from "@/contexts/ThemeContext"
import { ViewportProvider } from "@/contexts/ViewportContext"
import "@/styles/globals.css"

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <ViewportProvider ssrViewport="lg">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ViewportProvider>
    </ThemeProvider>
  )
}
