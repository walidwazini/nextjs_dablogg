import Image from 'next/image'
import React from 'react'

const Featured = () => {


  return (
    <div className='mt-8' >
      <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light' >
        <b>Hello</b> Discover latest story here!
      </h1>
      <div className='mt-20 flex flex-row items-center gap-12 px-2 ' >
        <div className='hidden relative h-[500px] lg:flex flex-1 ' >
          <img
            src={'https://picsum.photos/id/684/600/400'}
            className='object-cover w-[600px] h-[400px] '
          />
        </div>
        <div className='flex-1 flex flex-col gap-5 ' >
          <h1 className='text-[40px]' >Lorem ipsum dolor si</h1>
          <p className='text-xl font-light text-black dark:text-slate-200 ' >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, repudiandae at ut officiis aut
            voluptas sit laudantium inventore,
            obcaecati nobis quod dolor illum exercitationem voluptatum voluptatem quia consectetur accusantium debitis!
          </p>
          <button className='px-4 py-5 rounded-md w-max hover:underline hover:bg-slate-700 hover:bg-opacity-20 dark:hover:bg-slate-400 dark:hover:bg-opacity-20 ' >Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured