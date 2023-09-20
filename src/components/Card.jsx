import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import moment from 'moment/moment'

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/categories', {
    cache: 'no-store'
  })

  if (!res.ok) {
    throw new Error('Failed')
  }

  return res.json()
}

const Card = async ({ title, createdAt, catSlug, slug, id }) => {

  const categoriesList = await getData()
  const selectedCat = categoriesList?.find(category => category.title === catSlug)

  // Color Scheme include opacity, slice() to remove opacity
  // console.log(categoriesList[0]?.colorScheme.slice(0,7))

  return (
    <div className='mb-12 flex items-center gap-12  ' >
      <div className='hidden lg:flex flex-1 h-[350px] relative justify-center items-center ' >
        <Image width={400} height={300} className='object-cover' src={'https://picsum.photos/id/300/600/400'} alt='image' />
      </div>
      <div className='flex-1 flex flex-col gap-2 ' >
        <div className='flex gap-5 justify-start' >
          <span>
            {moment(createdAt).fromNow()}
          </span>
          <span
            className='font-medium py-1 px-2 text-xs rounded-2xl '
            style={{ backgroundColor: selectedCat?.colorScheme?.slice(0, 7) }}
          >
            {catSlug}
          </span>
        </div>
        <Link href={`/posts/${id}`} className='hover:underline text-xl ' >
          <h1>{title}</h1>
        </Link>
        <div className='text-sm md:text-md font-extralight dark:text-slate-200 ' >
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