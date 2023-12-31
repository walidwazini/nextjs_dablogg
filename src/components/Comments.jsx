'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import useSWR from 'swr'
import moment from 'moment'

import naruto from '@/images/naruto_momento.jpg'
import { useSession } from 'next-auth/react'

const fetcher = async (url) => {
  const res = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
};

const CommentBlock = ({ username, imgUrl, createdAt, commentText }) => {
  return (
    <div className="comment mb-12 ">
      <div className="user flex items-center gap-5 mb-3 ">
        <Image
          width={200} height={100}
          className='object-cover rounded-full w-10 md:w-12 xl:w-14 aspect-square '
          src={imgUrl ? imgUrl : naruto}
          alt='user_profile'
        />
        <div id="user-info" className='flex flex-col gap-1  ' >
          <span className='text-sm md:text-base font-medium' >{username}</span>
          <span className='text-xs italic ' >
            {moment(createdAt).fromNow()}
          </span>
        </div>
      </div>
      <p className='font-light text-lg ' >
      {commentText}
      </p>
    </div>
  )
}

const Comments = ({ postSlug }) => {
  const session = useSession()
  const online = session.status === 'authenticated'
  const offline = session.status === 'unauthenticated'

  const { mutate, data, isLoading } = useSWR(`http://localhost:3000/api/comments?postSlug=${postSlug}`, fetcher)

  const [commentText, setCommentText] = useState('')

  const submitHandler = async () => {
    await fetch('/api/comments', {
      method: 'POST', body: JSON.stringify({ desc: commentText, postSlug })
    })
    mutate()
    setCommentText('')
  }

  return (
    <div className="container mt-12 ">
      <h1 className="title mb-6 font-bold ">Comments</h1>
      {offline && (
        <div className='mt-12 flex flex-col justify-center items-center gap-6 ' >
          <div>Login to write comment...</div>
          <Link className='py-2 px-3 bg-[#3378c7] rounded-md text-base ' href={'/login'} >Login</Link>
        </div>
      )}
      {online && (
        <div className="write flex items-center justify-between gap-8 ">
          <textarea name="comments"
            value={commentText}
            onChange={ev => setCommentText(ev.target.value)}
            placeholder='Write a comment'
            id="comment"
            className=" bg-slate-300 text-black text-sm p-2 rounded-md w-full  " />
          <button
            onClick={submitHandler}
            className="px-5 py-4 bg-black dark:bg-slate-300 dark:hover:bg-white text-white dark:text-black font-semibold rounded-md "
          >
            Send
          </button>
        </div>
      )}
      <div className="comments mt-12 ">
        {isLoading && (<div>Loading...</div>)}
        {!isLoading && data?.length === 0  && (<div>Be the first to comment.</div>)}
        {!isLoading && data?.map(item => (
          <CommentBlock
            username={item?.user?.name}
            imgUrl={item?.user?.image}
            createdAt={item?.createdAt}
            commentText={item?.desc}
          />
        ))}
      </div>
    </div>
  )
}

export default Comments