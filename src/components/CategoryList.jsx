import React from "react";
import Link from "next/link";
import Image from "next/image";

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/categories', {
    cache: 'no-store'
  })

  if (!res.ok) {
    throw new Error('Failed')
  }

  return res.json()
}

const CategoryList = async () => {
  const data =  await getData()

  return (
    <div className="" >
      <h1 className=" mx-12 my-3 font-bold text-2xl md:text-center text-start " >Popular Categories</h1>
      <div className="flex flex-wrap justify-between gap-5 " >
        {data.map((item, i) => (
          <Link
            href={`/blog?cat=${item?.slug}`} key={i}
            className={`flex hover:underline hover:font-medium items-center gap-2 w-full md:w-[45%] lg:w-1/4 xl:w-1/6 h-20 justify-center rounded-lg`}
            style={{ backgroundColor: item.colorScheme }}
          >
            <Image
              alt="image"
              src={'https://picsum.photos/id/184/600/400'}
              className="rounded-2xl" width={32} height={32}
            />
            <h1 className="capitalize " >
              {item.title}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CategoryList