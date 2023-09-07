import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Card = ({ title, createdAt, catSlug, slug }) => {
  return (
    <div className='mb-12 flex items-center gap-12  ' >
      <div className='hidden lg:flex flex-1 h-[350px] relative justify-center items-center ' >
        <Image width={400} height={300} className='object-cover' src={'https://picsum.photos/id/300/600/400'} alt='image' />
      </div>
      <div className='flex-1 flex flex-col gap-2 md:gap-7 ' >
        <div> {/* style.detail  */}
          <span>
            {createdAt.substring(0, 10)} -{" "}
          </span>
          <span className='uppercase text-orange-600 font-medium ' >{catSlug}</span>
        </div>
        <Link href={`/`} className='hover:underline text-xl ' >
          <h1>{title}</h1>
        </Link>
        <div className='text-sm md:text-lg font-extralight dark:text-slate-200 ' >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Id hic eveniet inventore perferendis? Omnis non minus, optio,
          sunt corporis sequi vero rerum saepe, natus odio et laudantium porro eius quas.
        </div>
        <Link href={'/'} className='border-b-2 border-b-red-600 w-max px-1 py-0 ' >
          Read More
        </Link>
      </div>
    </div>
  )
}

export default Card