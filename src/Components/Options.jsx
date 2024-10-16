import React, { useState } from 'react'
import Headline from './small/Headline';
import '../index.css'

function Options(props) {
    const {data,nextSlide} = props; // Destructuring of data & function
    const [selectedItemIndex, setSelectedItemIndex] = useState(null); // Index of selected option
    const [isClicked, setIsClicked] = useState(false) // Selected option state
    const [isDisabled, setisDisabled] = useState(true) // Button state

    /* Function to handle different states when option is selected */
    const handleItemClick = (index) => {
        setSelectedItemIndex(index);
        setisDisabled(false);
        setIsClicked(true);
    };

    /* Function to reset the states when button is clicked */
    const handleClick = () => {
        setIsClicked(!isClicked)
        setisDisabled(!isDisabled);
    }
  return (
    <> 
         <div className='container flex flex-col items-center gap-7 md:gap-8 md:mt-6'>
            <div className='flex flex-col text-center px-4 sm:px-0'>
                <Headline {...data}/>
            </div>
            <div className='flex flex-col gap-3'>
            {data.option.map((item,index) => {
                return (
                    <div key={index} 
                    className={`*:cursor-pointer cursor-pointer select-none border-2 border-slate-100 flex items-center rounded-md gap-4 p-4 w-[80vw] sm:w-[70vw] md:w-[60vw] lg:w-[50vw] xl:w-[40vw]
                    ${selectedItemIndex == index && isClicked  ? 'shadow-md customBorder transition-all duration-500' : ''}`} 
                    onClick={() => handleItemClick(index)}>
                        <img src={item.img} alt="" className='w-[25px] md:w-[30px]' />
                        <label className='font-medium text-[12.5px] sm:text-[14px] lg:text-[1rem]'>{item.main}
                            {index < 3 && item.sub &&
                                <span className='font-normal text-[12px] sm-[13px] lg:text-sm text-gray-600'> {item.sub}
                                </span>
                            }
                        </label>
                    </div>
                )
            })}
            </div>
            <button onClick={() => { nextSlide(); handleClick(); }} disabled={isDisabled} className={`bg-black select-none text-white font-medium rounded-md px-8 py-2 w-max disabled:cursor-not-allowed disabled:bg-gray-300 transition-all duration-500 mx-auto`}>Continue</button> 
        </div>
    </>
  )
}

export default Options