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
      <nav className='border-b-2'>
        <div className="grid grid-cols-12">
          <a href="#" className="col-span-1 py-7 flex justify-center items-center border-r">
            <Image src="/icons/Options.svg" alt="Options" width={28.5} height={9.5}/>
          </a>
          <a href="#" className="col-span-1 py-7 flex justify-center items-center border-x">
            <Image src="/icons/Logo.svg" alt="Logo" width={31} height={23.5}/>
          </a>
          <ul className="flex justify-start items-center gap-2 flex-row col-span-3 border-x px-4">
            <li>
              <a href="#" className='p-3'>New</a>
            </li>
            <li>
              <a href="#" className='p-3'>Sale</a>
            </li>
            <li>
              <a href="#" className='p-3'>Men</a>
            </li>
            <li>
              <a href="#" className='p-3'>Women</a>
            </li>
          </ul>
          {/* Search */}
          <div className="col-span-4 gap-2 p-3 flex justify-center items-center border-x">
            {/* Heart Logo */}
            <a href="#"><Image src="/icons/Heart.svg" alt="Heart" width={28.5} height={23.5}/></a>
            <span>Search</span>
            </div>
          <div className='col-span-3 flex gap-5 justify-center items-center border-l'>
            <a href="#" className='p-3'><Image src="/icons/Cart.svg" alt="Cart" width={16} height={18}/></a>
            <a href="#" className='p-3'><Image src="/icons/Profile.svg" alt="Profile" width={15.5} height={17.6}/></a>
          </div>
        </div>
      </nav>
      <main >
        <div className="grid grid-cols-12">
          <div className='col-span-9 border-r'>
            <div className=" relative ml-60 mt-9">
              <div className="ml-52 relative">
                {/* blobs */}
                <div className="absolute top-16 -left-16 pl-2">
                  <Image src="/images/BlobLight.svg" alt="Blob1" height={511} width={500.1}/>
                </div>
                <div className="absolute top-16 -left-16 pt-8">
                  <Image src="/images/BlobDark.svg" alt="Blob1" height={470} width={500.6}/>
                </div>

                {/* Main Image */}
                <div className='z-10'>
                  <Image
                    src="/images/Model.png"
                    alt="Model Image"
                    height={665.7}
                    width={324.1}
                  />
                </div>
              </div>
              {/* Text + Button */}
              <div className='absolute top-72 left-0 flex gap-14 justify-center items-center'>
                {/* Text */}
                <span className='text-6xl text-black font-bold'>The Best <br/>and the.</span>
                {/* Button */}
                <Image className='cursor-pointer' src="/icons/Add.svg" alt="Add" width={61.5} height={61}/>
              </div>
              
              {/* Options */}
              <div className='absolute top-36 right-44 flex flex-col gap-y-10'>
                <div className='rounded-2xl shadow-lg bg-white flex gap-2 hover:bg-gray-50 cursor-pointer'>
                  <div className='p-3 flex flex-col justify-around'>
                    <p>Product A</p>
                    <span>$87</span>
                  </div>
                  {/* Block */}
                  <div className='bg-gray-200 opacity-50 h-32 w-28 rounded-r-2xl'></div>
                </div>
                <div className='rounded-2xl shadow-lg bg-white flex gap-2 hover:bg-gray-50 cursor-pointer'>
                  <div className='p-3 flex flex-col justify-around'>
                    <p>Product B</p>
                    <span>$87</span>
                  </div>
                  {/* Block */}
                  <div className='bg-gray-200 opacity-50 h-32 w-28 rounded-r-2xl'></div>
                </div>
              </div>

              {/* Next button */}
              <div className='absolute top-64 right-0 flex gap-10 justify-center items-center transform translate-x-1/2 cursor-pointer hover:scale-105'>
                <Image src="/icons/Next.svg" alt="Next" width={61.5} height={61}/>
              </div>
            </div>
          </div>
          <div className="col-span-3 border-l">
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
