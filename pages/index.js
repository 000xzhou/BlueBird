import Head from 'next/head'

export default function HomePage() {
  // redires to /home if login.
  return (
    // classname don't effect nav and sidebar
    <div >
      <Head>
        <title>Blue Bird</title>
        <meta name="description" content="Clone of the blue bird I meant twitter" />
        <link rel="icon" href="/Twitter-logo.svg" />
      </Head>
      <h1>Go to http://localhost:3000//home</h1>
      <p>We going to be redirecting them to /home when they first enter site (like how the real twitter does)</p>
    </div >
  )
}
