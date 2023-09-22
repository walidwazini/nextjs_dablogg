"use client"
import React, { useState } from 'react'
import { BsFillPlusCircleFill, BsFillImageFill, BsCameraVideoFill } from 'react-icons/bs'
import { FiUpload, } from 'react-icons/fi'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import 'react-quill/dist/quill.bubble.css'
import { useRouter } from "next/navigation";
import { useSession } from 'next-auth/react'

import { CategoryList } from '@/constant'

const iconButtons = [
  { id: 'file', icon: <FiUpload /> },
  { id: 'image', icon: <BsFillImageFill /> },
  { id: 'video', icon: <BsCameraVideoFill /> }
]

const WritePage = () => {
  const router = useRouter()
  const { status } = useSession()
  const [modalOpen, setModalOpen] = useState(false)

  const [file, setFile] = useState(null)

  const modalHandler = () => {
    setModalOpen(prevState => !prevState)
  }

  if (status === 'unauthenticated') return (
    <div className='conatiner' >
      <h1>Please sign in first </h1>
    </div>
  )

  return (
    <div className='container' >
      <input
        type='text' placeholder='Title'
        className='w-full p-4 text-4xl border-none outline-none text-slate-400 bg-transparent '
      />
      <div className='flex w-full items-start justify-between ' >
        <select className='mb-12 px-5 py-3 w-max capitalize ' >
          {CategoryList.map(item => (
            <option
              className='capitalize'
              key={item.color} value={item.title}
            >
              {item.title}
            </option>
          ))}
        </select>
        <button
          className='px-5 py-3 bg-[#1a8917] dark:bg-[#349e30] text-white rounded-2xl'
        >
          Publish
        </button>
      </div>
      <div className='flex gap-5 h-[600px] relative ' >
        <button
          onClick={modalHandler}
          className='hover:cursor-pointer w-9 h-9 rounded-[50%] border-solid border-slate-300 flex items-center justify-center cursor-pointer '
        >
          <BsFillPlusCircleFill size={25} />
        </button>
        {modalOpen && (
          <div className='add flex gap-5 absolute z-[999] w-1/2 left-12 ' >
            <input
              onChange={ev => setFile(ev.target.files[0])}
              type='file' id='image'
              style={{ display: 'none' }}
            />
            {iconButtons.map(btn => (
              <button key={btn.id} className='w-9 h-9 rounded-[50%] bg-cyan-500 border-solid border-slate-300 flex items-center justify-center cursor-pointer' >
                <label htmlFor={btn.id} >
                  {btn.icon}
                </label>
              </button>
            ))}
          </div>
        )}
        <ReactQuill theme='bubble'
          className='w-full '
          placeholder='Tell your story...'
        />
      </div>
    </div>
  )
}

export default WritePage