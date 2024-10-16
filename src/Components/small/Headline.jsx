import React from 'react'

function Headline({p,heading}) {
  return (
    <>
        <h1 className='text-gray-900 font-bold text-[1.2rem] sm:text-2xl lg:text-3xl'>{heading}</h1>
        <p className='text-slate-900 text-[12px] sm:text-[14px] lg:text-[1rem] pt-3 lg:pt-4'>{p}</p>
    </>
  )
}

export default Headline