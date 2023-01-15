import Head from 'next/head'
import Links from "../components/Links";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Links</title>
        <meta name="description" content="My links" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-full">
        <Links/>
      </main>
    </>
  )
}
