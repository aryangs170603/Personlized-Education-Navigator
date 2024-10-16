import React from 'react'
import Headline from './small/Headline';

function ImgBanner(props) {
    const {data,nextSlide} = props; // Destructuring of data & function
  return (
    <>
        <div className='container flex flex-col gap-10'>
            <div className='flex flex-col items-center gap-2 md:flex-row md:gap-0 lg:gap-16'>
                {/* Displaying the banner image as per JSON data */}
                { data.display && 
                    <div className='w-[200px] sm:w-[260px] lg:w-[320px]'>
                        <img src={data.img} alt=""/>
                    </div> }

                { data.author && 
                    <div className='w-[260px] sm:w-[320px] md:min-w-[360px] lg:w-[400px]'>
                        <img src={data.img} alt=""/>
                    </div> }
                
                {/* Displaying the text as per JSON data */}
                { data.display && 
                    <div className='flex flex-col px-4 text-center max-w-[500px] sm:px-0 md:text-left'>
                        <Headline {...data}/>
                    </div> }
                    
                { data.author && 
                    <div className='flex flex-col text-center max-w-[560px] text-[14px] md:text-left md:text-[14.5px]'>
                        <h1 className='text-gray-900 font-bold text-[1.2rem] sm:text-2xl lg:text-3xl'>
                            {data.heading}
                        </h1>
                        <p className=' text-yellow-500 text-3xl pt-3 md:text-4xl md:pt-5 lg:pt-7'>
                            ★★★★★
                        </p>
                        <p className='text-slate-900 font-[500] text-[12px] sm:text-[14px] lg:text-[1rem] px-4 leading-6 italic pt-2 pb-4 sm:px-0 md:pb-6'>
                            "{data.p}"
                        </p>
                        <span className='italic'>{data.author}</span>
                    </div> }
            </div>
            <button onClick={nextSlide} className='bg-black select-none text-white font-medium rounded-md px-8 py-2 w-max mx-auto'>Continue</button> 
        </div>
    </>
  )
}

export default ImgBanner