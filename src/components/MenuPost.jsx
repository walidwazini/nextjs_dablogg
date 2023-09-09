import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MenuPost = ({ withImage, category, author, bgColor }) => {
  return (
    <Link href={'/'} className='flex items-center gap-5 ' >
      {withImage && (
        <div className='flex relative aspect-square ' >
          <Image src='https://picsum.photos/id/163/600/400' width={180} height={120} alt='image' className='object-cover rounded-lg border-solid border-gray-300 ' />
        </div>
      )}
      <div className='flex-4 flex flex-col gap-1 ' >
        <span
          className='px-2 py-1 rounded-lg text-[9px] w-max'
          style={{ backgroundColor: bgColor }}
        >
          {category}
        </span>
        <h3 className='text-sm' >Lorem ipsum dolor sit amet consectetur adipisicing elit</h3>
        <div className='text-xs' >
          <span className='font-semibold' >{author} - </span>
          <span className='font-extralight' > 18.03.2023</span>
        </div>
      </div>
    </Link>
  )
}

export default MenuPost