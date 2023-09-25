import React from 'react'
import Image from 'next/image'
import Menu from '@/components/Menu'
import Comments from '@/components/Comments'
import moment from 'moment'

const getPostData = async (postId) => {
  const res = await fetch(`http://localhost:3000/api/posts/${postId}`, {
    cache: 'no-store'
  })

  if (!res.ok) throw new Error('Failed')

  return res.json()

}

const SinglePage = async ({ params }) => {
  const sampleText = `It is becoming increasingly common for businesses to have a website, although at the moment only 48% have one. Speaking of the half that have already gone digital, if you want to increase your presence on the Internet, it is essential that you have a good positioning in the main search engines, and, therefore, that you take care of the SEO of your page so that the crawlers detect it and make you climb positions when users search on the Internet.`
  const { postId } = params
  const data = await getPostData(postId)

  return (
    <div className='container' >
      <div className='flex items-center gap-12 ' >
        <div className='basis-1/2 h-full  ' >
          <h1 className='text-6xl mb-12 font-semibold' >
            {data?.title}
          </h1>
          <div className='flex items-center gap-5 ' >
            <div id="userImageContainer" className="realtive h-12 w-12 ">
              <Image
                width={200} height={100}
                className='object-cover rounded-[50%] '
                src={data?.user ? data?.user?.image : 'https://picsum.photos/id/214/400/400'}
                alt='user-profile-pic'
              />
            </div>
            <div id="userText" className='flex flex-col gap-1  ' >
              <span>{data?.user?.name}</span>
              <span>{moment(data?.createdAt).fromNow()}</span>
            </div>
          </div>
        </div>
        <div className='basis-1/2 h-full ' >
          <Image
            width={400} height={200}
            className='object-cover h-[95%] rounded-lg '
            // src={'https://picsum.photos/id/214/600/350'}
            src={data?.img || 'https://picsum.photos/id/214/600/350'}
            alt='image'
          />
        </div>
      </div>
      <div className='flex gap-12 mt-4 p-1' >
        <div className='basis-2/3 p-1 mt-4  ' >
          <div className='text-lg font-light mb-5 ' >
            {/* <div dangerouslySetInnerHTML={{ __html: data?.desc }}> </div> */}
            <div dangerouslySetInnerHTML={{ __html: sampleText }} />
            <div>
              <Comments postSlug={data.slug} />
            </div>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  )
}

export default SinglePage