import React from 'react'
import Image from 'next/image'
import Menu from '@/components/Menu'

const SinglePage = () => {
  return (
    <div className='container' >
      <div className='flex items-center gap-12 ' >
        <div className='basis-1/2 h-full  ' >
          <h1 className='text-6xl mb-12 font-semibold' >Lorem ipsum dolor sit</h1>
          <div className='flex items-center gap-5 ' >
            <div id="userImageContainer" className="realtive h-12 w-12 ">
              <Image
                width={200} height={100}
                className='object-cover rounded-[50%] '
                src={'https://picsum.photos/id/214/400/400'}
                alt='image'
              />
            </div>
            <div id="userText" className='flex flex-col gap-1  ' >
              <span>Asa Hitoma</span>
              <span>17.04.2023</span>
            </div>
          </div>
        </div>
        <div className='basis-1/2 h-full ' >
          <Image
            width={400} height={200}
            className='object-cover h-[95%] rounded-lg '
            src={'https://picsum.photos/id/214/600/350'}
            alt='image'
          />
        </div>
      </div>
      <div className='flex gap-12 mt-4 p-1' >
        <div className='basis-2/3 p-1 mt-4  ' >
          <div className='text-lg font-light mb-5 ' >
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat iusto aliquam dolorem
              dolore sed officia eveniet in? Assumenda error eaque voluptates quia aliquid odio qui minima! Sunt sed officia nihil.
            </p>
            <div>
              Comment
            </div>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  )
}

export default SinglePage