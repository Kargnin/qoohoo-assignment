import { useState } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import {motion,LayoutGroup} from 'framer-motion';


const Home: NextPage = () => {
  const [expand, setExpand] = useState(false);
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
        <motion.div className="grid grid-cols-12 relative">
          <LayoutGroup>
            <motion.div layout className={expand?'col-span-12 min-h-screen' :'col-span-9 border-r min-h-screen'}>
              <div className="ml-60 mt-9 relative">
                <div className={expand? 'relative':"ml-52 relative"}>
                  {/* blobs */}
                  <div className={expand?'absolute top-32 -right-8 pl-2 scale-125' :"absolute top-16 -left-16 pl-2"} >
                    <Image src="/images/BlobLight.svg" alt="Blob1" height={511} width={500.1}/>
                  </div>
                  <div className={expand? 'absolute top-28 -right-8 pt-8 scale-125':"absolute top-16 -left-16 pt-8"} >
                    <Image src="/images/BlobDark.svg" alt="Blob1" height={470} width={500.6}/>
                  </div>

                  {/* Main Image */}
                  <div className={expand? 'absolute right-20 top-0' : 'absolute left-0 top-0'}>
                    <Image
                      src="/images/Model.png"
                      alt="Model Image"
                      height={665.7}
                      width={324.1}
                    />
                  </div>
                </div>
                
                
                {/* Options */}
                {!expand && <div className='absolute top-36 right-44 flex flex-col gap-y-10'>
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
                </div>}
                

                {/* Next button */}
                {!expand && <div className='absolute top-64 right-0 flex gap-10 justify-center items-center transform translate-x-1/2 cursor-pointer hover:scale-105'>
                  <Image src="/icons/Next.svg" alt="Next" width={61.5} height={61}/>
                </div>}
              </div>
            </motion.div>
            <motion.div layout className={expand?"col-span-0 border-l" :"col-span-3 border-l"}>
            </motion.div>
          </LayoutGroup>
          {/* Text + Button */}
          <motion.div layout="position" className={expand? 'absolute top-16 left-24 flex flex-col gap-4 justify-center items-start': 'absolute top-72 left-24 flex gap-14 justify-center items-start'}>
            {/* Text */}
            <span className='text-6xl text-black font-bold'>The Best <br/>and the.</span>
            {/* Button */}
            {!expand && <Image className='cursor-pointer' src="/icons/Add.svg" alt="Add" width={61.5} height={61} onClick={() => setExpand(expand=>!expand)} />}
            
            {/* Description */}
            {expand && 
            <div className='text-lg flex flex-col gap-5'>
              <span className='text-5xl'>$67</span>
              <p className='pb-1 w-80 text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nihil!</p>
              {/* Select size */}
              <div className='flex gap-3 flex-col'>
                <span className='font-semibold text-md'>Select Size</span>
                <ul className='flex gap-2'>
                  <li className='h-8 w-8 cursor-pointer rounded-full border-2 flex justify-center items-center text-lg'>S</li>
                  <li className='h-8 w-8 cursor-pointer rounded-full border-2 flex justify-center items-center text-lg'>M</li>
                  <li className='h-8 w-8 cursor-pointer rounded-full border-2 flex justify-center items-center text-lg'>L</li>
                  <li className='pl-4 font-bold cursor-pointer text-gray-400 flex justify-center items-center text-lg'>SIZE GUIDE</li>
                </ul>
              </div>
              {/* Carousal */}
              <ul className='flex gap-3 justify-center items-center'>
                <li className='h-40 w-32 bg-gray-400'></li>
                <li className='h-40 w-32 bg-gray-400'></li>
                <li className='h-40 w-32 bg-gray-400'></li>
                <li className='h-40 w-32 bg-gray-400'></li>
                {/* Right Arrow */}
                <svg className='cursor-pointer' width="30" height="30" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z"/></svg>
              </ul>
            </div>
            }
          </motion.div>
        </motion.div>
      </main>
    </div>
  )
}

export default Home
