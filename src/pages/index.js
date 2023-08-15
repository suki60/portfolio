import Head from 'next/head'

const Home = () => (
  <>
    <Head>
      <title>Home</title>
      <meta name='description' content='Home page' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform'>
      <div className='flex text-xl sm:text-2xl md:text-4xl'>
        <div className='flex flex-col-reverse whitespace-nowrap md:mr-2'>
          <h1>welcome to my</h1>
        </div>
        <div className='mx-2 flex flex-col rounded bg-violet-300 px-1 text-center text-white md:py-1'>
          <div>hello</div>
          <div>world</div>
        </div>
        <div className='flex flex-col whitespace-nowrap lg:ml-2'>
          <h1>i&#39;m francesc altes</h1>
        </div>
      </div>
    </div>
  </>
)

export default Home
