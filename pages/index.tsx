import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tanmay Ekanath Patil</title>
      </Head>
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
    </main>
    </div>
  )
}
