"use client"
import React, { useEffect, useState } from 'react'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import 'react-quill/dist/quill.bubble.css'
import { useRouter } from "next/navigation";
import { useSession } from 'next-auth/react'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import { IconButtons } from '@/constant'
import { CategoryList } from '@/constant'
import { app as firebaseApp } from '@/utils/firebase'

const storage = getStorage(firebaseApp)

const WritePage = () => {
  const router = useRouter()
  const { status } = useSession()
  const [modalOpen, setModalOpen] = useState(false)

  const [file, setFile] = useState(null)
  const [media, setMedia] = useState('')
  const [value, setValue] = useState('This is a test value')
  const [title, setTitle] = useState('Test')
  const [catSlug, setCatSlug] = useState('coding')

  const notify = () => toast("Wow so easy!");
  const uploadNotify = (text) => toast(text)

  const modalHandler = () => {
    setModalOpen(prevState => !prevState)
  }

  useEffect(() => {
    const upload = () => {
      // create unique name for same file 
      const uniqueName = new Date().getTime() + file.name
      const storageRef = ref(storage, uniqueName)

      const uploadeTask = uploadBytesResumable(storageRef, file)

      uploadeTask.on('state_changed', (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        console.log(`Upload is ${progress}% done.`)

        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused.')
            uploadNotify('Upload is paused')
            break;
          case 'running':
            uploadNotify('Upload is running')
            break
        }
      },
        (error) => console.log(error),
        () => {
          getDownloadURL(uploadeTask.snapshot.ref)
            .then(downloadUrl => {
              // console.log(`File is available at : ${downloadUrl}`)
              uploadNotify(`Upload is complete`)
              setMedia(downloadUrl)
            })
        }
      )
    }
    file && upload()
  }, [file])

  const randomDigit = Math.floor(Math.random() * 12)
  const dateNow = new Date().getTime()
  const convertTitle = title => title.replace(/\s/g, '').toLowerCase().slice(0, 7)

  const handleSubmit = async () => {
    const toBeSend = {
      title,
      desc: value,
      img: media,
      slug: `${dateNow}-${convertTitle(title)}-${randomDigit}`,
      catSlug: catSlug || "style", //If not selected, choose the general category
    }
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify(toBeSend),
    });

    if (res.status === 200) {
      const data = await res.json();
      console.log(data)
      router.push(`/posts/${data.id}`);
      // router.push(`/`);
    }
  }

  if (status === 'unauthenticated') return (
    <div className='conatiner' >
      <h1>Please sign in first </h1>
    </div>
  )

  return (
    <div className='container' >
      <div>
        {/* <button onClick={notify}>Notify!</button> */}
        <ToastContainer  />
      </div>
      <input
        value={title}
        onChange={ev => setTitle(ev.target.value)}
        type='text' placeholder='Title'
        className='w-full p-4 text-4xl border-none outline-none text-slate-700 dark:text-white bg-transparent '
      />
      <div className='flex w-full items-start justify-between ' >
        <select
          onChange={ev => setCatSlug(ev.target.value)}
          className='mb-12 px-5 py-3 w-max capitalize ' >
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
          onClick={handleSubmit}
          className='px-5 py-3 bg-[#1a8917] hover:bg-opacity-75 dark:hover:bg-opacity-75 dark:bg-[#349e30] text-white rounded-2xl'
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
            {IconButtons.map(btn => (
              <button key={btn.id} className='w-9 h-9 rounded-[50%] bg-cyan-500 border-solid border-slate-300 flex items-center justify-center cursor-pointer' >
                <label htmlFor={btn.id} >
                  {btn.icon}
                </label>
              </button>
            ))}
          </div>
        )}
        <ReactQuill theme='bubble'
          className='w-full'
          placeholder='Tell your story...'
          value={value}
          onChange={setValue}
        />
      </div>
    </div>
  )
}

export default WritePage