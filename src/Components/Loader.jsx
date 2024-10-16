import React, { useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';

function Loader() {
  const [progress, setProgress] = useState(0); // Circular progress state
  setInterval(() => {
    setProgress(progress + 10);
  }, 1000);
  return (
    <>
        <div className='container flex flex-col justify-center items-center gap-6'>
            <CircularProgress variant="determinate" value={progress} thickness={5} size={100} sx={{color: '#f2b946'}}/>
            <h1 className='text-gray-900 text-center font-bold px-4 text-[1.1rem] sm:text-[1.3rem] sm:px-0 lg:text-2xl'>
                Finding learning path recommendations for you based on your responses
            </h1>
        </div>
    </>
  )
}

export default Loader