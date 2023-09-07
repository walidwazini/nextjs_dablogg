import React from "react";
import Link from "next/link";
import Image from "next/image";

const dummyData = [
  { title: 'style', bgColor: '#57c4ff31', },
  { title: 'fashion', bgColor: '#da85c731', },
  { title: 'food', bgColor: '#7fb88133' },
  { title: 'travel', bgColor: '#ff795736' },
  { title: 'culture', bgColor: '#ffb04f45', },
  { title: 'coding', bgColor: '#5e4fff31', },
]

const CategoryList = () => {
  return (
    <div className="" >
      <h1 className="mx-12 my-1" >Popular Categories</h1>
      <div className="flex flex-wrap justify-between gap-5 " >
        {dummyData.map((item, i) => {
          console.log(item.bgColor)
          return (<Link
            href={'/blog?cat=style'} key={item.name}
            className={`flex items-center gap-2 w-full md:w-[45%] lg:w-1/4 xl:w-1/6 h-20 justify-center rounded-lg`}
            style={{ backgroundColor: item.bgColor }}
          >
            <Image
              alt="image"
              src={'https://picsum.photos/id/184/600/400'}
              className="rounded-2xl" width={32} height={32}
            />
            <h1 className="capitalize" >
            {item.title}
            </h1>
          </Link>)
        })}
      </div>
    </div>
  )
}

export default CategoryList