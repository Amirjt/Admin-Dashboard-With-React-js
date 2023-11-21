import React from 'react'

export default function EmptyError({text}) {
  return (
    <div className='bg-red-500 w-full flex justify-center p-5 rounded-3xl shadow-xl'>
      <span className='font-bold text-base text-center md:text-2xl text-main' >{text}</span>
    </div>
  )
}
