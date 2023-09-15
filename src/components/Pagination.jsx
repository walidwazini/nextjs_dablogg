"use client"

import React from 'react'
import { useRouter } from 'next/navigation'

const Pagination = ({ page, hasPrev, hasNext }) => {
  const router = useRouter()

  return (
    <div className='flex justify-between ' >
      <button
        onClick={() => router.push(`?page=${page - 1}`)}
        disabled={!hasPrev}
        className={`w-24 p-4 text-white ${!hasPrev ? 'bg-red-950 text-red-700 cursor-not-allowed ' : 'bg-red-500 cursor-pointer '}  `}
      >
        Previous
      </button>
      <button
        onClick={() => router.push(`?page=${page + 1}`)}
        disabled={!hasNext}
        className={`w-24 p-4 text-white ${!hasNext ? 'bg-red-950 text-red-700 cursor-not-allowed ' : 'bg-red-500 cursor-pointer '}  `}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination