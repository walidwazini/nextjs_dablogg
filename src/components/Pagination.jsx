"use client"

import React from 'react'
import { useRouter } from 'next/router'

const Pagination = ({ page, hasPrev, hasNext }) => {
  // const router = useRouter()

  return (
    <div className='flex justify-between ' >
      <button
        onClick={() => { }}
        disabled={hasPrev}
        className={`w-24 p-4 text-white ${!hasPrev ? 'bg-red-950 cursor-not-allowed ' : 'bg-red-500 cursor-pointer '}  `}
      >
        Previous
      </button>
      <button
        onClick={() => { }}
        disabled={!hasNext}
        className={`w-24 p-4 text-white bg-red-600 cursor-pointer } `}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination