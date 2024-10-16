import React, { useState } from 'react'
import Headline from './small/Headline'

function Comfort(props) {
    const {data, nextSlide} = props; // Destructuring of data & function
    const [selectedItemIndex, setSelectedItemIndex] = useState(null); // Index of selected option
    const [isClicked, setIsClicked] = useState(false); // Selected option state
    const [isDisabled, setisDisabled] = useState(true); // Button state

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
        <div className='container flex flex-col gap-8 md:gap-14'>
            <div className='flex flex-col text-center px-4 sm:px-0'>
                <Headline {...data}/>
            </div>
            <div className='flex gap-3 flex-wrap justify-center px-2 sm:px-0'>
            {data.boxes.map((e,index) => {
                return (
                    <div key={index} 
                    className={`*:cursor-pointer cursor-pointer select-none border-2 border-gray-200 rounded-md flex flex-col justify-center items-center w-[180px] sm:w-[200px] h-[150px] sm:h-[170px] 
                    ${selectedItemIndex == index && isClicked  ? 'shadow-md customBorder transition-all duration-500' : ''}`}
                    onClick={() => handleItemClick(index)}>
                        <div className={`w-[90px] sm:w-[100px] ${index == 2 && `min-w-[140px] sm:w-[160px]`} min-h-[60px] flex justify-center items-center mb-3`}>
                            <img src={e.img} alt=""/>
                        </div>
                        <p className='text-[13px] sm:text-[14px] font-medium'>{e.subject}</p>
                        <span className='text-gray-500 text-[14.5px] sm:text-[16px]'>{e.level}</span>
                    </div>
                )
            })}
            </div>
            <button onClick={() => { nextSlide(); handleClick(); }} disabled={isDisabled} className='bg-black select-none text-white font-medium rounded-md px-8 py-2 w-max disabled:cursor-not-allowed disabled:bg-gray-300 transition-all duration-500 mx-auto'>Continue</button> 
        </div>
    </>
  )
}

export default Comfort