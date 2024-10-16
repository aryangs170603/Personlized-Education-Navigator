import React from 'react'
import Headline from './small/Headline'

function LearningPaths({data}) {
  return (
    <>
        <div className='container flex flex-col items-center gap-12'>
            <div className='flex flex-col text-center px-4 sm:px-0'>
                <Headline {...data}/>
            </div>
            <div className='flex flex-col justify-center gap-4 md:flex-row'>
                {data.boxes.map((e,index) => {
                    return (
                        <div key={index} className='border-2 relative border-slate-100 rounded-md px-3 py-6 sm:py-5 md:py-7 sm:px-4 lg:py-4'>
                            { index == 0 && 
                                <div className='badge text-[8px] sm:text-[10px]'>
                                    MOST POPULAR
                                </div> }
                            <div className='flex items-center'>
                                <div className='w-[150px] sm:w-[210px]'> 
                                    <p className='text-[12px] sm:text-[14px] md:text-[15px]'>
                                        <span className='font-semibold'>{e} </span> 
                                        Build your foundational skills in algebra, geometry and probability.
                                    </p>
                                </div>
                                <div className='w-[100px] sm:w-[115px] lg:w-[145px]'>
                                    <img src={data.img} alt="" />
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </>
  )
}

export default LearningPaths