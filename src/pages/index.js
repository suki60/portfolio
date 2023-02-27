import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="h-screen flex justify-center items-center">
          <div className="flex text-xl sm:text-2xl md:text-4xl">
            <div className="flex flex-col-reverse md:mr-2">
              <h1>welcome to my</h1>
            </div>
            <div className="flex flex-col mx-2 px-1 text-center bg-black text-white">
              <div>hello</div>
              <div>world</div>
            </div>
            <div className="flex flex-col lg:ml-2">
              <h1>i&#39;m francesc altes</h1>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
