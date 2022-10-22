import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Qoohoo Assignment</title>
        <meta name="description" content="Qoohoo Assignment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <div className="grid grid-cols-12">
          <a href="#" className="col-span-1">
            Options
            {/* <Image src="/logo.png" alt="Qoohoo" width={100} height={100} /> */}
          </a>
          <a href="#" className="col-span-1">
            Logo
          </a>
          <ul className="flex gap-2 flex-row col-span-5">
            <li>
              <a href="#">New</a>
            </li>
            <li>
              <a href="#">Sale</a>
            </li>
            <li>
              <a href="#">Men</a>
            </li>
            <li>
              <a href="#">Women</a>
            </li>
          </ul>
          {/* Search */}
          <div className="col-span-3 flex flex-row gap-2">
            {/* Heart Logo */}
            <a href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path

                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 7a5 5 0 00-7.78-2.24l-.22.2-.22-.2A5 5 0 003 7c0 3.86 5.13 9 9 9 3.86 0 9-5.13 9-9zm-9 7.2a1 1 0 01-1.4 0l-.6-.6a1 1 0 010-1.4l.6-.6a1 1 0 011.4 0l.6.6a1 1 0 010 1.4l-.6.6z"
                />
              </svg>
            </a>
            <span>Search</span>
            </div>
          <div className='col-span-2 flex gap-3'>
            <a href="#">Cart</a>
            <a href="#">Profile</a>
          </div>
        </div>
      </nav>
      <main>
      </main>
    </div>
  )
}

export default Home
