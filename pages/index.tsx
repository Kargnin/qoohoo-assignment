import { useState } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import {motion,LayoutGroup} from 'framer-motion';

const variantsModelImage = {
  slideIn: { x: [200,0], opacity: [0,1], transition: {duration: 0.6} },
}


const Home: NextPage = () => {
  const [expand, setExpand] = useState(false);
  const [size, setSize] = useState('S');
  const [imageSelected, setImageSelected] = useState(-1);

  const [accessible, setAccessible] = useState(false);

  if(!accessible)
    return (
      <div className='max-h-screen overflow-hidden'>
        <Head>
          <title>Qoohoo Assignment</title>
          <meta name="description" content="Qoohoo Assignment" />
          <link rel="icon" href="/favicon.ico" />
          
        </Head>
        <nav className='border-b-2' aria-roledescription='Navigation Bar'>
          <div className="grid grid-cols-12">
            <a href="#" className="col-span-1 py-5 flex justify-center items-center border-r">
              <Image src="/icons/Options.svg" alt="Options" width={28.5} height={9.5}/>
            </a>
            <a href="#" className="col-span-1 py-5 flex justify-center items-center border-x">
              <Image src="/icons/Logo.svg" alt="Logo" width={31} height={23.5}/>
            </a>
            <ul className="flex justify-start items-center gap-2 flex-row col-span-3 border-x px-4">
              <li>
                <a href="#" className='p-3 font-semibold'>New</a>
              </li>
              <li>
                <a href="#" className='p-3 font-semibold'>Sale</a>
              </li>
              <li>
                <a href="#" className='p-3 font-semibold'>Men</a>
              </li>
              <li>
                <a href="#" className='p-3 font-semibold'>Women</a>
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
          <motion.div className="grid grid-cols-12 relative" onClick={(event)=>{
            // Prevents the click event from bubbling up to the parent
            event.stopPropagation();
            if(expand){
              setExpand(false);
              setImageSelected(-1);
            }
          }}>
            <LayoutGroup>
              <motion.div layout className={expand?'col-span-12 min-h-screen' :'col-span-9 border-r min-h-screen'}>
                <div className="ml-72 mt-9 relative">
                  <div className={expand? 'relative':"ml-52 relative"}>
                    {/* blobs */}
                    <div className={expand?'absolute top-32 right-1 pl-2 scale-125' :"absolute top-16 -left-16 pl-2"} >
                      <Image src="/images/BlobLight.svg" alt="Blob1" height={511} width={500.1}/>
                    </div>
                    <div className={expand? 'absolute top-28 right-1 pt-8 scale-125':"absolute top-16 -left-16 pt-8"} >
                      <Image src="/images/BlobDark.svg" alt="Blob1" height={470} width={500.6}/>
                    </div>

                    {/* Main Image */}
                    <motion.div key={imageSelected} className={expand? 'absolute right-44 -top-6' : 'absolute left-0 -top-6'} animate={imageSelected != -1 ? "slideIn" : ""} variants={variantsModelImage} >
                      <Image 
                        src="/images/Model.png"
                        alt="Model Image"
                        height={665.7*1.07}
                        width={324.1*1.07}
                      />
                    </motion.div>
                  </div>
                  
                  
                  {/* Options */}
                  {!expand && <div className='absolute top-36 right-36 flex flex-col gap-y-10'>
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
              <motion.div layout className={expand?"col-span-0 border-l" :" flex justify-center items-center col-span-3 border-l bg-gray-100"}>
              </motion.div>
            </LayoutGroup>
            {/* Text + Button */}
            <motion.div layout="position" className={expand? 'absolute top-12 left-56 flex flex-col gap-4 justify-center items-start': 'absolute top-80 left-56 flex gap-14 justify-center items-center'}>
              {/* Text */}
              <span className='text-6xl text-black font-bold w-80 leading-normal'>Tied Green V-Neck Shirt</span>
              {/* Button */}
              {!expand && 
              <button title='More Details' onClick={() => setExpand(expand=>!expand)}>
                <Image className='cursor-pointer' src="/icons/Add.svg" alt="More Details" width={61.5} height={61}  />
              </button>
              }
              
              {/* Description */}
              {expand && 
              <motion.div className='text-lg flex flex-col gap-5'>
                <span className='text-5xl'>$67</span>
                <p className='pb-1 w-80 text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nihil!</p>
                {/* Select size */}
                <div className='flex gap-3 flex-col'>
                  <span className='font-semibold text-md'>Select Size</span>
                  <ul className='flex gap-2'>
                    <li onClick={(event)=>{event.stopPropagation();setSize('S')}} className={size ==='S'?'border-black h-8 w-8 cursor-pointer rounded-full border-2 flex justify-center items-center text-lg hover:bg-gray-200':'h-8 w-8 cursor-pointer rounded-full border-2 flex justify-center items-center text-lg hover:bg-gray-200'}>S</li>
                    <li onClick={(event)=>{event.stopPropagation();setSize('M')}} className={size ==='M'?'border-black h-8 w-8 cursor-pointer rounded-full border-2 flex justify-center items-center text-lg hover:bg-gray-200':'h-8 w-8 cursor-pointer rounded-full border-2 flex justify-center items-center text-lg hover:bg-gray-200'}>M</li>
                    <li onClick={(event)=>{event.stopPropagation();setSize('L')}} className={size ==='L'?'border-black h-8 w-8 cursor-pointer rounded-full border-2 flex justify-center items-center text-lg hover:bg-gray-200':'h-8 w-8 cursor-pointer rounded-full border-2 flex justify-center items-center text-lg hover:bg-gray-200'}>L</li>
                    <li className='pl-4 font-bold cursor-pointer text-gray-400 flex justify-center items-center text-lg'>SIZE GUIDE</li>
                  </ul>
                </div>
                {/* Carousal */}
                <ul className='flex gap-3 justify-center items-center'>
                  <li id='0' key={0} className='h-48 w-24 bg-gray-200 hover:bg-gray-300 relative cursor-pointer' onClick={(event)=>{event.stopPropagation();setImageSelected(0)}}> 
                    <Image 
                      src="/images/Model.png"
                      alt="Model Image"
                      layout='fill'
                    />
                  </li>
                  <li id='1' key={1} className='h-48 w-24 bg-gray-200 hover:bg-gray-300 relative cursor-pointer' onClick={(event)=>{event.stopPropagation();setImageSelected(1)}}> 
                    <Image 
                      src="/images/Model.png"
                      alt="Model Image"
                      layout='fill'
                    />
                  </li>
                  <li id='2' key={2} className='h-48 w-24 bg-gray-200 hover:bg-gray-300 relative cursor-pointer' onClick={(event)=>{event.stopPropagation();setImageSelected(2)}}> 
                    <Image 
                      src="/images/Model.png"
                      alt="Model Image"
                      layout='fill'
                    />
                  </li>
                  <li id='3' key={3} className='h-48 w-24 bg-gray-200 hover:bg-gray-300 relative cursor-pointer' onClick={(event)=>{event.stopPropagation();setImageSelected(3)}}> 
                    <Image 
                      src="/images/Model.png"
                      alt="Model Image"
                      layout='fill'
                    />
                  </li>
                  <button aria-describedby='More'>
                    {/* Right Arrow */}
                    <svg className='cursor-pointer' width="30" height="30" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z"/></svg>
                  </button>
                </ul>
              </motion.div>
              }
            </motion.div>
          </motion.div>
        </main>
      </div>
    )
  else
    return (
    <div className='max-h-screen overflow-hidden'>
      <Head>
        <title>Qoohoo Assignment</title>
        <meta name="description" content="Qoohoo Assignment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className='border-b-2'>
        <div className="grid grid-cols-12">
          <a title="Options" href="#" className="col-span-1 py-5 flex justify-center items-center border-r">
            <Image src="/icons/Options.svg" alt="Options" width={28.5} height={9.5}/>
          </a>
          <a title="Goto Home page" href="#" className="col-span-1 py-5 flex justify-center items-center border-x">
            <Image src="/icons/Logo.svg" alt="Logo" width={31} height={23.5}/>
          </a>
          <ul className="flex justify-start items-center gap-2 flex-row col-span-3 border-x px-4">
            <li>
              <a title="New" href="#" className='p-3 font-semibold'>New</a>
            </li>
            <li>
              <a title="Sale" href="#" className='p-3 font-semibold'>Sale</a>
            </li>
            <li>
              <a title="Men" href="#" className='p-3 font-semibold'>Men</a>
            </li>
            <li>
              <a title="Women" href="#" className='p-3 font-semibold'>Women</a>
            </li>
          </ul>
          {/* Search */}
          <div className="col-span-4 gap-2 p-3 flex justify-center items-center border-x">
            {/* Heart Logo */}
            <a title="Liked Items" href="#"><Image src="/icons/Heart.svg" alt="Heart" width={28.5} height={23.5}/></a>
            <span title='Search' >Search</span>
            </div>
          <div className='col-span-3 flex gap-5 justify-center items-center border-l'>
            <a title="Cart" href="#" className='p-3'><Image src="/icons/Cart.svg" alt="Cart" width={16} height={18}/></a>
            <a title="Profile" href="#" className='p-3'><Image src="/icons/Profile.svg" alt="Profile" width={15.5} height={17.6}/></a>
          </div>
        </div>
      </nav>
      <main >
        <motion.div className="grid grid-cols-12 relative" onClick={(event)=>{
            // Prevents the click event from bubbling up to the parent
            event.stopPropagation();
            if(expand){
              setExpand(false);
              setImageSelected(-1);
            }
          }}>
          <LayoutGroup>
            <motion.div layout className={expand?'col-span-12 min-h-screen' :'col-span-9 border-r min-h-screen'}>
              <div className="ml-72 mt-9 relative">
                <div className={expand? 'relative':"ml-52 relative"}>
                  {/* blobs */}
                  <div className={expand?'absolute top-32 right-1 pl-2 scale-125' :"absolute top-16 -left-16 pl-2"} >
                    <Image src="/images/BlobLight.svg" alt="Blob1" height={511} width={500.1}/>
                  </div>
                  <div className={expand? 'absolute top-28 right-1 pt-8 scale-125':"absolute top-16 -left-16 pt-8"} >
                    <Image src="/images/BlobDark.svg" alt="Blob1" height={470} width={500.6}/>
                  </div>

                  {/* Main Image */}
                  <motion.div key={imageSelected} className={expand? 'absolute right-44 -top-6' : 'absolute left-0 -top-6'} animate={imageSelected != -1 ? "slideIn" : ""} variants={variantsModelImage} >
                    <Image 
                      src="/images/Model.png"
                      alt="Model Image"
                      height={665.7*1.07}
                      width={324.1*1.07}
                    />
                  </motion.div>
                </div>
                
                
                {/* Options */}
                {!expand && <div className='absolute top-36 right-36 flex flex-col gap-y-10'>
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
            <motion.div layout className={expand?"col-span-0 border-l" :" flex justify-center items-center col-span-3 border-l bg-gray-100"}>
            </motion.div>
          </LayoutGroup>
          {/* Text + Button */}
          <motion.div layout="position" className={expand? 'absolute top-12 left-56 flex flex-col gap-4 justify-center items-start': 'absolute top-80 left-56 flex gap-14 justify-center items-center'}>
            {/* Text */}
            <span className='text-6xl text-black font-bold w-80 leading-normal'>Tied Green V-Neck Shirt</span>
            {/* Button */}
            {!expand && <Image className='cursor-pointer' src="/icons/Add.svg" alt="Add" width={61.5} height={61} onClick={() => setExpand(expand=>!expand)} />}
            
            {/* Description */}
            {expand && 
            <motion.div className='text-lg flex flex-col gap-5'>
              <span className='text-5xl'>$67</span>
              <p className='pb-1 w-80 text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, nihil!</p>
              {/* Select size */}
              <div className='flex gap-3 flex-col'>
                <span className='font-semibold text-md'>Select Size</span>
                <ul className='flex gap-2'>
                  <li onClick={(event)=>{event.stopPropagation();setSize('S')}} className={size ==='S'?'border-black h-8 w-8 cursor-pointer rounded-full border-2 flex justify-center items-center text-lg hover:bg-gray-200':'h-8 w-8 cursor-pointer rounded-full border-2 flex justify-center items-center text-lg hover:bg-gray-200'}>S</li>
                  <li onClick={(event)=>{event.stopPropagation();setSize('M')}} className={size ==='M'?'border-black h-8 w-8 cursor-pointer rounded-full border-2 flex justify-center items-center text-lg hover:bg-gray-200':'h-8 w-8 cursor-pointer rounded-full border-2 flex justify-center items-center text-lg hover:bg-gray-200'}>M</li>
                  <li onClick={(event)=>{event.stopPropagation();setSize('L')}} className={size ==='L'?'border-black h-8 w-8 cursor-pointer rounded-full border-2 flex justify-center items-center text-lg hover:bg-gray-200':'h-8 w-8 cursor-pointer rounded-full border-2 flex justify-center items-center text-lg hover:bg-gray-200'}>L</li>
                  <li className='pl-4 font-bold cursor-pointer text-gray-400 flex justify-center items-center text-lg'>SIZE GUIDE</li>
                </ul>
              </div>
              {/* Carousal */}
              <ul onClick={(e)=>e.stopPropagation()} className='flex gap-3 justify-center items-center'>
              <li id='0' key={0} className='h-48 w-24 bg-gray-200 hover:bg-gray-300 relative cursor-pointer' onClick={(event)=>{event.stopPropagation();setImageSelected(0)}}> 
                    <Image 
                      src="/images/Model.png"
                      alt="Model Image"
                      layout='fill'
                    />
                  </li>
                  <li id='1' key={1} className='h-48 w-24 bg-gray-200 hover:bg-gray-300 relative cursor-pointer' onClick={(event)=>{event.stopPropagation();setImageSelected(1)}}> 
                    <Image 
                      src="/images/Model.png"
                      alt="Model Image"
                      layout='fill'
                    />
                  </li>
                  <li id='2' key={2} className='h-48 w-24 bg-gray-200 hover:bg-gray-300 relative cursor-pointer' onClick={(event)=>{event.stopPropagation();setImageSelected(2)}}> 
                    <Image 
                      src="/images/Model.png"
                      alt="Model Image"
                      layout='fill'
                    />
                  </li>
                  <li id='3' key={3} className='h-48 w-24 bg-gray-200 hover:bg-gray-300 relative cursor-pointer' onClick={(event)=>{event.stopPropagation();setImageSelected(3)}}> 
                    <Image 
                      src="/images/Model.png"
                      alt="Model Image"
                      layout='fill'
                    />
                  </li>
                {/* Right Arrow */}
                <svg onClick={(e)=>e.stopPropagation()} className='cursor-pointer' width="30" height="30" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z"/></svg>
              </ul>
            </motion.div>
            }
          </motion.div>
        </motion.div>
      </main>
    </div>
  )      
}

export default Home
